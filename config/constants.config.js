const env = process.env.env;

let db = {
    PAGINATION_LIMIT: 10
};
let test = false;
let headers = {
    'Authorization': '59351c4b233eaa4928abdc0014fdc8faea744f1a47d32a4ee1d9a697',
    'Content-Type': 'application/x-www-form-urlencoded'
}
if(env == 'dev'){
    //dev environment 
    db = {
        DB_HOST : '',
        DB_NAME : '',
        DB_USERNAME : '',
        DB_PASSWORD : ''
    };
}else{
    //dev environment 
    db = {
        DB_HOST : '',
        DB_NAME : '',
        DB_USERNAME : '',
        DB_PASSWORD : ''
    };
}
module.exports = {
    db,
    test,
    env,
    headers
}