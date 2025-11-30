import express from 'express'
import MainRouter from './controller/API/index.js';
const app = express();

const port = 5000;
app.use(express.json());
app.use('/api', MainRouter);
app.get('/test', (req, res) => {
    res.send('Test route working');
});

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
}); 