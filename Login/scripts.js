document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'Sudharshan' && password === 'babu') {
        document.querySelector('.login-container').style.display = 'none';
        const landingContainer = document.getElementById('landing-container');
        landingContainer.style.display = 'block';
        document.getElementById('welcome-message').innerText = `Welcome to VIT! ${username}`;
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.getElementById('landing-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('login-form').reset();
});
