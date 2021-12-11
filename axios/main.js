//biblioteca axios
//https://github.com/axios/axios
var app = document.getElementById('app');

axios.get('https://api.github.com/users/willflame')
.then((response) => {
  console.log(response);

  const name = document.createElement('div');
  name.innerHTML = `Nome: ${response.data['name']}`;

  app.appendChild(name);
})
.catch((error) => {
  console.warn(error);
});




