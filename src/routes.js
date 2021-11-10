const {Router} = require('express');

const routes = Router();

routes.get('/',(request, response) => {
    response.json({name: "Angleu Zua da Silva"});
})

module.exports = routes;