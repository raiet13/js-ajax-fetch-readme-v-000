const app = "I don't do much.";


// ** NOTE : Using fetch() for basic (public) requests
fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));

// ** NOTE : Fetch with authorization
const token = 'ab2897e32d0e6c70c534b2f86a0a736bfb4c469c'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

// ** NOTE : Needs authorization -- see above
// fetch('https://api.github.com/user/repos').
//   then(res => res.json()).
//   then(json => console.log(json))


// ** NOTE : Using XHR for requests
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
 
// xhr.onload = function() {
//   console.log(xhr.response);
// };
 
// xhr.onerror = function() {
//   console.log('Booo');
// };
 
// xhr.send();
