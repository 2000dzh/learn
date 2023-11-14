-- 查询学生信息表
select * from student;

-- 查询最高分
select MAX(score) from student;

-- 根据分数查找这个学生
select name, class from student where score = 95;

-- 合并这个两个上面这个两个 sql (子查询)
select name, class from student where score = (select Max(score) from student);

-- 查询高于全校平均成绩的同学
select name, class from student where score > (select AVG(score) from student);

-- 查询部门表
select * from department;

-- 查询员工表
select * from employee;

-- 查询有员工的部门
-- 如果该部门下有员工,返回这个部门的名称 (exists 的作用: 子查询返回结果,条件成立,反之不成立)
select name from department
	where exists (
		select * from employee where department.id = employee.department_id
    );

-- 查询没有员工的部门
select name from department
	where not exists (
		select * from employee where department.id = employee.department_id
    );

-- 更新技术部员工姓名
update employee set name = concat('技术-',name)
	where department_id = (
		select id from department where name = '技术部'
    );

-- 删除技术部所有员工
delete from employee where department_id = (
	select id from department where name = '技术部'
);


-- 查询产品表
select * from product;

-- 查询价格最高的产品
select name, price from product where price = (select max(price) from product);

-- 查询产品表中, 类别 平均价格 ,并根据类别分组,然后插入新表中
insert into avg_price_by_category (category, avg_price)
	select category, avg(price) from product group by category;

select * from avg_price_by_category;