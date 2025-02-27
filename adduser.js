document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields');
    }
});

document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.style.transform = 'translateY(-25px)';
        input.previousElementSibling.style.fontSize = '12px';
    });

    input.addEventListener('blur', () => {
        if(!input.value) {
            input.previousElementSibling.style.transform = 'translateY(0)';
            input.previousElementSibling.style.fontSize = '14px';
        }
    });
});