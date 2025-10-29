# Section 5 – Refactoring Code Smells in Practice

This activity was done by Adira Rana to practice identifying code smells and applying refactoring patterns to a real codebase in CMPM 121, Game Development Patterns.

## Changes Made

For this assignment, I **analyzed and improved the code**:

1. **First Smell**: Various variables with mystery names. I changed their names to make more sense.
2. **Second Smell**: Repeated code in multiple areas. I extracted that code into a callable function.
3. **Third Smell**: Unnessessary comments. Removed them.
4. **Fourth Smell**: Unnessessary function and long function. I removed them both

- this required extracting the code out of the long function
- changed the return statement into a throw statement

5. **Fifth Change**: Moved stylizing code to a sperate css document, having the code switch between classes rather than constantly changing the style
