const user = mongoose.model("tbl_user");

module.exports = {
    useradd(req, res) {
        user.findOne({ userid: req.body.userid, })
            .then(userdata => {
                if (userdata) {
                    return res.status(200).send({ status: 0, message: req.body.userid + ' user already Exsist' })
                }
                user.create({
                    userid: req.body.userid,
                    password: req.body.password,
                }).then((data) => {
                    return res.status(200).send({ status: 1, message: 'user signin successfully' })
                }).catch(err => { return res.status(200).send({ status: 0, message: err.message }) })
            }).catch(err => { return res.status(200).send({ status: 0, message: err.message }) })

    },
    signin(req, res) {
        user.findOne({ userid: req.body.userid, password: req.body.password })
            .then(userdata => {
                if (userdata) {
                    return res.status(200).send({ status: 1, message: 'success fully login', result: userdata })
                } else {
                    return res.status(200).send({ status: 0, message: 'Invalid Access' })
                }
            }).catch(err => { return res.status(200).send({ status: 0, message: err.message }) })

    },
    updatelastlogin(req, res) {
        if (req.body._id) {
            return user.findById(req.body._id)
                .then(userdata => {
                    userdata.updateOne({
                            lastlogin: req.body.currentdate
                        })
                        .then((data) => {
                            return res.status(200).send({ status: 1, message: 'user logedin ' })
                        }).catch(err => { return res.status(200).send({ status: 0, message: err.message }) })
                }).catch(err => { return res.status(200).send({ status: 0, message: err.message }) })
        } else {
            return res.status(200).send({ status: 1, message: 'invalid Access ' })
        }
    }
}