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

    // Check if the popup has been shown before
    if (!localStorage.getItem('popupShown')) {
        modal.style.display = "flex"; // Show the popup

        // Set the flag in localStorage to indicate the popup has been shown
        localStorage.setItem('popupShown', 'true');
    }

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



/////////////////////////////////////////////////////////////////////////////
function showPasswordPrompt() {
    document.getElementById('passwordPrompt').style.display = 'block';
    document.getElementById('passwordInput').value = ''; // Clear the password field;
    document.getElementById('errorMessage').style.display = 'none'; // Hide error message
}

function validatePassword() {
    var password = document.getElementById('passwordInput').value;
    var correctPassword = 'Roshanrajan@1992'; // Replace with your actual password
    var errorMessage = document.getElementById('errorMessage');

    if (password === correctPassword) {
        window.location.href = 'Project.html'; // Redirect to project.html
    } else {
        errorMessage.textContent = 'You are not authorized to access this page.';
        errorMessage.style.display = 'block'; // Show error message
       
    }
}

function cancelPrompt() {
    document.getElementById('passwordPrompt').style.display = 'none'; // Hide prompt
    document.querySelector('.overlay').style.display = 'none'; // Hide overlay
    document.getElementById('passwordInput').value = ''; // Clear the password field
    document.getElementById('errorMessage').style.display = 'none'; // Hide error message
    document.getElementById('errorMessage').value = ''; // Clear the password field
}
//////////////////////////////////////////////////////////////////////////////

// scripts.js

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('document', document.getElementById('document').files[0]);

    try {
        const response = await fetch('https://1drv.ms/f/s!Aoh3blD1YoyQgh-tzlWTgjCumT-e?e=2tUY6d', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        document.getElementById('status').textContent = result.message;
    } catch (error) {
        document.getElementById('status').textContent = 'Error uploading file.';
    }
});

