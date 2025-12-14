import express from 'express'

const app=express();


app.get('/test/:id', (req, res) => {

console.log(req.params.id)
})
app.listen(4000,()=>{
    console.log('Test server running on port 4000')
})