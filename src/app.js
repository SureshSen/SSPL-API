const express = require('express');
const conversationRouter = require('./routes/conversationsRoutes');
const app = express();
app.use(express.json());
app.use('/api',conversationRouter);

const port = 4100;


app.listen(port,(req,res)=>{
    console.log(`App is running on port ${port}... `);
});

