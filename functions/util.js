const jwt = require('jsonwebtoken');
var normalizing = require('normalize-strings');
let verificaToken = (req, res, next) => {

    let token = req.headers['token'] || req.query.token;
    let SEED = "-----BEGIN PUBLIC KEY-----\n" + process.env.PUBLICKEY + "\n-----END PUBLIC KEY-----";
    jwt.verify(token, SEED, { algorithm: 'RS256' }, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: {
                    code: 401,
                    message: 'token inválido.'
                }
            });
        }

        if (req.method == 'GET')
            req.body = decoded;
        next();

    });
};

//Funcion que permite generar un token
let getTokenAlgoritmoMiddleware = (parametros) => {
    let timeout = parseInt(config.env.TOKEN_TIMEOUT);

    let SEED = "-----BEGIN RSA PRIVATE KEY-----\n" + process.env.PRIVATEKEY + "\n-----END RSA PRIVATE KEY-----";
    let initParam = { exp: Math.floor(Date.now() / 1000) + timeout, iss: config.env.ISS, sub: config.env.SUB };
    let param = Object.assign(initParam, parametros);
    let token = jwt.sign(param, SEED, { algorithm: 'RS256' });

    console.log(token);

    return token;
};

let decodificarToken = (token) => {
    let decoded = jwt.decode(token);

    console.log(decoded);

    return decoded;
};
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
    verificaToken,
    getTokenAlgoritmoMiddleware,
    decodificarToken,
    normalize,
    filter_object
}