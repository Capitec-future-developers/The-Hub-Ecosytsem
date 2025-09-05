// Request Demo Popup Logic
document.addEventListener("DOMContentLoaded", function () {
    const demoPopup = document.getElementById("demoPopup");
    const requestDemoLink = document.querySelector('a[href="#"][onclick], footer .footer-column ul li a[href="#"]:last-child');
    const closeBtn = document.querySelector(".close-btn");

    // Open popup when clicking "Request Demo"
    document.querySelectorAll("a").forEach(link => {
        if (link.textContent.includes("Request Demo")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                demoPopup.style.display = "flex";
            });
        }
    });

    // Close popup
    closeBtn.addEventListener("click", () => demoPopup.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === demoPopup) demoPopup.style.display = "none";
    });

    // EmailJS integration
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

    document.getElementById("demoForm").addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
            .then(() => {
                alert("Demo request sent successfully!");
                demoPopup.style.display = "none";
                this.reset();
            }, (error) => {
                alert("Failed to send. Please try again.");
                console.error(error);
            });
    });
});
