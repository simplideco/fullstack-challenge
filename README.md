## How to use?

- Server ENV: create a .env file with PORT constant
- Client ENV: create a .env file with REACT_APP_HOST constant
- Cloning fullstack challenge

```ssh 
  # Clone 
  git clone <url>

  # Install server dependencies
  cd server 
  npm install
  npm start

  # Install client dependencies
  cd client 
  npm install
  npm start

```

## React Coding Challenge

This code challenge tests your skills in react.js, testing and modular design.
The purpose of the application is to correctly render a stream of messages coming from an api. Different messages will be coded different colors and require slightly different rendering. The rules are described in detail below.


The 3 priorities that we provide you are:
  * 1 = error
  * 2 = warning
  * 3 = info

## Node coding challenge

This challenge already includes an Mock API response. It is required or expected for you to make any changes to replicate this interaction but with an real API.

We expected for the API:

 * Have an enpdoint to get a message.
 * Randomly the endpoint should throw any Error (404, 500, 403). 
 * Message don't need to get store at any DB or store system.


### Acceptance Criteria

1. Messages should be rendered in a table-like structure. The newest messages should appear at the top of their respective columns.
2. Fetch the messages using a polling fetch in order to guarantee the espected behavior.
2. Handle the errors in frontend when endpoint fails with 404, 500, 403.
3. Ensure UI Matches the image

### Note

1. The example design below.

![Example Design](./mock.png)


2. The messages should be color coded depending on the priority of the message. The appropriate color per priority is:

   * error: #F56236
   * warning: #FCE788
   * info: #88FCA3

3. Each time a message with the priority level of error is received, a snackbar containing the error message should also appear at the top of the application. The error should disappear in 2 seconds, when another error message takes its place, or when the user clears it via the provided button located in the error message.
4. A user should be able to clear all messages at any point.
5. A user should be able to clear a specific message in a specific column
6. A user should be able to start and stop incoming messages. By default the messages should be running and displaying on the grid. The start/stop button should update depending on the state of the feed.
7. A user should see a count of specific messages in each column
8. Use material-ui components. (extra points if use styled-components)
10. Use functional components.
11. Fell free to improve code structure.
12. Please submit your code either via Github or Gitlab
13. Use React context API or Redux.
14. Pay attention to performance of your page rendering

***Applicants are provided this challenge with no expectation on deadline. Please take the time you need to complete the challenge to the best of your ability.***
