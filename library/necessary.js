const constants = require('../config/constants.config'),

class necessary{

    constructor(){
        this.limit = constants.db.PAGINATION_LIMIT;
    }
    toResultObject(promise){
        return promise
        .then(result => ({ success: true, result }))
        .catch(result => ({ success: false, result }));
    }

    getPagination(sql, page = 1){// work with knex obj only
        return new Promise((resolve,reject ) => {
            sql.count('* AS total').then((total) => {
                page = page || 1;
                total = total[0].total;
                let page_total =  Math.ceil(total / this.limit);
                let offset = (this.limit * page) - this.limit;
                if(total < this.limit){
                    offset = 0;
                    page = 1;
                }
                let limit = this.limit;
                    
                resolve({
                    total,
                    page,
                    page_total,
                    offset,
                    limit
                });
            }).catch((e) => {
                if(e.syscall == 'connect'){
                    reject("500_db_error");
                }else{
                    reject("400_db_error");
                }
                
            })
        });
    }
}