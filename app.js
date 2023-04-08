const express = require('express');
const app= express();// execute express as a function ,this will spin up a express application where we can use all kinds
//of utility methods

const productRoutes= require('./api/routes/product');
const orderRoutes= require('./api/routes/orders');
// app.use((req, res,next) =>{
//     res.status(200).json({
//         message:"it works"
//     });//send a json response by first of setting a status code its a method and takes a status code and lets send 200 for everything oay
//     //and it would send a json response so with the right header set up and then we can pass a javascript object will automaticslly stringified for you becoz json data which is sent over the wire is in string format

// });//use as a method sets up a so called middleware , so an incoming request has to go through app use and to whatever we pass to it
//and the thing we pass through it can have different format , it can simply be a function like a arrwo functionor the normal one where we get the request, the response and some special nextfunction
//this set up allows us to sent a request a GET request or any type of request to this backend and this middleware should mae sure
//we actually receives a response
app.use('/product',productRoutes);//here /product is my filter, so only request that start wth this path wil then be handled by some
//handler by the second handler and that will be my product routes ao anything starting with /product in the URL wil be forwarded
//to this file and in this file we must not use /product again , becoz that would essentially try
//to fit /product/product which we dont want to fit, so just target / here and this will essentially target URLs or
//requests aimed at /product/nothing in this case, so that we dont have to manage all the files in one file but can splir them on a feature basis
app.use('/orders',orderRoutes);
module.exports = app;