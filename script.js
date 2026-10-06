// ========================================
// WHATSAPP BOOKING
// ========================================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    // Stop normal form submission
    event.preventDefault();


    // Get form values
    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;


    // Check if all fields are filled
    if (!name || !phone || !service || !date || !time) {

        alert("Please fill in all the booking details.");

        return;
    }


    // Salon WhatsApp number
    // Replace this with the client's real WhatsApp number
    const whatsappNumber = "919876543210";


    // Create WhatsApp message
    const message =
        `Hi Glow Studio!%0A%0A` +
        `I would like to book an appointment.%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Service: ${encodeURIComponent(service)}%0A` +
        `Date: ${encodeURIComponent(date)}%0A` +
        `Time: ${encodeURIComponent(time)}%0A%0A` +
        `Thank you!`;


    // Create WhatsApp URL
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});

