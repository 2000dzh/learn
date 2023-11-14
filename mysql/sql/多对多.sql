-- 关联三个表 查询 id 为 1 的所有文章
select * from article a 
	join article_tag at on a.id = at.article_id
    join tag t on t.id = at.article_id
    where a.id = 1;

-- 指定返回的列    
select t.name as 标签名, a.title as 文章标题
	from article a
    join article_tag at on a.id = at.article_id
    join tag t on t.id = at.tag_id
    where a.id = 1;

-- 删除 id 为 1 的文章
delete from article where id = 1;