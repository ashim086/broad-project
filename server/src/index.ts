import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/user.Route';
import globalError from './middleware/global_error_handler';
import { dbConnect } from './config/mongoose';
import helmet from 'helmet';
import cors from 'cors'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 8001
const URI = process.env.MONGO_URI || "";

app.use(express.json())
app.use(helmet());
app.use(cors())

///mongodb conection
dbConnect(URI as string)
app.use('/api/user', userRoute)
    


app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})

app.use(globalError);