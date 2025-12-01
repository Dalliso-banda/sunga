import express from 'express'
import MainRouter from './controller/API/index.js';
const server = express();

const port = 5000;
server.use(express.json());
server.use('/api', MainRouter);
server.get('/test', (req, res) => {
    res.send('Test route working');
});

server.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
}); 