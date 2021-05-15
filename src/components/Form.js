import React from "react";

function Form() {
  function Submit() {
    let category = document.getElementById("category").value;
    if (category === "Any") {
      fetch(
        `https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error === true) {
            alert("An Error Occurred !");
          } else {
            let joke = data.joke;
            document.getElementById("JokeCard").style.display = "block";
            document.getElementById("Joke").innerHTML = joke + " 🤣";
          }
        });
    }
    if (category === "Miscellaneous") {
      fetch(
        `https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error === true) {
            alert("An Error Occurred !");
          } else {
            let joke = data.joke;
            document.getElementById("JokeCard").style.display = "block";
            document.getElementById("Joke").innerHTML = joke + " 🤣";
          }
        });
    }
    if (category === "Pun") {
      fetch(
        `https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error === true) {
            alert("An Error Occurred !");
          } else {
            let joke = data.joke;
            document.getElementById("JokeCard").style.display = "block";
            document.getElementById("Joke").innerHTML = joke + " 🤣";
          }
        });
    }
    if (category === "Spooky") {
      fetch(
        `https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error === true) {
            alert("An Error Occurred !");
          } else {
            let joke = data.joke;
            document.getElementById("JokeCard").style.display = "block";
            document.getElementById("Joke").innerHTML = joke + " 🤣";
          }
        });
    }
  }
  function Clear() {
    document.getElementById("JokeCard").style.display = "none";
    document.getElementById("category").value = "Any";
  }
  return (
    <div className="container my-3">
      <form id="form">
        <div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Select Category :
            </label>
            <br />
            <select class="custom-select" id="category">
              <option value="Any" selected>
                Any
              </option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Pun">Pun</option>
              <option value="Spooky">Spooky</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-success"
          id="submit"
          onClick={Submit}
        >
          Submit
        </button>
        <br />
        <br />
        <button type="button" class="btn btn-danger" id="clear" onClick={Clear}>
          Clear
        </button>
      </form>
      <br />
      <br />
      <div class="card" style={{ width: "20rem" }} id="JokeCard">
        <div class="card-body">
          <h6 class="card-title" id="Joke">
            {}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Form;
