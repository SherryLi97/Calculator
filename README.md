# Calculator

  

This calculator application can share calculation results with everyone connected to the app.

  

You can find the demo here: http://ec2-34-216-22-62.us-west-2.compute.amazonaws.com:5000/.

  

## Running the Application Locally

### Frontend

Prerequisites:

* Install dependencies, run in the project directory:

```

npm install

```

Start the application:

```

npm start

```

### Backend

There are mainly 2 methods to run the backend server:  
1. Run through IDEs.
2. Run using Maven through command lines.
	* To be able to run the app you will need to first build and package it into a Jar file with Maven. Run the below command from the project folder which contains the pom.xml file.
	```
	maven package
	```
	* Run with java -jar command.
	```
	java -jar <JAR file>
	```

