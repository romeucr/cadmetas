const mongoose = require('mongoose')
const { Schema } = mongoose

const meta = new Schema({ 
   name: {
      type: String
   },
   description: {
      type: String
   },
   status: {
      type: String
   }
},{
   timestamps: true //salvar o timestamp createAt e updatedAt
})

mongoose.model('Meta', meta);