const express = require("express") ;
const router = express.Router() ;



app.post("/contact", async (req, res) => {
    const { nom,email ,NumTel } = req.body;
    const contacter = new contact({nom,email,NumTel});
    try {
      let contacter = await contacter.save();
      res.send(contacter);
    } catch (error) {
      res.send(error);
    }
  });
    module.exports = router ;