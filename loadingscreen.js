var loadingScreen = document.querySelector(".loadingScreen");

// window.addEventListener('load', function() {
//     loadingScreen.style.display = 'none';
//   })
//ChatGPT suggestion
window.addEventListener('load', function() {
    // Add a fade-out class
    loadingScreen.classList.add("fade-out");

    // Wait for the fade-out animation to finish, then redirect
    setTimeout(function() {
        window.location.href = "main/preview.html";
    }, 1600); // Adjust the time (in milliseconds) if you want a longer or shorter delay
});