import express, {Request, Response} from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/data/:studentId',(req:Request, res:Response) =>{
    res.send(req.params);
})


app.listen(3000, () => {
    console.log("App listening at http://localhost:3000");
})
