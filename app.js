require ('./db/dbsettng')
const express=require('express');
//expreess used for package and interact with frontennd 

const cors=require("cors");
//cors used for react or aru  bhawtaw request pathaudhaa handel garcha 

const bodyparser=require('body-parser');
//body parser used for form data handle linai

const path=require("path");
//path used for allocate a file image,handle and transfer a file path 

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

//broswr ma domain as a url tyo domain name kun chayi name ma register cha ip ra name 
//ani ip kun chayi serverma connect cha tesmai data stored huncha
