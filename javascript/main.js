/*1.- Grab the input*/


document.querySelector(".js-go").addEventListener('click', function(){
    let input = document.querySelector("input").value;
    console.log(input);
    pushToDom(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    
    let input = document.querySelector("input").value;
    console.log(input);

    //if the key ENTER  is pressed...
    if(e.which === 13) {
        pushToDom(input);
    }
    
});



/*2.- Do the data stuff with the API */

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  pushToDom(data);

});


/*3.- Show me the GIFs*/
function pushToDom(input) {

    var response = JSON.parse(input);

    let imageUrl =  response.data;

    imageUrl.forEach(function(image){

       let src =  console.log(image.images.fixed_height.url);
       console.log(src)

       let container = document.querySelector(".js-container");
       container.innerHTML += " <img src=\""+ src + "\">";
    });

  



}
