import mongoose from mongoose

const clientsSchema = new mongoose.Schema({

  nom: {
    type: String,
    required: true, 
    trim: true 
  },
  prenom: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: false,
    unique: true, 
    lowercase: true 
  },
  numeroTelephone: {
    type: String,
    required: true
  },
  motDePasse: {
    type: String,
    required: true

  },
  
  photoProfil: {
    type: String,
    default: ""
  },
 
  dateNaissance: {
    type: Date 
  },
  
  
  biographie: {
    type: String,
    
  },
  genre: {
    type: String,
    enum: ['Homme', 'Femme', 'Autre', 'Non précisé'],
    default: 'Non précisé'
  },
  
},

{
  // Cette option super pratique ajoute automatiquement 'createdAt' et 'updatedAt' à notre document !
  timestamps: true 
});

module.exports = mongoose.model('Client' , clientsSchema);