const model=require('../model/commonModel')

exports.getNotes = (req,callback) => {
    model.getNotes(req,(err, result) => {

        if (err) {
            return callback(err)

        } else {
            return callback(null, result);

        }
    })
}
