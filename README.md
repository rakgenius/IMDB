This is a spring boot project to search for movies or anything else from the Open IMDB database
using the OMDB API.

Prequisites:

Java 8
Maven
npm
API key from omdb


NOTE:

Make sure to use your API key generated from omdb website in ImdbController.java


Steps to run the project


1. Import the project into intellij or eclipse or maven project
2. Install the necessary npm packages and build the front end project first.

    npm config set prefix /usr/local

    sudo npm install -g create-react-app

    create-react-app frontend

    cd frontend

    npm install --save react-router-dom

    npm install --save-dev bootstrap

    npm install --save axios

    npm run build

3. Now cd to the root of the project and run the below command

    mvn clean install -DskipTests

4. This will ensure that all the npm packages are installed in the frontend directory
   and build the reactjs.
5. Once the build is complete, run the java application using

    java -jar target/myImdb-0.0.1-SNAPSHOT.jar

6. Navigate to localhost:8080
7. Enter the movie you want to search and the results will be displayed in the table


To test the front end quickly add the below section to package.json

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "build": "react-scripts build && rm -rf ../src/main/resources/static && mv build ../src/main/resources/static",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},

And run "npm run build" from the frontend directory
Navigate to localhost:3000
