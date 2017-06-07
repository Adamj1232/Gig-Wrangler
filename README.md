# GigWrangler - Connecting Musicians and Venues -  App  

Musician Booking app built with React/Redux/JS, Google Maps API and tested with Enzyme. I created my own data-set of 3000+ venues throughout the US, and used google maps API to pinpoint and connect them. I include venue data on each venue that allows musicians to connect with the venues and create a tour throughout the country.

View it [here](https://adamj1232.github.io/Gig-Wrangler/)

## Project Status

This project is currently in the later stages of development and can be tested through the link above.

## Project Screen Shot(s)

The app in use:
* ![GIF of app in use](http://g.recordit.co/FRuTKd3PjF.gif)
* ![GIF of app in use](http://g.recordit.co/0xTG7CPthF.gif)


## Installation and Setup Instructions

`git clone, npm install, npm start`

## Reflection

  I set out to build an app for traveling musicians to help connect them with performance venues throughout the country. I spent 10 years traveling and playing with a band and doing most of the booking during that time and this is an app I wish would have existed then.

  All of my initial data came from pdf spreadsheets from event booking companies my bands have worked with over time. This proved to be quite the hurdle to extract the data from massive pdf tables and eventually get them into a json format, but with the help of a few online converters I was able to get some dirty data in json of over 3000 venues. Getting location data on these venues to allow for display on google maps also proved to be tough as the google geo-locate api would only allow for 1000 api calls a day and that allocation of calls would be depleted within my first two uses of the app. So I found a company that will return a json format list of lat and long of cities it could find throughout the US. So again I had to do a massive clean on my venue data and send that to this geolocate company. From there I could connect the venue city/state with the returned data on geolocation and was able to map most of the cities that have venues. There are a few cities that the geolocation company did not have data on so the map is not as complete as the below venue data.

  I built this project using create-react-app using react and redux to manage cards as well as react-google-maps and react-scroll for automated scrolling after search.
  Code is written and styled using ES6, HTML5 and CSS3.
  I send google-maps all my lat/long coordinates for the pins and a map is returned with all the properly located pins.

  Next step is improving UI and cleaning up the map using marker clusters, optimizing for mobile, and refactoring my code for readability and performance. Check out my issues in on this repo's Github Issues!
