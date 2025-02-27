document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (email && password && role) {
        if (role === "student") {
            window.location.href = 'dashboard.html';
        } else if (role === "admin") {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'messincharge.html';
        }
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