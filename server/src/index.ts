import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/user.Route';
import globalError from './middleware/global_error_handler';

dotenv.config()
const app = express();

const PORT = process.env.PORT || 8000

app.use('/api/user', userRoute)


app.use(globalError);

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})