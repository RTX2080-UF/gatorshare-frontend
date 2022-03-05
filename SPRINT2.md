## Sprint 2: Frontend

### Aim:
The aim was to build the basic structure of the React app, including the code structure, routing strategy and best practices (utility functions and abstracted data access layers). Additionally, features to be implemented was showing all the posts, creating new posts and allowing comments. These major features had supplemental features such as building UI components like thenavigation bar, sidebar, home and post details. CI/CD was also implemented, achieved using Netlify. A working version of this repository can be found at https://gatorshare.netlify.app. 


#### Demo
![](/src/assets/sprint2.gif)

### User stories achieved:
1. User should be able to create an account. (Issue #2)
2. User should be able to login. (Issue #1)
3. User should be able to select interests. (Issue #8)
4. Cypress test case integration
5. Integrate frontend and backend

### Features completed:
1. Created the `Login` component - User can enter username and password to login.
2. Created the `Signup` component - User can enter the details such as firstname, last name, email and password to create a new account.
3. Created the `Onboarding` component - User can select his/her interests and the corresponding posts are shown in the home screen.
4. Integrated `Cypress` testing framework to test the flow of our application.
5. Integrated `JTest` unit testing framework.
6. Implemented test cases for the Login component.
7. Implemented test cases for the Signup component.
8. Implemented unit test cases for SessionUtils class.
9. CI/CD integration with Netlify.
10. Implemented routing strategies.
