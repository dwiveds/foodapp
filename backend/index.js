const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=5000;
const foodItemsRoutes=require('./Routes/foodItems.js')
const mongodb=require("./db");
const cors = require('cors');



 app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With, Content-Type,Accept"
//     );
//     next();
// })


app.get("/",(req,res)=>{
    res.send('Hello world!');
})
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api/foodItems',foodItemsRoutes);
const fetchData = require('./db2.js');

async function main() {
    const data = await fetchData();
    global.fooditems=data;


    console.log('Fetched data:', global.fooditems);
    
}

main();
async function main() {
    const data = await fetchData();
    global.foodcategory2=data;


    console.log('Fetched data:', global.foodcategory2);
    
}

main();



app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
})