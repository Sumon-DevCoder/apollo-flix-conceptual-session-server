import express, { Request, Response } from 'express'
const app = express()
import cors from 'cors'

// persar
app.use(cors())
app.use(express.json())


// application route

// route 
app.get("/", (req: Request, res: Response)=>{
    res.send("apollo is running...")

})


// global error handler

// route not found



