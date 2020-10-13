var normalizing = require('normalize-strings');

let normalize = (word) => {

    normalized_word = normalizing(word).toUpperCase();
    return normalized_word;
};

let filter_object = (list) => {
    let result_list = [];

    for (let index = 0; index < list.length; index++) {
        let filter_obj = {
            'Nombre de local': list[index].local_nombre,
            'Direccion': list[index].local_direccion,
            'Telefono': list[index].local_telefono,
            'Latitud': list[index].local_lat,
            'Longitud': list[index].local_lng
        };
        result_list.push(filter_obj);
    }

    return result_list;
}

module.exports = {
    normalize,
    filter_object
}