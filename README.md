# jasmine-test-exercises
Two sets of Jasmine tests for two lightweight finance apps. 

The __calculator app__ takes in a Loan Amount, Term in Years and Yearly Rate and returns the user's monthly payment.

Tests were written to ensure the user received the correct return with correct formatting.


The second app, __tip pool__, is somewhat more complex. It takes in a list of servers along with data related to meals served.

This information is appended to the DOM and behind the scenes, the amount owed to each server is calculated and appended to the DOM.

Three sets of tests were written. 

**helpers.test.js** tests to make sure all the calulations pertaining to splitting tips among servers are working correctly. It also tests inner HTML to make sure correct data is appended to the DOM.

**payments.test.js** tests to ensure payments are correctly appended to the DOM as well testing payment related functions to guarantee correct returns.

Finally, **servers.test.js** are a set of tests related to server functions and appending server data to the DOM.
