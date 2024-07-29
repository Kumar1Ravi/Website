function getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
}

window.onload = function() {
    document.getElementById('current-date').textContent = getCurrentDate();
}