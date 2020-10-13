var request = require('supertest');
const sinon = require('sinon');
var { app } = require('../server.js');
const apis  = require('../functions/apis');

  test('Llamado post /turnos', async (done) => {
    let searchPharmacies = sinon.stub(apis.prototype, 'searchPharmacies').returns([]);
    const res = await request(app)
        .post('/turnos')
        .send({
            "comuna": "estacion central",
            "nombre_local": "Cruz verde"
        });
    console.log(res)
    expect(res.status).toEqual(200);
    searchPharmacies.restore();
    done();
});