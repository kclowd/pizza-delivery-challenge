import { Employee } from "./employee";
import { EmployeeList } from "./employee-list";
import { VisitedAddresses } from "./visited-addresses";

export function housesDelivered(directions: string, numberOfEmployees: number = 1): number {
    if (directions.length < 1) {
        return 0;
    }
    
    // Initialize employees
    const employees = new EmployeeList();
    for (let i = 1; i <= numberOfEmployees; i++) {
        employees.add(new Employee(i));
    }

    // Initialize visited addresses
    const visitedHouses = new VisitedAddresses();

    // Loop through directions
    for (let j = 0; j < directions.length; j++) {
        // Fetch the next employee in line to move
        const employeeToMove = employees.getNextToMove();

        // Move the appropriate employee
        employeeToMove.move(directions[j]);

        // Add the new address to visited houses list
        visitedHouses.add(employeeToMove.address);

        // Update the turn counter
        employees.setLastMoved();
    }
    
    return visitedHouses.addresses.length;
}