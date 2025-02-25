function showMore(projectId) {
    const moreInfo = document.getElementById(projectId);
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}

// Optional: Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for contacting me.');
    this.reset(); // Reset the form
});