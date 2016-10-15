var tablename = "categories"

var fillable = [
    "name"
]

// module.exports.getUserCategories = function(con, id, callback){
//     con.query('SELECT * FROM categories INNER JOIN usercategories ON categories.categoryID = usercategories.categoryID WHERE usercategories.userID = "' + id + '"',
//         function(err, rows, fields){
//             if (err) {
//                 console.log('Error in the query')
//             } else {
//                 callback(null, rows)
//             }
//         }
//     )
// }

module.exports.getCategories = function(con, id, callback){
    con.query('SELECT * FROM categories WHERE user_id = "' + con.escape(id) + '"',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}

module.exports.addCategory = function(con, category, callback){
    con.query('INSERT INTO categories (name, user_id) VALUES ("' + con.escape(category.name) + '", "' + con.escape(category.userID) + '")',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}

// module.exports.updateUser = function(con, id, user, callback){
//     con.query('UPDATE users SET Name = "' + user.name + '", Email = "' + user.email + '" WHERE UserID = "' + id + '"',
//         function(err, rows, fields){
//             if (err) {
//                 console.log('Error in the query')
//             } else {
//                 callback(null, rows)
//             }
//         }
//     )
// }
//
// module.exports.deleteUser = function(con, id, callback){
//     con.query('UPDATE users SET Deleted = 1 WHERE UserID = "' + id + '"',
//         function(err, rows, fields){
//             if (err) {
//                 console.log('Error in the query')
//             }  else {
//                 callback(null, rows)
//             }
//         }
//     )
// }
