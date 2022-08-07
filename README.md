# MongoDB Api

This project showcases what we've learned to make an api that will access a "movie" collection in our mongoDB database

## To get started

+ Run **npm install**(project initialization) and **npm install exprees cors** in Terminal to install all dependencies(node,express and cors).
+ Rename the **credentials-example.js** to **credentials.js** and edit the **uri** string to either be the one you get from your **own cloud.mongodb.com cluster** (under the "connect" button) or you **can use mongodb://localhost:27017** if you want to connect to a local instance.
+ Add new movies by sending a valid JSON body to http://localhost:4001/add-movie and get movies by going to http://localhost:4001/get-movies