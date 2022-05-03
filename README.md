# pizza-delivery-challenge
Repository for solutions to [Pizza Delivery homework challenge](https://relevant-healthcare.github.io/pizza-challenge/index.html)

## Process ##
I began by working through a more simple solution to step 1. 
I realized quickly that I would be better served by building out unit tests, given the initial expected values provided in the instructions, and pivoted to TDD for Step 2.


The final instructions mentioned to "Provide a solution that answers part 1 and part 2", which I interpreted as meaning that one function should handle both cases (Maria on her own, and Maria plus Clovis). In the spirit of showing my work, I've included both my first pass approach (Just Maria) in `pizza-delivery-1.ts` and my second pass approach with both paths in `pizza-delivery-2.ts`. I've included test suites for both, with more robust testing in `2` to handle all cases.

## Testing ##
I used Jest for unit testing my solutions. This allowed me to run `jest` periodically while iterating through my response. I scripted out all of my test cases based on the examples included in the homework instructions, which gave me a very clear indication when something wasn't working and allowed me better visualization into adjusting my logic on the fly.

### Final Solution ###

Please consider the solution in `pizza-delivery-2.ts` my final submission.