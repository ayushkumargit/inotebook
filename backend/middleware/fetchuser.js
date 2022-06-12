
var jwt = require('jsonwebtoken');
const JWT_SECRET = "ayushisagoodb$oy"

const fetchuser = (req, res, next) => {

    const token = req.header("auth-token")
    if (!token) {
        res.status(400).json({ error: "Please try to login with correct credentials " });

    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next()

    } catch (error) {
        res.status(400).json({ error: "Please try to login with correct credentials new change" });


    }
}

    module.exports = fetchuser