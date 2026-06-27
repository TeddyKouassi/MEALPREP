import mongoose from mongoose

const adminSchema = new mongoose.Schema({
  nomEntreprise: {
    type: String,
    required: true,
    trim: true
  },

  planrepasId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entreprise', 
      required: true
    },

    recettesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entreprise', 
      required: true
    },

    ingredientsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entreprise', 
      required: true
    },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  numeroTelephone: {
    type: String,
    required: false
  },
  motDePasse: {
    type: String,
    required: true
    
  },
  adresse: {
    type: String
  },
 
  dateCreation: {
    type: Date 
  },
  gererclient :{
    type: Sttring,
    required:true,

  },
   photoProfil: {
    type: String,
    default: ""
  },
  
},

{
  timestamps: true
});

module.exports = mongoose.model('Admin', adminSchema);
