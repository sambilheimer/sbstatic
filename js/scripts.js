document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
});

document.getElementById('toggle').addEventListener('click', function() {
    document.getElementById('bodyStyle').classList.toggle('lightmode');
});