'use strict';
const request = require('request'),
      reponseConfig = require('../config/response.config'),
      constants = require('../config/constants.config');


class doHttp{
    constructor(headers = null){
        if(headers){
            this.Headers = headers;
        }else{
            this.Headers = constants.headers;
        }
    }

    getHeader(header){
        return this.Headers;
    }

    setHeader(header){
        this.Headers = header;
    }

    getInput(req){
        let result = {};
        if(Object.keys(req.query).length){
            result = Object.assign(result, req.query);
        }
        if(Object.keys(req.params).length){
            result = Object.assign(result, req.params);
        }
        if(Object.keys(req.body).length){
            result = Object.assign(result, req.body);
        }
        return result;
    }

    sendRequest(method, link, data){
        let opt = {
            url: link,
            method: method,
            qs: data,
            form: data,
            headers: this.Headers
        }

        request(opt, (err, response, body) => {
            try{
                Promise.resolve({err, response, body});
            }catch(e){
                Promise.reject({e, response:null, body:null});
            }
        });
    }

    sendResponse(res = null, code = null, data = null){
        if(!res || !code) throw "invalid param";
        res.setHeader('Content-Type', 'application/json');
        res.status(reponseConfig.response_code[code]).json(data);
    }
}