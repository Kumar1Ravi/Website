function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
}

window.onload = function() {
    document.getElementById('current-date').textContent = getCurrentDate();
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'D:\Website\My Resume.pdf';  // Replace with the actual URL of your CV
    link.download = 'Your_CV.pdf';  // The default filename when the file is downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.onload = function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "flex"; // Ensure the modal is displayed as flex to use the flexbox centering

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('current-date').textContent = getCurrentDate();
}