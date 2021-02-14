import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import orderRouter from './routers/orderRouter.js'

const PORT = process.env.PORT || 5000
const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazon', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// midleewares
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// routers
app.use('/api/users', userRouter);
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req, res) => {
    res.send('Server is ready')
})
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(PORT, () => console.log(`application running at ${PORT}`))

