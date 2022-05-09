import { Employee } from "./employee";

export class EmployeeList {
    employees: Array<Employee>;
    lastMovedIndex: number;

    constructor() {
        this.employees = [];
        this.lastMovedIndex = -1;
    }

    public add(employee: Employee) {
        this.employees.push({...employee});
    };

    public getNextToMove(): Employee {
        if (this.lastMovedIndex >= 0 && this.lastMovedIndex < this.employees.length - 1) {        
            return this.employees[this.lastMovedIndex + 1];
        } else {
            return this.employees[0];
        }
    }

    public setLastMoved(): void {
        if (this.lastMovedIndex >= 0 && this.lastMovedIndex < this.employees.length - 1) {
            this.lastMovedIndex++;
        } else {
            this.lastMovedIndex = 0;
        }
    }
}