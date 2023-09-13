const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

app.get('/api/convert', (req, res) => {
  axios.get(url)
    .then(response => {
      const data = response.data;
        res.json(data);
    })
    .catch(error => {
      console.log(error);
  });
});

app.post('/api/convert', (req, res) => {
  const convertUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';
  const { fromCurrency, toCurrency, convertMoney } = req.body;
  axios.get(`${convertUrl}/${fromCurrency}.json`)
  .then(response => {
    const data = response.data;
    const currencyValues = data[fromCurrency];
    const convertedRoundedMoney = (currencyValues[toCurrency] * convertMoney).toFixed(2);
    res.json(convertedRoundedMoney);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});