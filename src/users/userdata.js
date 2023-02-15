// const express=require('express');

// const app=express();

// var users=[
//     {id: 1,name :"A",pass : "123"},
//     {id :2, name :"B",pass : "123"},
//     {id :3, name:"C",pass : "123"},
//     {id :4, name:"D",pass : "123"},
//     {id :5, name:"E",pass : "123"},
//     {id :6, name:"F",pass : "123"},
// ]

// app.get('/user',(req,res)=>
// {
//     // res.send(req.query);
//     const user={
//         id: users.length+1,
//         name: req.query.username,
//         pass:req.query.password
//     }
//     users.push(user);
//     res.send(users)
// });

// // //Posting Data
// // app.post('/user/:name/:pass',(req,res)=>
// // {
// //     if(!req.body.name || req.body.name.length<3)
// //     {
// //         return res.status(400).send("Input is too weak....");
// //     }
// //     const user={
// //         id: users.length+1,
// //         name: req.body.name
// //     }
// //     users.push(user)
// //     res.send(user);

// // });

// app.listen(3000,()=>
// {
//     console.log("Listening at 3000 port...");
// })

