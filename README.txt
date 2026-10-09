PART 5 -- DEBUGGING AND CODE ANALYSIS

Program A
Error Type: Syntax Error
Problem Identified: The string assigned to the course variable is missing its closing double quotation mark.
Explanation: The statement const course = "Computer Engineering; begins a string with a double quotation mark but does not close it. Because the string is not properly terminated, JavaScript cannot parse the program.
How the Correction Was Verified: The closing double quotation mark was added after "Computer Engineering". The program was then run and correctly displayed "Computer Engineering - Year 4".

Program B
Error Type: Runtime Error
Problem Identified: The loop condition uses <= instead of <.
Explanation: Array indexes start at 0, so the valid indexes for the four-element scores array are 0 through 3. When i becomes 4, scores[4] is undefined because that element does not exist. The loop therefore attempts to print an undefined value.
How the Correction Was Verified: The condition was changed to i < scores.length. The program was run and displayed all four scores—85, 91, 73, and 88—without printing an extra undefined value.

Program C
Error Type: Logical Error
Problem Identified: The discount amount is subtracted directly from the subtotal instead of calculating 10% of the subtotal first.
Explanation: discount contains the rate 0.10, not the actual monetary discount. The original calculation subtracts 0.10 from the subtotal. The correct calculation is subtotal * discount, which gives the discount amount, and this amount is then subtracted from the subtotal.
How the Correction Was Verified: With a price of 750 and quantity of 4, the subtotal is 3000. A 10% discount is 300, so the correct final amount is 2700. The corrected program outputs 2700.

Program D
Error Type: Logical Error
Problem Identified: The calculateAverage function calculates the average but does not return it.
Explanation: The average variable is created inside the function, but without a return statement the function returns undefined by default. Therefore, result receives undefined instead of 90.
How the Correction Was Verified: A return average statement was added. With total = 450 and count = 5, the function now returns 90, which is correctly printed to the console.


Program E
Error Type: Logical Error
Problem Identified: The count variable is never increased inside the while loop.
Explanation: The loop condition is count <= 10, and count starts at 1. Because count never changes, the condition remains true forever. This creates an infinite loop that continuously prints 1.
How the Correction Was Verified: count++ was added inside the loop. The program now prints the numbers 1 through 10 and then stops when count becomes 11.
