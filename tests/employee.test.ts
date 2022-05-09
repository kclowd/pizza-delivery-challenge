import { Employee } from '../src/employee';

describe('move method testing', () => {
    test('new employee should set address to starting point', () => {
        const employee = new Employee(1);
        expect(employee.address.x).toBe(0);
        expect(employee.address.y).toBe(0);
    });

    test('move north should add 1 to address.y', () => {
        const employee = new Employee(1);
        employee.move('^');
        expect(employee.address.x).toBe(0);
        expect(employee.address.y).toBe(1);
    });

    test('move south should subtract 1 from address.y', () => {
        const employee = new Employee(1);
        employee.move('v');
        expect(employee.address.x).toBe(0);
        expect(employee.address.y).toBe(-1);
    });

    test('move east should add 1 to address.x', () => {
        const employee = new Employee(1);
        employee.move('>');
        expect(employee.address.x).toBe(1);
        expect(employee.address.y).toBe(0);
    });

    test('move east should subtract 1 from address.x', () => {
        const employee = new Employee(1);
        employee.move('<');
        expect(employee.address.x).toBe(-1);
        expect(employee.address.y).toBe(0);
    });
  });