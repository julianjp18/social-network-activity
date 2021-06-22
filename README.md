# Social network activity

This project is a test for Patagonian.

This project use:
- Ant Design: React UI library. [https://ant.design/docs/react/introduce]
- Axios: Promise based HTTP client for the browser. [https://www.npmjs.com/package/axios]
- React router: declarative routing. [https://reactrouter.com/]
- Redux: A predictable state container for JS Apps. [https://redux.js.org/]
- Jest and mock for testing.

URL's to obtain data:
- Posts: [https://jsonplaceholder.typicode.com/posts]
- Comments: [https://jsonplaceholder.typicode.com/comments]

## How can I design this?
The first thing I did was create the project with `create-react-app`, I installed the corresponding libraries, then I created a component for the posts and another for the comments. The Ant Design library helped me
to create a friendlier UI. Then with Axios I obtained the information from the APIs. Then I saved that information in Redux and finally I generated the option to save a comment in the redux state, with the same structure as the comments obtained from the API.

## Project structure

### src
 - Components
    Contains the components files of the project. (Also the file for the tests).
 - redux
    Contains the files for management the state.
 - utils
    Contains extra functions.