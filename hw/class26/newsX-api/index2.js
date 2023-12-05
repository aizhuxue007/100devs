var url = 'https://api.currentsapi.services/v1/latest-news?' +
'language=us&' +
'apiKey=Mu_vjN12XLBW887d5H-VQHdPI5Qwr6pMojHpVDnxlS7a7_nR';
var req = new Request(url);
fetch(req)
.then(function(response) {
    console.log(response.json());
})
.catch((error) => console.error(error))