'use strict';
const assert = require('assert'),
      mocha = require('mocha'),
      coMocha = require('co-mocha'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      should = chai.should(),
      constants = require('./../config/constants.config'),
      server = require('./../server');

chai.use(chaiHttp);
coMocha(mocha);

constants.test = true;

suite('FIRST CASE', () => {

    suite('SUB CASE', () => {

        before((done) => {
            chai.request(server)
            .end((err, res) => {
                // response logic her
                done();
            })
        })

        test('TEST HERE', () => {
            // test logic here
        });
    })

})