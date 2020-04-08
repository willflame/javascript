var app = document.querySelector('#app');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var userRepos = document.querySelector('#app h2');
var listRepos = document.querySelector('#app ul');

function verifica() {
  var user = inputElement.value;

  var userText = document.createTextNode('Repositorios do usuário: '+user);
  userRepos.appendChild(userText);

  linhaRepos = document.createElement('li');
  linhaText = document.createTextNode('Carregando...');

  linhaRepos.appendChild(linhaText);
  listRepos.appendChild(linhaRepos);
  
  var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users/'+user+'/repos');
      xhr.send(null);
      
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else if (xhr.status === 404) {
            reject(1);
          } else{
            reject('Erro na requisição');
          }
        }
      }
    });
  }

  minhaPromise()
    .then(function (response) {
      //var app = document.querySelector('#app');
      //var listRepos = document.querySelector('ul');

      var user = inputElement.value;

      //var userRepos = document.querySelector('h2');
      userRepos.innerHTML = '';
      listRepos.innerHTML = '';

      var userText = document.createTextNode('Lista de repositorios do usuário: '+user);
      userRepos.appendChild(userText);
      app.appendChild(userRepos);

      for(repos of response){
        var linhaRepos = document.createElement('li');
        var linkUrl = document.createElement('a');

        linkText = document.createTextNode(repos.name);
        linkUrl.setAttribute('href', repos.html_url);
        linkUrl.appendChild(linkText);

        linhaRepos.appendChild(linkUrl);
        listRepos.appendChild(linhaRepos);
      }
      app.appendChild(listRepos);
    })
    .catch(function (error) {
      if(error === 1){
        userRepos.innerHTML = '';
        listRepos.innerHTML = '';

        var userText = document.createTextNode('O usuário '+ user +' não esta cadastrado no Github ');
        userRepos.appendChild(userText);
        app.appendChild(userRepos);

      }else{
        userRepos.innerHTML = '';
        listRepos.innerHTML = '';

        var userText = document.createTextNode(error);
        userRepos.appendChild(userText);
        app.appendChild(userRepos);
      }
    });
}

buttonElement.onclick = verifica;