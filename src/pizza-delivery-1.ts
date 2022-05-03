/* 
Part 1:

Maria is delivering pizzas to an infinite two-dimensional grid of houses. 
She begins by delivering a pizza to the house at her starting location; 
a dispatcher then calls via radio and tells her where to move next. 
Moves are always exactly one house to the north (^), south (v), east (>), or west (<). 
After each move, Maria delivers a pizza to the house at her new location. 
The dispatcher has been a little spacey lately, so Maria sometimes ends up delivering more than one pizza to the same house.

Here are some examples:

> delivers pizzas to two houses: one to the house at the starting location, 
and one to the house directly east of the starting location.

^>v< delivers pizzas to four houses in a square; the house at the starting/ending location ends up with two pizzas.

^v^v^v^v^v delivers a bunch of pizzas to some very lucky people at only two houses.

Given the string of dispatcher inputs in this file, how many houses receive at least one pizza?
*/

export function housesDelivered(directions: string): number {
    // Initiate starting location
    let location =  { x: 0, y: 0 };

    // Create list of visited houses
    let houseMap = [];
    houseMap.push({...location});

    // Loop through directions
    for (let i = 0; i < directions.length; i++) {
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