
const commonService = require('../services/commonService');


exports.getNotes = (req, res) => {
    // req.checkBody("userId", "userId is required").not().isEmpty();
    try {

        var responseResult = {}
        var errors = req.validationErrors()
        if (errors) {
            responseResult.status = false;
            responseResult.error = errors
            return res.status(422).send(responseResult)

        } else {

            var response = {}
            commonService.getNotes(req, (err, result) => {
                if (err) {
                    response.status = false;
                    response.error = err
                    return res.status(500).send(response)

                } else {
                    response.status = true;
                    response.data = result;
                    return res.status(200).send(response)
                }
            })

        }

    } catch (error) {
        res.send(error)

        console.log(error)
    }
}