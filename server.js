const db = require('./db/connection');
const { prompt } = require('inquirer')
const menu = async () => {
    const { answer } = await prompt([{
        type: 'list',
        name: 'answer',
        message: 'Choose one',
        choices: ['View all departments', 'View all employees', 'View all roles', 'Create department', 'Create employee', 'Create role']
    }])
    switch (answer) {
        case 'View all departments':
            viewAllDepartments()
            break
        case 'View all employees':
            viewAllEmployees()
            break
        case 'View all roles':
            viewAllRoles()
            break
        case 'Create department':
            createDepartment()
            break
        case 'Create employee':
            createEmployee
            break
        case 'Create role':
            createRole
            break
    }
}
const viewAllDepartments = async () => {
    try {
        const [data] = await db.promise().query('SELECT * from department')
        console.table(data);
        menu()
    } catch (err) {
        console.log(err)
    }
}

const createDepartment = async () => {
    try {
        const [data] = await db.promise().query('INSERT INTO department')
        console.table(data);
        menu()
    } catch (err) {
        console.log(err)
    }
}

const viewAllEmployees = async () => {
    try {
        const [data] = await db.promise().query('SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, conCat(manager.first_name, " " , manager.last_name) as manager from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee manager on employee.manager_id = manager.id ')
        console.table(data);
        menu()
    } catch (err) {
        console.log(err)
    }
}

const createEmployee = async () => {
    try {
        const [data] = await db.promise().query('INSERT INTO employee')
        console.table(data);
        menu()
    } catch (err) {
        console.log(err)
    }
}

const viewAllRoles = async () => {
    try {
        const[data] = await db.promise().query('SELECT role.title, role.salary,department.name from role left join department on role.department_id = department.id')
        console.table(data);
        menu()
    } catch (err) {
        console.log(err)
    }
}

const createRole = async () => {
    try {
        const[data] = await db.promise().query('INSERT INTO role')
        console.table(data);
        menu()
    } catch (err) {
        console.log(err)
    }
}


menu()