var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

function verifyUser() {
  var user = inputElement.value;

  var myPromise = function () {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.github.com/users/" + user + "/repos");
      //xhr.open('GET', 'https://api.github.com/users/willflame/repos');
      xhr.send(null);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Erro na requisição");
          }
        }
      };
    });
  };

  myPromise()
    .then(function (response) {
      var app = document.querySelector("#app");
      var listRepos = document.createElement("ul");

      var user = inputElement.value;

      var userRepos = document.createElement("h2");
      var userText = document.createTextNode(
        `Lista de repositorios do usuário: ${user}`
      );
      userRepos.appendChild(userText);
      app.appendChild(userRepos);

      for (repos of response) {
        var linhaRepos = document.createElement("li");
        var linkUrl = document.createElement("a");

        linkText = document.createTextNode(repos.name);
        linkUrl.setAttribute("href", repos.html_url);
        linkUrl.setAttribute("target", 'blank');
        linkUrl.appendChild(linkText);

        linhaRepos.appendChild(linkUrl);
        listRepos.appendChild(linhaRepos);
      }
      app.appendChild(listRepos);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

buttonElement.onclick = verifyUser;
