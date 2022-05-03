/* 
Part 2:
The next day, to speed up the process, Maria rents a pizza-delivering goat named Clovis. 
Maria and Clovis begin at the same starting location, and they both deliver a pizza to this starting house. 
Maria and Clovis then take turns moving based on the dispatcher’s instructions.

Here are some examples:

^v now delivers pizzas to three houses; Maria goes north and Clovis goes south.

^>v< now delivers pizzas to three houses; Maria and Clovis both end up back where they started.

^v^v^v^v^v now delivers pizzas to 11 houses; Maria treks north and Clovis treks south.

Given the same string of dispatcher inputs as in Part One, how many houses receive at least one pizza?
*/

export function housesDelivered(directions: string, includeGoat: boolean = false): number {
    // Initiate starting location
    const startingPoint =  { x: 0, y: 0 };

    // Initiate Maria and Clovis locations
    let mariaLocation = {...startingPoint};
    let clovisLocation = {...startingPoint};

    // Create list of visited houses
    let houseMap = [];
    houseMap.push({...startingPoint});

    // Loop through directions
    for (let i = 0; i < directions.length; i++) {
        const isClovisMove = includeGoat && i % 2 === 0;
        let location = isClovisMove ? clovisLocation : mariaLocation;
        // move location
        switch (directions[i].toLowerCase()) {
            case '^':
                location.y++;
                break;
            case 'v':
                location.y--;
                break;
            case '>':
                location.x++;
                break;
            case '<':
                location.x--;
                break;
            default:
                break;
        }

        // Check to see if house has already received a pizza
        // (don't double-count the same house)
        const visited = houseMap.find(h => h.x === location.x && h.y === location.y);

        if (visited == null) {        
            houseMap.push({...location});
        }
    }
    return houseMap.length;
}