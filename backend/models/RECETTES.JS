import mongoose from mongoose

const clientsSchema = new mongoose.Schema({

  nom: {
    type: String,
    required: true, 
    trim: true 
  },
  
  type:{
    nom:String,
    required:true
  },
  nombredejours:{
    nom:String,
    required:true
  },
  description:{
    nom:String,
    required:true
  },
  nombredecalories:{
    nom:String,
    required:true
  },
  tempsdepréparation:{
    nom:String,
    required:true
  },
  
},

{
  // Cette option super pratique ajoute automatiquement 'createdAt' et 'updatedAt' à notre document !
  timestamps: true 
});

module.exports = mongoose.model('recette' , recetteSchema);