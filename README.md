# CS-465 Fullstack
CS-465 Full Stack Development with MEAN architecture


# Architecture:
# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
# Why did the backend use a NoSQL MongoDB database?

o	When initially creating the project, we used static HTML and Express framework and JavaScript to display the data. This type works well for pages that won’t be changed from the front end but for a dynamic website we needed something better.

o	The SPA was created using Angular which uses TypeScript which is a subset of JavaScript.  Using angular introduced components which typically have 3 files, HTML, CSS, and the TypeScript logic/controller file. Using components makes it easy to pass data from component to component and make your site dynamic in terms of content. 

o	The backend used a NOSQL MongoDB database to store the data for trips and to store the user’s login info. MongoDB works well JavaScript, and you are able to receive a JSON response back that you can iterate through to get the selected data for each trip. Because the data was structured it would have been possible to also use a SQL database for this application. 

# Functionality:
# How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
# Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

o	JSON and JavaScript are two different things JSON stands for JavaScript Object Notation and is a structure for data, JavaScript is a programming language. JSON ties together the front end and back end by allowing the back end to pass a JSON object to the frontend and the frontend knowing to expect a JSON object. The JSON object is filled with the data from the trips. 

o	I refactored code such as the trip-card component to be reusable so that we did not have to create a separate card for each trip manually. Doing so adds the benefit of giving the trip-card component the data needed for each trip and a card being rendered the same way every time.
# Testing:
# Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

o	Methods are used to perform logic and call API endpoints

o	Endpoints are used as a link to get the data needed for your application. Your method calls your API endpoint which calls a data service to get the data from the database.

o	Security in a full stack application is important and as API endpoints should not be left open for anyone to access. To secure the application we used a JSON WEB TOKEN to grant access to the endpoints and grant access to accounts. A JWT holds a JSON object that is encoded and signed with a secret. The secret is kept in an environment variable within the app and never revealed to the outside world To prevent access only the app with the correct JWT will be able to make necessary calls to the database.

# Reflection
# How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

o	This course has helped me reach my professionals goals by learning about full stack development and how to secure your data. My plan is to become a backend engineer and learning CRUD API’s is essential to experience I need. 


