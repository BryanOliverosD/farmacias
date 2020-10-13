const express = require('express');
const router = express.Router();
const services  = require('../functions/shift');
const { verificaToken } = require('../functions/util');

router.post('/turnos', async(req, res) => {
    let shifts_services = new services();
    let pharmacies = await shifts_services.get_pharmacies(req);
    if (pharmacies){
        return res.status(200).send({pharmacies});
    } else {
        return res.status(500).send({ error: "consulta sin filtros"});
    }

});

module.exports = router;