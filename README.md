# MongoDB Api

This project showcases what we've learned to make an API that will access a "movie" collection in our MongoDB database

## To get started

+ Run **npm install**(project initialization) and **npm install express cors** in Terminal to install all dependencies(express and cors).
+ Rename the **credentials-example.js** to **credentials.js** and edit the **uri** string to either be the one you get from your **own cloud.mongodb.com cluster** (under the "connect" button) or you **can use mongodb://localhost:27017** if you want to connect to a local instance.
+ Add new movies by sending a valid JSON body to http://localhost:4001/add-movie and get movies by going to http://localhost:4001/get-movies

## How to install MongoDB local on Mac
### In Terminal:
1. Download Mongodb from Homebrew with - **brew tap mongodb/brew**
2. Update Homebrew - **brew update**
3. Install Mongodb from the downloaded tab - **brew install mongodb-community@5.0**
4. Start mongodb - **brew services start mongodb-community@5.0**
5. Stop mongodb - **brew services stop mongodb-community@5.0**
6. To see the what brew is running - **brew services list**
