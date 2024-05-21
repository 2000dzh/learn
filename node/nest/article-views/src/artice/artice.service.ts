import { Inject, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Article } from './entities/artice.entity';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class ArticeService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  @Inject(RedisService)
  private redisService: RedisService;

  async findOne(id: number) {
    return this.entityManager.findOneBy(Article, {
      id,
    });
  }

  async view(id: number, userId: string) {
    const articleId = `article_${id}`;
    const userArticle = `user_${userId}_article_${id}`;
    const res = await this.redisService.hashGet(articleId);

    if (res.viewCount ?? false) {
      const flag = await this.redisService.get(userArticle);

      if (flag) {
        return res.viewCount;
      }

      const viewCount = +res.viewCount + 1;
      await this.redisService.hashSet(articleId, {
        ...res,
        viewCount,
      });

      await this.redisService.set(userArticle, 1, 3);

      return viewCount;
    } else {
      const article = await this.findOne(id);
      if (!article) {
        return 0;
      }
      if (Object.hasOwn(article, 'viewCount')) {
        article.viewCount++;

        // await this.entityManager.save(article);
        await this.entityManager.update(
          Article,
          { id },
          {
            viewCount: article.viewCount,
          },
        );

        await this.redisService.hashSet(articleId, {
          viewCount: article.viewCount,
          likeCount: article.likeCount,
          collectCount: article.collectCount,
        });

        await this.redisService.set(userArticle, 1, 3);

        return article.viewCount;
      }
    }

    console.log(res);
    return 0;
  }

  async flushRedisToDB() {
    const keys = await this.redisService.keys(`article_*`);
    console.log(keys);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      const res = await this.redisService.hashGet(key);

      const viewCount = Object.hasOwn(res, 'viewCount') ? +res.viewCount : 0;

      const [, id] = key.split('_');

      await this.entityManager.update(
        Article,
        {
          id: +id,
        },
        {
          viewCount,
        },
      );
    }
  }
}
