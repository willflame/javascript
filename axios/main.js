//biblioteca axios
//https://github.com/axios/axios

axios.get('https://api.github.com/users/willflame')
.then(function(response) {
  console.log(response);
})
.catch(function(error) {
  console.warn(error);
});




