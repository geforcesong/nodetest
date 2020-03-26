class HomeController {
    async loadView(req, res) {
        //return res.render('index', { title: 'Andy', csrfToken: req.csrfToken() });
        return res.render('index', { title: 'Hello' });
    }

    async loadAbout(req, res) {
        return res.render('index', { title: 'World' });
    }

    async loadEntry(req, res){
        console.log(`Message received: ${req.body.message}`);
        return res.send(`CSRF token used: ${req.body._csrf}, Message received: ${req.body.message}`);
    }
}

module.exports = HomeController;