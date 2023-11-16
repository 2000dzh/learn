// 在 terminal 输入 redis-cli 进入交互模式

// 存一个值
// set key value

// 读取值(get 只能查看 string 类型数据)
// get key

// 递增存的值
// incr key

// 查询所有存的key
// keys '*' 全匹配
// keys 'ke*' 模糊匹配

////////////////////////////////////////////////////////////

// 左是头,右是尾

// 从左到右添加数据
// lpush list1 111

// 从右到左添加数据
// rpush list1 222

// 从左边开始删除数据
// lpop list1 111

// 从右边开始删除数据
// rpop list1 222

// 读取 list 类型数据
// 结尾下标为 -1 代表到最后。lrange list1 0 -1 就是查询 list1 的全部数据
// lrange list1 0 -1 


////////////////////////////////////////////////////////////

// set 的特点是无序并且元素不重复
// set 只能去重、判断包含，不能对元素排序

// 添加数据
// sadd set1 111
// sadd set1 111
// sadd set1 111
// sadd set1 222
// sadd set1 222
// sadd set1 333


// 判断集合中是否有元素
// siemeber set1 111


////////////////////////////////////////////////////////////


// 如果排序、去重的需求，比如排行榜，可以用 sorted set，也就是 zset

// 添加数据
// zadd zset1 5 guang
// zadd zset1 4 dong
// zadd zset1 3 xxx
// zadd zset1 6 yyyy


// 通过 zrange 命令取数据，比如取排名前三的数据：
// zrange zset1 0 2


////////////////////////////////////////////////////////////

// hash

// 添加数据
// hset hash1 key1 1
// hset hash1 key2 2
// hset hash1 key3 3
// hset hash1 key4 4
// hset hash1 key5 5


////////////////////////////////////////////////////////////

// geo 的数据结构，就是经纬度信息，根据距离计算周围的人用的。

// 添加数据
// 用 loc 作为 key，分别添加 guangguang 和 dongdong 的经纬度
// geoadd loc 13.361389 38.115556 "guangguang" 15.087269 37.502669 "dongdong" 

// 你可以用 geodist 计算两个坐标点的距离
// geodist loc guangguang dogndong

// 用 georadius 搜索某个半径内的其他点，传入经纬度、半径和单位：
// georadius loc 15 37 100 km
// georadius loc 15 37 200 km


////////////////////////////////////////////////////////////

// 一般 redis 的 key 我们会设置过期时间，通过 expire 命令

// 比如我设置 dong1 的 key 为 30 秒过期 等到了过期时间就会自动删除：
// expire dogn1 30

// 查询 key 的剩余过期时间
// ttl dogn1


