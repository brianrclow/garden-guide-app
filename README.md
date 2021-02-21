# Garden Guide

A mobile gardening companion app with planting, growing and harvesting information on various plants. Visit our [landing page](https://gardenguide-cs481.herokuapp.com/index.html) for more information on the app!

# Notes

You can directly access the app from https://expo.io/@alyssafelzien/projects/react-native-firebase 

# Services

Services = the API. Functionality is put into here so on the chance it needs to be re-used somewhere else it can be. These could also be reformatted to a class so you could import UserService then do UserService.yourFunction() since it looks nicer and explains it more.

For example:

User Service:
 - Should handle things about users
 - Login/logout functionality
 - Create account
 - Even has a private function

Item Service
 - Should handle things about items
 - Pulls items
 - Adds items
 - Uses callback functions

# Providers

Currently there is just the user provider. This thing for all intents and purposes produces global variables that are needed all over the place.

 - Since the user auth info is from a provider, application.js can actually re-render without the home screen when logged out.

# Components

These are just react components. I think some are functions some are components, who knows you can do them in like 30 different ways.

# App.js

you'll notice App.js was reformated to use the provider layer then the Application componenent. **Application.js is just the old App.js**. I just needed to wrap it in a provider so everything inside the app could access the User Provider.

# Continuous Delivery

Each time new changes are pushed to master, they will be published to https://expo.io/@alyssafelzien/projects/react-native-firebase
TODO - in the future we want to automatically run tests when changes are made to master
