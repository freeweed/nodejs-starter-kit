module.exports = {
    // your response config here
    response_code: {
        "200_success" : {
            "header_code" : 200,
            "code" : 200,
            "status" : "ok",
            "massage": "success"
        },"400_error" : {
            "header_code" : 400,
            "code" : 400,
            "status" : "failed",
            "massage" : "System Error.",
        },"400_error_require" : {
            "header_code" : 400,
            "code" : 400,
            "status" : "failed",
            "massage" : "Missing Require field.",
        },"400_db_error" : {
            "header_code" : 400,
            "code" : 400,
            "message" : "Database query have an error"
        },"404_data_not_found" : {
            "header_code" : 404,
            "code" : 404,
            "status" : "failed",
            "massage" : "Data Not Found.",
        },"500_db_error": {
            "header_code" : 500,
            "code" : 500,
            "message" : "Cannot connect DB"
        }
    }
}