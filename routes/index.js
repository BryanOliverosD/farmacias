const express = require('express');
const router = express.Router();
const services  = require('../functions/shift');

router.post('/turnos', async(req, res) => {
    console.log("Consultando por turnos ...");
    let shifts_services = new services();
    let pharmacies = await shifts_services.get_pharmacies(req);
    if (pharmacies){
        return res.status(200).send({pharmacies});
    } else {
        return res.status(500).send({ error: "consulta sin filtros"});
    }

});

module.exports = router;