apiKey='117574bd05844e49bee58eeb9778fa1f';
baseUrl='https://newsapi.org/v2/everything';

function displayDog(responseJson) {
  $('.dogPic').html('');
  for (let i=0; i<responseJson.articles.length; i++) {
      $('.dogPic').append(`<ul><li>${responseJson.articles[i].description}</li><li>${responseJson.articles[i].url}</li></ul>`)
  }
}

function formatQuery(params) {
  const endPoint = Object.keys(params).map(key => `${key}=${params[key]}`);
  return endPoint.join('&');
}

function getNews(query) {
  const params = {
    q:query,
    pageSize: 15
  };
  const options = {
    headers: new Headers ({
      "X-API-Key":apiKey
    })
  };
  const formatEnd = formatQuery(params);
  const fullUrl= baseUrl + '?' + formatEnd; 
  console.log(fullUrl)
  fetch (fullUrl, options)
  .then(response => response.json())
  .then(responseJson => displayDog(responseJson))
  .catch(err => alert('somethings wrong bruh'));
}

function submitDog() {
  $('form').submit(event => {
    event.preventDefault();
    const query = $('#dog').val();
    getNews(query);
  });
}

function runApp() {
  submitDog();
}

$(runApp);