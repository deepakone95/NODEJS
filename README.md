npm init will create package.json for the project

package.json is a kind of requirements.txt in python.

# to import default module

    const os = require("os")

# to install express
    npm install express (you can see the dependency in package.json file)

    also install nodemon to restart automatically

    to start

    const express = require("express")

    const app = express()

    app.listen("3000",()=>{
        console.log("port open for connecting nodejs app)
    })

    app.get("",(req,res)=>{
        res.send("hello app")
    })

    