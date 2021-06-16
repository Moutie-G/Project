const mongoose = require("mongoose") ;


const Réservation = mongoose.Schema({
    nom:String ,
    duréeSejour :String,
    TypeChambre :String,
    Pension: String,
    NumTel : String,
})
export default mongoose.model("Réservation",Réservation)