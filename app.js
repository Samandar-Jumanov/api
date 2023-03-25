const express = require('express')
const app = express()
const morgan = require('morgan')
const { getAllTours, createTours, getToursById, updatePost, deletePost } = require('./routes/tours')
const { getAllUsers, deletUser } = require('./routes/users')

app.use(express.json())
app.use(morgan('dev'))

app.get('/api/v1/tours', getAllTours).
post('/api/v1/tours', createTours)

app.get('/api/v1/tours/:id', getToursById)
.patch('/api/v1/tours/:id',updatePost)
.delete('/api/v1/tours/:id', deletePost)


//Users 
app.get('/api/v1/users',getAllUsers).post('/api/v1/users', createTours)
app.patch('/api/v1/users/:id', updatePost).delete('/api/v1/users', deletUser)
app.listen(3001, ()=>{
    console.log('Server is active ')
})