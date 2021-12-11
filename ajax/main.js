var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/willflame');
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4){
    let content;
    const user = JSON.parse(xhr.responseText);
    console.info(user);
    content = Object.values(user);
    document.getElementById('app').innerHTML = `<pre>${content}</pre>`;
  }
}