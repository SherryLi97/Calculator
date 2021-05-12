# Calculator

  

This calculator application can share calculation results with everyone connected to the app.

  

You can find the demo here: http://ec2-34-216-22-62.us-west-2.compute.amazonaws.com:5000/.

![image](https://user-images.githubusercontent.com/55163314/117945354-183dc400-b2c3-11eb-93f4-ee9a48a18eb1.png)
  

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

