SELECT * FROM `hello-mysql`.student;

select name, score FROM student;

select name as "名字", score as "分数" from student; 

select name as "名字", class as "班级" from student where age >= 19;

select name as "名字", class as "班级" from student where gender="男" and score >= 90;

select * from student where name like '王%';

select * from student where class in ('一班', '二班');

select * from student where class not in ('一班', '二班');

select * from student where age between 18 and 20;

select * from student limit 5;

select * from student limit 5,10;

select name,score,age from student order by score asc,age desc;

-- 统计每个班级的平均成绩
select class as '班级', avg(score) as '平均成绩' from student group by class order by '平均成绩' desc;

select class,count(*) as count from student group by class;

select class, AVG(score) as avg_score from student group by  class having avg_score > 90;

select distinct class from student;



