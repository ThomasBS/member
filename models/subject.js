module.exports.getSubjects = function(con, id, callback){
    con.query('SELECT * FROM subjects WHERE category_id = "' + id + '"',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}

module.exports.addSubject = function(con, subject, callback){
    con.query('INSERT INTO subjects (name, category_id) VALUES ("' + subject.name + '", "' + subject.categoryID + '")',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}
