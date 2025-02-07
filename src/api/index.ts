import express from 'express';
// import fetch from 'node-fetch';

import emojis from './emojis';

const router = express.Router();

router.post<{}, string>('/', async (req, res) => {
  const URL = 'https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController';
  const POST = { method: 'POST' };
  const HEADER = { headers: { 'content-type': 'application/x-www-form-urlencoded' } };

  const loginResponse = await fetch(`${URL}/index`, {
    'headers': {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'pt-BR,pt;q=0.9',
      'cache-control': 'no-cache',
      'pragma': 'no-cache',
      'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
    },
    'referrerPolicy': 'strict-origin-when-cross-origin',
    'body': null,
    'method': 'GET',
  });

  await fetch(`${URL}/login`, {
    ...HEADER,
    'body': 'urlHostname=caixaaqui.caixa.gov.br&convenio=000704490&login=Fran&password=L102030R',
    ...POST,
    credentials: 'include',
  }).then(async response => res.send(await response.text()))
    .catch(error => res.send('error=' + error));

  const sessionIdCookies = loginResponse.headers.getSetCookie().pop()!;

  res.send(await loginResponse.text());
  return;

  await fetch('https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente', {
    'headers': {
      'cookie': sessionIdCookies,
    },
    'body': null,
    'method': 'GET',
  });

  await fetch('https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente/st_cadastro_cliente1_consulta_cpf', {
    'headers': {
      'content-type': 'text/plain',
      'cookie': sessionIdCookies,
    },
    'body': 'cpf=401.626.048-58',
    'method': 'POST',
    credentials: 'include',
  }).then(response => res.json(JSON.stringify({ response: response.status })));

  console.log(sessionIdCookies);
  
  await fetch("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente/cadastro_cliente_validar", {
    "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cookie": sessionIdCookies,
    },
    "body": "nomePai=Francisco&identidadeNumeroRg=397836429",
    "method": "POST"
  });

  await fetch("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente/cadastro_cliente_1_validar", {
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "cookie": sessionIdCookies,
    },
    "body": "UFNaturalidade=SP&descOrgaoEmissor=&descOcupacaoPrincipal=BANCARIO+E+ECONOMIARIO&cpfCliente=&dataCpf=40162604858&nomeCompleto=RAFAEL+NUTTI+MALDONADO&movimentaContaDepositoPoupanca=on&emprestimosFinanciamentos=on&habitacional=false&investimentos=on&cartaoCredito=on&seguroPrevidenciaCapitalizacaoConsorcios=on&nomeReduzido=RAFAEL+NUTTI+MALDONADO&dataNascimento=14%2F12%2F2000&cmbSexo=M&cmbNacionalidade=BRASILEIRO&cmbUFNaturalidade=35&cmbMunicipioNaturalidade=4780&nomePai=FRANCISCO+VARGAS+MALDONADO+NETO&nomeMae=ADRIANA+NUTTI+MALDONADO&cmbGrauInstrucao=07&pis=&cmbTipoDocumento=0372008&subTipoIdentidadeNumeroRg=CI&identidadeNumeroRg=397836429&cmbOrgaoEmissorRg=10&cmbUFIdentidadeRg=SP&dataEmissaoIdentidadeRg=06%2F11%2F2018&dataFimValidadeRg=&cmbEstadoCivil=1&cmbTpOcupacao=01&cmbOcupacaoFormal=395&cmbOcupacaoInformal=&cpfConjuge=",
    "method": "POST"
  });

  await fetch("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente/cadastro_cliente3", {
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "cookie": sessionIdCookies,
    },
    "body": "UFEndereco=SP&nomeLocalidade=SANTO+ANDRE&cep=09291230&cmbTipoLogradouro=R++&logradouro=ARAGUAIA&numero=95&complemento=APTo+81&bairro=VILA+CURUCA&cmbUFEndereco=SP&cmbMunicipioEndereco=SANTO+ANDRE&cmbTipoImovel=05&cmbTipoOcupacaoImovel=01&comprovanteResidenciaMes=1&comprovanteResidenciaAno=2020&dddRes=11&telefoneRes=44797873&dddCel=11&telefoneCel=991342589&email=NUTTIRAFAEL%40GMAIL.COM",
    "method": "POST"
  });

  await fetch("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente/cadastro_cliente4", {
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "cookie": sessionIdCookies,
    },
    "body": "index=&tipoFonte=&cpfCnpj=&descOcupacao=&_cmbCnpj_cpf=&_numeroCpfCnpj=&_fontePagadora=&_cmbOcupacao=&_cmbCaracteristicaRenda=&descCaracteristica=&_dataAdmissao=&_empregoAnteriorAnos=&_empregoAnteriorMeses=&_iImposRendaRetFonte=&_dtRefCompr=&_cmbComprovanteRenda=&_opcao=&_changed=&cmbCaracteristicaRenda=&cmbCnpj_cpf=&numeroCnpj=&numeroCpf=&cmbOcupacao=&dataAdmissao=&valorRendaBruta=&valorRendaLiquida=&cmbComprovanteRenda=&dtRefCompr=&iImposRendaRetFonte=0%2C00&empregoAnos=&empregoMeses=&anoDesligamento=&ocorrencia=",
    "method": "POST"
  });

  await fetch("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente/cadastro_cliente5", {
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "cookie": sessionIdCookies,
    },
    "body": "index=&descOcupacao=&nomeAtividade=&dataDeInicio=&rendaLiquidaMensal=&ocorrencia=",
    "method": "POST"
  });

  await fetch("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/cadastro_cliente/st_cadastro_cliente5b_adiciona_patrimonio", {
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "cookie": sessionIdCookies,
    },
    "body": "index=&descOcupacao=&valorPatrimonio=0%2C00",
    "method": "POST"
  });
});

router.get<{}, string>('/', async (req, res) => {
  const response = await fetch("https://caixaaqui.caixa.gov.br/caixaaqui/CaixaAquiController/", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "cookie": "JSESSIONID=8523DQMs64ODUwTg8a7UfnURVGxUlktmpj8pXdHo.caqinter04-lx416"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  });
  res.json(JSON.stringify({'code': response.status}));
  return res;
});

router.use('/emojis', emojis);

export default router;
