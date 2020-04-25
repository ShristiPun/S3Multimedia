require ('./db/dbsettng')
const express=require('express');
//expreess used for

const cors=require("cors");
//cors used for 

const bodyparser=require('body-parser');
//body parser used for 

const path=require("path");
//path used for 

const app=express();
const adminRoute=require('./routers/adminRoute')
const packageRoute=require('./routers/packageRoute')
const photographytypesRoute=require('./routers/photographytypesRoute')
const userRoute=require('./routers/userRoute')

app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(cors())

app.use(bodyparser.json());
app.use(express.json());

app.use(adminRoute);
app.use(userRoute);
app.use(packageRoute);
app.use(photographytypesRoute);

app.listen(3030);
