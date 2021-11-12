const {Router} = require('express');
const puppeteer = require('puppeteer');


const routes = Router();

(async () => {

  })();

routes.get('/',(request, response) => {
    response.json({name: "Angleu Zua da Silva"});
});
routes.post('/user/:email?/:password?',async (request, response)=>{
    var {email, password} = request.body;

    if(!email || !password){
        var {email, password} = request.params;
        if(!email || !password)
            return response.status(401).send("Undefined email or passworld value");
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://facebook.com');
    await page.type('input[name=email]', email);
    await page.type('input[name=pass]', password);
    
    await page.click('button[name=login]');


    await page.waitForNavigation();

    const cookies = await page.cookies()
    const user = cookies.filter((data) => data.name == 'c_user')

    // await page.goto(`https://facebook.com/${user[0].value}`);

    await browser.close();

    return response.json({url: page.url(),id_user: user[0].value}).status(204);
});

module.exports = routes;