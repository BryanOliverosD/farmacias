const axios = require('axios');
var FormData = require('form-data');

module.exports = class Apis {

    async searchCommunes() {

        var bodyFormData = new FormData();
        bodyFormData.append('reg_id', 7);

        let response = await axios.post(process.env.SERVICIO_COMUNAS, bodyFormData, {
                headers: bodyFormData.getHeaders()
                })
                .then((res) => {
                    return res.data
                })
                .catch((error) => {
                    console.error(error);
                    return
                })
        return response

    }

    async searchPharmacies() {
        let response = await axios.get(process.env.SERVICIO_FARMACIAS, {
            params: {
                id_region: 7
            },
            headers: { 'Content-Type': 'application/json' }
            })
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.error(error);
                return
            })
        return response
    }

}