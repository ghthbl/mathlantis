document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents default form submission

    const username = document.getElementById('username').value;
    const keyword = document.getElementById('keyword').value;

    fetch('http://ghthbl.pythonanywhere.com/submit', {
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

document.getElementById('loadIframe').addEventListener('click', function() {
    var iframeHTML = '<iframe src="https://scratch.mit.edu/projects/923076276/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    document.getElementById('iframeContainer').innerHTML = iframeHTML;
    document.getElementById('iframeContainer').style.display = 'block';
    this.style.display = 'none';
    document.getElementById('closeIframe').style.display = 'block';
});

document.getElementById('closeIframe').addEventListener('click', function() {
    document.getElementById('iframeContainer').innerHTML = '';
    document.getElementById('iframeContainer').style.display = 'none';
    this.style.display = 'none';
    document.getElementById('loadIframe').style.display = 'block';
});

document.getElementById('loadIframe').addEventListener('click', function() {
    var iframeHTML = '<iframe src="https://scratch.mit.edu/projects/924020428/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    document.getElementById('iframeContainer').innerHTML = iframeHTML;
    document.getElementById('iframeContainer').style.display = 'block';
    this.style.display = 'none';
    document.getElementById('closeIframe').style.display = 'block';
});

document.getElementById('closeIframe').addEventListener('click', function() {
    document.getElementById('iframeContainer').innerHTML = '';
    document.getElementById('iframeContainer').style.display = 'none';
    this.style.display = 'none';
    document.getElementById('loadIframe').style.display = 'block';
});
