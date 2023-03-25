const fs = require('fs')
const tours = require('../data/data-tours.json')
const directory ='C:/Users/Samandar Jumanov/Desktop/backend/day2/expressbegin/data/data-tours.json'


//Get all tours
const getAllTours = (req, res )=>{
    fs.readFile('../data/data-tours.json', (err, data)=>{
        if(!tours){
           return   res.status(200).json({
                status:"Fail",
                message:'You have not any data '
            })
        }
        res.status(200).json({
            status:'Succes',
            data:{
                tours
            }
        })
    })
}


//craeate tours 
const createTours = (req, res )=>{
    const id = tours[tours.length -1 ].id +1 
    const newTour = Object.assign({id}, req.body)
    tours.push(newTour)
    fs.writeFile(`${directory}`, JSON.stringify(tours), err=>{
       if(!err){
        return res.status(200).json({
            status:'Succes', 
            data:{
                newTour
            }
        })
       } console.log(err)
    })
}

///get tours by id 
const getToursById = (req, res )=>{
    const id = req.params.id  * 1
    const tour = tours.find(el=>el.id === id)
      if(tour){
        return res.status(200).json({
           status:"Succes", 
           data:{
            tour
           }
       })
      }
    res.status(404).json({
        status:'Fail', 
        message:'We can`t find'
    })
}

//update tours
const updatePost= (req, res )=>{
    const id = req.params.id * 1
    const tour = tours.find(el=>el.id === id)
    if(tour){
       return res.status(201).json({
            status:'Succes', 
            message:'Updated post'
        })
    }
    res.status(404).json({
        status:'Fail', 
        message:'Smth went wrong'
    })

}
//delete tours
const deletePost= (req, res )=>{
    const id = req.params.id * 1
    const tour = tours.find(el=>el.id === id)
    if(tour){
       return res.status(201).json({
            status:'Succes', 
            message:'Delete post'
        })
    }
    res.status(404).json({
        status:'Fail', 
        message:'Smth went wrong'
    })

}

module.exports = {getAllTours, createTours, getToursById, updatePost, deletePost}