"use strict"; 

const axios = require('axios').default;

const api = axios.create({
  baseURL: 'http://localhost:8088',
  timeout: 1000,
});

/*TODO: Load JS on specific page */
let path = window.location.pathname.split( '/' )
switch (path[path.length-2]) {
case 'register':
  api.post('/request', {
      Email: 'pete@port22.co.uk'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    break;
case 'access':
  access();
  break;
case 'refresh':
  refresh();
  break;
};

function access() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  api.get('/access', {
      params: {
        otc: params.otc
      }
    })
    .then(function (response) {
      document.getElementById('#textconfig').innerHTML = response.data.Config;
      document.getElementById('#pngconfig').src += response.data.ConfigPNG;
      document.getElementById('#fileconfig').href += response.data.Config64;
    })
    .catch(function (error) {
      window.location.replace("/");
    });
}


function refresh() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  api.get('/refresh', {
      params: {
        otc: params.otc
      }
    })
    .then(function (response) {
      window.location.replace("/access?otc="+response.data.OTC);
    })
    .catch(function (error) {
      window.location.replace("/");
    });
}
