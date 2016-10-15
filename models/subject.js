module.exports.getSubjects = function(con, id, callback){
    con.query('SELECT * FROM subjects WHERE categoryID = "' + id + '"',
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
    con.query('INSERT INTO subjects (name, categoryID) VALUES ("' + subject.name + '", "' + subject.categoryID + '")',
        function(err, rows, fields){
            if (err) {
                console.log('Error in the query')
            } else {
                callback(null, rows)
            }
        }
    )
}
