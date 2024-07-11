document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
   
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   
    // You can use AJAX to send a request to your server for authentication
    // This is just a sample code and it may not work if your server requires more specific headers
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://your-server-url.com/authenticate', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
         // Login successful
         alert('Login successful');
       } else if (xhr.readyState === 4) {
         // Login failed
         alert('Login failed');
       }
    };
   
    var data = JSON.stringify({ email: email, password: password });
    xhr.send(data);
   });