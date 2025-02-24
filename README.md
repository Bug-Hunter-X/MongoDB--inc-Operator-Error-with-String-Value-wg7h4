# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a specified value.  However, if you provide a string value instead of a number, you'll get an error.

The `bug.js` file shows the incorrect usage. The `bugSolution.js` file demonstrates the correct way to use `$inc`.