// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Select all "View Details" buttons
    const detailButtons = document.querySelectorAll(".view-details");

    // Add click event listeners to each button
    detailButtons.forEach(button => {
        button.addEventListener("click", () => {
            const carName = button.getAttribute("data-car");
            const carPrice = button.getAttribute("data-price");

            // Display an alert with car details
            alert(`Car: ${carName}\nPrice: ${carPrice}`);
        });
    });
});
