# rsa-shopping-gone-wrong

Michael loves his Web application hacker handbook. This is a book shop that is horribly styled. 

## User story

- User opens up the webpage and adds books to cart
- User adds The Web Application Hacker Handbook to cart
- User proceeds to checkout
- User intercepts request with proxy and adjusts the pricing to 0
- Server responds with a flag if both the handbook and pricing bits checkout

This one focuses more on a design flaw where the server fails to validate the total price of items and instead trusts the client to supply the correct info.

There is a hint on the about page that should help the user figure it out.

To test this, run the docker image and go to localhost:3000