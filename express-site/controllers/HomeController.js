class HomeController {
    async loadView(req, res) {
        return res.render('index', { title: 'Andy' });
    }

    async loadAbout(req, res) {
        return res.render('index', { title: 'george' });
    }
}

module.exports = HomeController;