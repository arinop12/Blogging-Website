import axios from "axios";
import express from "express"
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const PORT = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.render("index.ejs" , {

    })
})

app.get("/blog",(req,res)=>{
    res.render("blog.ejs" , {

    })
})

app.listen(PORT , ()=>{
    console.log(`Listening to the port: ${PORT}`)
})