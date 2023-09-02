import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import { viewRouter } from './routes/view'
import { addRouter } from './routes/jobbAdd'

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


app.use('/view', viewRouter)
app.use('/job', addRouter)


mongoose.connect("mongodb+srv://smsmgaming:Timarli123@cluster0.gm0uzaq.mongodb.net/Cluster0?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log("Server on");
})