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

  # Routers

  app.use("/api/contacts", require("./routes/contactsRoutes"));

    contactsToutes.js (file)
    const router = express.Router()
        router.route("/").get((req,res)=>{
            res.json({"message":"Get all contacts"})
        });

  # Controllers:
    Create controller folder this will contain all login to connect with DB and etc..

    simplifying the code just to maintain proper way..


# Middleware

    when we sent data from client it is not accepting in the backend so we need middle ware to accept the data

    so just add app.use(express.json())


