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