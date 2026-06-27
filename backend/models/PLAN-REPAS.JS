import mongoose from mongoose

const planrepasSchema = new mongoose.Schema({

  nom: {
    type: String,
    required: true, 
    trim: true 
  },
  
  
  nombredejours:{
    nom:String,
    required:true
  },
  total:{
    nom:Number,
    required:true
  },
   
},

{
  // Cette option super pratique ajoute automatiquement 'createdAt' et 'updatedAt' à notre document !
  timestamps: true 
});

module.exports = mongoose.model('planrepas' , planrepasSchema);