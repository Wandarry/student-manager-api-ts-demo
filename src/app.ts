import express, {Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const port = 3002;

app.use(express.json());

async function newStudents() {
    const students = await prisma.student.createMany({
        data: [
            {
                name: "student1",
                email: "first@gmail.com"
            },

            {
                name: "enick",
                email: "enick@gmail.com"
            },

            {
                name: "student8",
                email: "eighth@gmail.com"
            },
        ]
    })

}

app.get('/', async (req: Request, res: Response) => {
    await newStudents();
    const students = await prisma.student.findMany();
    res.send(students);
})

app.post('/firstStudent', async(req: Request, res: Response) => {
    const firstStudent = await prisma.student.findUnique({
        where: {
            id: 1
        }
    })
    res.send(firstStudent)
})

app.delete('/', async(req: Request, res: Response) => {
    const deleteStudent = await prisma.student.delete({
        where: {
            email: "blabla@gmail.com"
        },
    });
})

app.listen(port, () => {
    console.log("Listening at port ", port)
})