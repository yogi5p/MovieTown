import "jquery";
import "./style.scss";

$(document).ready(function() {
  //create a function to fetch movies
  function fetchMovies() {
    $.ajax({
      url:
        "https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=princess&include_adult=false&sort_by=created_at&page=1",
      success: function(payload) {
        console.log(payload);
        createMovieBoxes(payload);
        //call a function that passes an array to it
        //that function will iterate over the array, creating a div with it
        //child img tag, the src of which will be the poster_path
      }
    });
  }

  let containerDiv = $("<div>").attr("class", "container");

  let rowDiv = $("<div>").attr("class", "row");

  function createMovieBoxes(movieListPayload) {
    let movieList = movieListPayload.results;

    for (let i = 0; i < movieList.length; i++) {
      //<columnDiv outer with class="col-md-4">
      var columnDiv = $("<div>").attr("class", "card col-md-4");
      //<columnDiv inner with class="box-bg">
      var boxDiv = $("<div>").attr("class", "box-bg");

      //img item for each box
      var img = $("<img>").attr("class", "card-img-top");
      let movieName =
        "https://image.tmdb.org/t/p/w500/" + movieList[i].poster_path;
      img.attr("src", movieName);

      boxDiv.append(img).append($("<h5>").html(movieList[i].title));

      boxDiv.appendTo(columnDiv);
      columnDiv.appendTo(rowDiv);
      //columnDiv.append(boxDiv);
      //rowDiv.append(columnDiv);
    }
  }
  rowDiv.appendTo(containerDiv);
  containerDiv.appendTo("body");
  fetchMovies();
});
