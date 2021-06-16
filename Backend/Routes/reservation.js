const express = require("express") ;
const router = express.Router() ;


app.post("/Add_Réservation", async (req, res) => {
    const { nom, duréeSéjour , TypeChambre,Pension, phone } = req.body;
    const newRéservation = new Réservation({ nom, duréeSéjour, TypeChambre,Pension,phone });
    try {
      let Réservation = await newRéservation.save();
      res.send(Réservation);
    } catch (error) {
      res.send(error);
    }
  });
    module.exports = router ;