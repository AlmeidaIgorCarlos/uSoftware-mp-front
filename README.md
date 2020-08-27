# uSoftware-mp-front
Front-End application built in vue.js during the sixth semester of my Information Systems bachelors graduation.

# What is the project purpose?
The purpose of the project is to develop a new web application to help the prosecution service from the state of São Paulo, Brazil. The main goal is to provide a digital tool to help attorneys and the prosecution sevice to exercise theirs activities in a organized way.

# What technologies were used in this project?
- Vue.js
- Vuex
- Vue Router
- Typescript
- Webpack

# What is the scope of the project?
From now on I'll list all avaiables functionalities to the user.

## Sign In
As simple as possible, based only in the user's email and password, it's just a simple form built in order to identify the user and get the Bearer token from the Back-end for future requests.

## Visualize Prosecution Units
Once the user is already identified, it'll be possible for the user to check all prosecution units registered into the platform.

If selected a unit, the user can subscribe yourself into the seleted unit or just visualize all employees subscribed into that prosecution unit.

If the user is already subscribed into the selected unit, it'll be posssible for him to update this unit information like address and phone number.

## Check Avaiable Cases
New cases that are created from users of the mobile app that was created from another integrant of my group, will be displayed for each employee of the respective prosecution units. So in that case, unappropriated cases will be avaiable for any employee from the prosecution unit to accept. Once the case is accepted, it'll be only visible for the employee that accepted it.

## Check Accepted Cases
Once the employee accepted those cases that he wants to work on, there'll be a specific session for him to select only these accepted cases. From it on, it'll be possible for the attorney to:
- Update the case status
- Upload documents related to the case
- Close case

It's important to highlight that once case is closed, the Back-end will be resposible to inform the requester that the event occured

## Reports
During the use of the platform, we realize that it's important for the employee the see some reports of what is happening inside the tool. The reports that will be avaiable for now are:
- Quantity of cases per unity
- Quantity of closed cases per unity
- Quantity of cases in your unity per month, it'll must have to be filtered by year
- Quantity of closed cases in your unity per month against the total of cases per month, it'll must have to be filtered by year

## Account Configuration
Just like every web app, we thought that it's important for the user to have the power to see and update your personal info inside the platform.