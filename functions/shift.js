const services_minsal  = require('./apis');
const util = require('./util');

module.exports = class Shift {

    async get_pharmacies(req) {
        let local_commune =  '';
        let local_name = '';
        
        if (req.body['comuna'] || req.body['nombre_local']){
            local_commune = req.body['comuna'] ? req.body['comuna'] : 'SANTIAGO';
            local_name = req.body['nombre_local'] ? req.body['nombre_local'] : 'CRUZ VERDE';

            local_commune = util.normalize(local_commune);
            local_name = util.normalize(local_name);
        }else{
            return null;
        }

        let services = new services_minsal();
        let pharmacies = await services.searchPharmacies();

        let result_list =  pharmacies.filter(element => element.local_nombre === local_name 
            &&  element.comuna_nombre === local_commune); 
          
        result_list = util.filter_object(result_list);

        return result_list;
    }
}