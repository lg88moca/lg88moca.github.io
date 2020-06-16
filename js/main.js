const showResults = function(results) {
  // console.log(results);
  let html = "";
  results.map(function(result) {
    console.log(result.images.original.url);
    html = html + `<img src=${result.images.original.url} style="height:350px; width:350px;margin: 25px 50px;"/>`
  });
  console.log(html);
  $('#results').html("");
  $('#results').append(html);

};

const fetchSearchResults = function(searchValue) {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=${searchValue}`;
  console.log(url);
  fetch(url)
    .then(function(res) {
      return res.json();
    }).then(function(response) {
      // console.log(response.data);
      showResults(response.data);
    });

}

const bootUp = function() {
  
  $('#search').on('click', function(event){
    let searchValue = $('#search-box').val();
    console.log(searchValue);
    fetchSearchResults(searchValue);

  });

}

$(bootUp)   
