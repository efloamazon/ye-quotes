import axios from "axios";
import express from "express";
import cors from "cors";

// I now have an express app/server that can send and receive https requests
//RN this app/server is deaf

const app = express()

app.use(cors())

//This will get executed for every single request
app.use((req, res, next) => {
    console.log("some endpoint hit");
    next();
})

 const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Corn is popping on port:${PORT}`)
})

const URL = "https://api.kanye.rest/"



// GET /ye_quotes
// localhost:3000/ye_quotes
// <SERVERNAME>.<METHODNAME>(<PATHNAME>, <CALLBACK FUNCTION>)
app.get("/ye_quotes", (req, res, next)=>{
    console.log("middelware hit")
    next()
},
async (req, res) =>{
try{
    const response = await axios.get(URL)
    res.send(response.data)
} catch (error) {
    console.log(error)
}
    // axios
    // .get(URL)
    // .then((response) => {
    //     res.send(response.data)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })
})

//GET / => Hello ERIC
app.get("/", (req, res,) => {
    res.send("hello Eric");
});


;
