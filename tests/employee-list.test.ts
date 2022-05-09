import { Employee } from '../src/employee';
import { EmployeeList } from '../src/employee-list';

describe('employee list testing', () => {
    test('instantiating new employee list should create empty array', () => {
        const list = new EmployeeList();
        expect(list.employees.length).toBe(0);

        list.add(new Employee(1));
        expect(list.employees.length).toBe(1);
    });

    test('add method should add an employee to the list', () => {
        const list = new EmployeeList();
        list.add(new Employee(3));
        expect(list.employees.length).toBe(1);
    });

    test('getNextToMove if only one employee', () => {
        const list = new EmployeeList();
        list.add(new Employee(1));
        list.lastMovedIndex = 0;

        const nextMoved = list.getNextToMove();

        expect(nextMoved.id).toBe(1);
    });

    test('getNextToMove if multiple employees', () => {
        const list = new EmployeeList();
        list.add(new Employee(1));
        list.add(new Employee(2));
        list.lastMovedIndex = 0;
        
        const nextMoved = list.getNextToMove();

        expect(nextMoved.id).toBe(2);
    });

    test('getNextToMove if multiple employees and last moved was last in list', () => {
        const list = new EmployeeList();
        list.add(new Employee(1));
        list.add(new Employee(2));
        list.add(new Employee(3));
        list.lastMovedIndex = 2;

        const nextMoved = list.getNextToMove();

        expect(nextMoved.id).toBe(1);
    });

    test('setLastMoved if only one employee', () => {
        const list = new EmployeeList();
        list.add(new Employee(1));
        list.lastMovedIndex = 0;

        list.setLastMoved();

        expect(list.lastMovedIndex).toBe(0);
    });

    test('setLastMoved if multiple employees', () => {
        const list = new EmployeeList();
        list.add(new Employee(1));
        list.add(new Employee(2));
        list.add(new Employee(3));
        list.lastMovedIndex = 0;
        list.setLastMoved();

        expect(list.lastMovedIndex).toBe(1);
    });

    test('setLastMoved if multiple employees and last moved was last in list', () => {
        const list = new EmployeeList();
        list.add(new Employee(1));
        list.add(new Employee(2));
        list.add(new Employee(3));
        list.lastMovedIndex = 2;

        list.setLastMoved();

        expect(list.lastMovedIndex).toBe(0);
    });
  });