document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For simplicity, using hardcoded credentials
    if (username === 'user' && password === 'babu') {
        window.location.href = 'landing.html';
    } else {
        alert('Invalid username or password');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
});

document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('login-form').reset();
});

