function auth(req, res, next) {

    if (req.session && req.session.loggedIn) {

        return next();

    }

    res.redirect("/login.html");

}

module.exports = auth;