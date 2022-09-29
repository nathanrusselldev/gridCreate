
const signupFormHandler = async (e) => {
    e.preventDefault()
    const username = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'},
        })
        if (response.ok) {
            document.location.replace('/')
        } else {
            console.log('this failed')
        }
    }
};

document.addEventListener('submit', signupFormHandler)