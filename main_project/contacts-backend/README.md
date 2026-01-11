Create contacts-backend directory

cd contacts-backend

npm init (it will create package.json)

npm install express

npm install nodemon

add below in package.json file

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },

  and run the npm run dev


  install npm install dotenv (this will help to load env file within our directory)
  