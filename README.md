# pizza-delivery-challenge
Repository for solutions to [Pizza Delivery homework challenge](https://relevant-healthcare.github.io/pizza-challenge/index.html)

## Process ##
I began by working through a more simple solution to step 1. 
I realized quickly that I would be better served by building out unit tests, given the initial expected values provided in the instructions, and pivoted to TDD for Step 2.

Upon figuring out a working solution, I began breaking down each piece for a more extensible object oriented approach, refactoring into separate classes - each in their own file. The final method resides in `pizza-delivery.ts`

## Testing ##
I used Jest for unit testing my solutions. This allowed me to run `npm test` periodically while iterating through my response. I scripted out all of my test cases based on the examples included in the homework instructions, which gave me a very clear indication when something wasn't working and allowed me better visualization into adjusting my logic on the fly.