class Organization {
    constructor(name, budget) {
        this.name = name;
        this.employees = [];
        this.budget = Number(budget);

        this.departmentsBudget = {
            marketing: this.budget * 0.40,
            finance: this.budget * 0.25,
            production: this.budget * 0.35,
        };
    }

    //employeeName => string | department => string | salary => number
    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] >= salary) {
            this.departmentsBudget[department] -= salary;
            let pattern = {
                employeeName,
                department,
                salary,
            };
            this.employees.push(pattern);
            return (`Welcome to the ${department} team Mr./Mrs. ${employeeName}.`);
        }
        return (`The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`);
    }

    employeeExists(employeeName) {
        for (let employee of this.employees) {
            if (employee.employeeName === employeeName) {
                return (`Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`);
            }
        }

        return (`Mr./Mrs. ${employeeName} is not working in ${this.name}.`);
    }

    leaveOrganization(employeeName) { // the problem is here
        for (let employee of this.employees) {
            if (employee.employeeName === employeeName) {
                this.departmentsBudget[employee.department] += employee.salary;
                let index = this.employees.indexOf(employee);
                this.employees.splice(index, 1);
                return (`It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`);
            }
        }

        return (`Mr./Mrs. ${employeeName} is not working in ${this.name}.`);
    }

    status() {
        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;
        let database = {
            marketing: [],
            finance: [],
            production: [],
        };
        for (let employee of this.employees) {
            const pattern = { [employee.employeeName]: employee.salary };
            database[employee.department].push(pattern);
        }
        for (const key in database) {
            database[key].sort((a, b) => {
                return Object.values(b) - Object.values(a);
            });
        }

        // console.log(department.charAt(0).toUpperCase() + department.toString().slice(1))
        // console.log(department.toString().substring(0, 1).toUpperCase() + department.toString().substring(1))
        for (const department in database) {
            output += `\n${department.charAt(0).toUpperCase() + department.toString().slice(1)} | Employees: ${database[department].length}:`;
            for (let employee of database[department]) {
                output += ` ${Object.keys(employee)[0]},`;
            }
            output = output.substring(0, output.length - 1);
            output += ` | Remaining Budget: ${this.departmentsBudget[department]}`;
        }
        return (output);
    }
}

// let organization = new Organization('SoftUni', 20000);
// organization.add('Gorge', 'marketing', 1000);
// organization.add('Kate', 'marketing', 20);
// organization.add('Susan', 'marketing', 10);
// organization.add('Peter', 'marketing', 1200);
// organization.add('Robert', 'finance', 2000);
// organization.add('Anna', 'production', 2000);
// organization.add('Theodora', 'production', 400);
// organization.add('Constantine', 'finance', 300);
// organization.add('John', 'production', 200);
// organization.status()