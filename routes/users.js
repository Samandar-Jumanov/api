
const getAllUsers = (req, res )=>{
  res.status(200).json({
    status:'Succes', 
    message:'Users'
  })
}

const createUser = (req, res )=>{
    res.status(200).json({
      status:'Succes', 
      message:'New user'
    })
  }

const updateUser = (req, res )=>{
    res.status(200).json({
      status:'Succes', 
      message:'Updated user'
    })
  }


  const deletUser = (req, res )=>{
    res.status(200).json({
      status:'Succes', 
      message:'Delted user'
    })
  }

  module.exports ={getAllUsers, createUser, updateUser, deletUser}