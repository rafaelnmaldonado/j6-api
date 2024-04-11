import express from 'express';
// import fetch from 'node-fetch';
import { curly } from 'node-libcurl';

const router = express.Router();

router.get('/', async (req, res) => {
    const response = await curly("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/");
    //     {
    //     "headers": {
    //     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    //     "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    //     "cache-control": "no-cache",
    //     "pragma": "no-cache",
    //     "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua-platform": "\"Windows\"",
    //     "sec-fetch-dest": "document",
    //     "sec-fetch-mode": "navigate",
    //     "sec-fetch-site": "none",
    //     "sec-fetch-user": "?1",
    //     "upgrade-insecure-requests": "1",
    //     "cookie": "JSESSIONID=8523DQMs64ODUwTg8a7UfnURVGxUlktmpj8pXdHo.caqinter04-lx416"
    //     },
    //     "referrerPolicy": "strict-origin-when-cross-origin",
    //     "body": null,
    //     "method": "GET"
    // });
    res.json(JSON.stringify({'code': response.statusCode}));
    return res;
});

export default router;