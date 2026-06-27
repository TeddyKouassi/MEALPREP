import mongoose from mongoose

const ingredientsSchema = new mongoose.Schema({

  nom: {
    type: String,
    required: true, 
    trim: true 
  },
  
  
  nombredejours:{
    nom:String,
    required:true
  },
  prix:{
    nom:Number,
    required:true
  },
  quantitedestock:{
    nom:Number,
    required:true
  },
   
},

{

  timestamps: true 
});

module.exports = mongoose.model('ingredients' , ingredientsSchema);