module.exports.validate = function(con, email, password, callback){
    con.query('SELECT userID, name, email, created FROM users WHERE email = ? AND password = ? AND deleted = 0', [email, password],
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            }

            if (rows.length) {
                callback(null, rows)
            } else {
                callback(null, false)
            }
        }
    )
}
