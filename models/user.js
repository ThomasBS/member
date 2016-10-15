var tablename = "users"

var fillable = [
    "name",
    "email"
]

module.exports.getUsers = function(con, callback){
    con.query('SELECT user_id, name, email, created FROM users WHERE deleted = 0',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}

module.exports.getUser = function(con, id, callback){
    con.query('SELECT * FROM users WHERE user_id = "' + id + '"',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}

module.exports.addUser = function(con, user, callback){
    con.query('INSERT INTO users (name, email, password) VALUES ("' + user.name + '", "' + user.email + '", "' + user.password + '")',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}

module.exports.updateUser = function(con, id, user, callback){
    con.query('UPDATE users SET name = "' + user.name + '", email = "' + user.email + '" WHERE user_id = "' + id + '"',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}

module.exports.deleteUser = function(con, id, callback){
    con.query('UPDATE users SET Deleted = 1 WHERE user_id = "' + id + '"',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            }  else {
                callback(null, rows)
            }
        }
    )
}
