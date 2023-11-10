document.getElementById('inputForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const keyword = document.getElementById('keyword').value;

    fetch('ghthbl.pythonanywhere.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, keyword }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
