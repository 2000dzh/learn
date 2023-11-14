-- 查询 id 为 5 的部门下所有员工
select * from department
	join employee on department.id = employee.department_id
    where department.id = 5;
 

select * from department
	left join employee on department.id = employee.department_id;

select * from department
	right join employee on department.id = employee.department_id;