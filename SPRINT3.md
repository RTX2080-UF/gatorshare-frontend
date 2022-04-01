## Sprint 3: Frontend

### Aim:
The aim was to build the basic structure of the React app, including the code structure, routing strategy and best practices (utility functions and abstracted data access layers). Additionally, features to be implemented was showing all the posts, creating new posts and allowing comments. These major features had supplemental features such as building UI components like thenavigation bar, sidebar, home and post details. CI/CD was also implemented, achieved using Netlify. A working version of this repository can be found at https://gatorshare.netlify.app. 


#### Demo
![](/src/assets/sprint3.gif)

### User stories achieved:
1. User should be able to search for a specific "share requests" (Issue #7)
2. User should have an option to reset their password (Issue #4)
3. User should be able to logout (Issue #3) 
4. User should be able to filter from the list of "share requests" (Issue #6)
5. User should be able to create a comment on comment (Issue #83)
6. Cypress test cases
7. JTest unit testcases

### Features completed:
1. Created the `Settings` component - Users can view their Profile and Settings.
2. Created the `Logout` component - Users can logout of theor account.
3. Created the `Search` component - Users can search for the posts using the search bar provided in the Navbar.
4. Created the `Filter` component - Users can filter from all the posts on their feed.
5. Integrated `Cypress` testing framework to test the flow of our application.
6. Integrated `JTest` unit testing framework.
7. Implemented test cases for the Settings component.
8. Implemented test cases for the Search component.
9. Implemented test cases for the Logout component.
10. Implemented unit test cases for SessionUtils class.
11. Integrated `registerUser` API call.
12. Fixed few bugs.
