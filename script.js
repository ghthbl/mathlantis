document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents default form submission

    const username = document.getElementById('username').value;
    const keyword = document.getElementById('keyword').value;

    fetch('https://ghthbl.pythonanywhere.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, keyword: keyword })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
