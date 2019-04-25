class HomeController {
    async loadView(req, res) {
        return res.render('index', { title: 'Andy', csrfToken: req.csrfToken() });
    }

    async loadAbout(req, res) {
        return res.render('index', { title: 'george' });
    }

    async loadEntry(req, res){
        console.log(`Message received: ${req.body.message}`);
        return res.send(`CSRF token used: ${req.body._csrf}, Message received: ${req.body.message}`);
    }
}

module.exports = HomeController;