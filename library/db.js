const mysql = require('mysql'),
      contantsConfig = require('../config/constants.config').db;

var  knex = require('knex');
      
class Database{
    constructor(){
        let config = {
            host : contantsConfig.DB_HOST,
            user : contantsConfig.DB_USERNAME,
            password : contantsConfig.DB_PASSWORD,
            database : contantsConfig.DB_NAME
        };
        this.pool = mysql.createPool(config);
        this.knex = knex({
            client: 'mysql',
            connection: config,
            pool: { min: 0, max: 7 }
        });

    }
    getConnect(){
        return this.knex;
    }
    execute(sql, data = null){
        return new Promise((resolve, reject) => {

            this.pool.getConnection((err , connect) => {
                if(err){
                    reject("500_db_error");
                }else{
                    connect.query(sql, data, (error, results) => {
                        connect.release();
                        if(error){
                            reject("400_db_error");
                        }
                        resolve(results);
                    })
                }
            });
        })
    }
}

module.exports = Database;