var tablename = "users"

var fillable = [
    "name",
    "email",
    "password"
]

module.exports.getUsers = function(con, callback){
    con.query('SELECT * FROM users WHERE deleted = 0',
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
    con.query('SELECT * FROM users WHERE UserID = "' + id + '"',
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
    con.query('INSERT INTO users (Name, Email, Password) VALUES ("' + user.name + '", "' + user.email + '", "' + user.password + '")',
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
    con.query('UPDATE users SET Name = "' + user.name + '", Email = "' + user.email + '" WHERE UserID = "' + id + '"',
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
    con.query('UPDATE users SET Deleted = 1 WHERE UserID = "' + id + '"',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            }  else {
                callback(null, rows)
            }
        }
    )
}
