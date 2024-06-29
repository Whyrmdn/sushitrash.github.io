function bookHotel(hotel) {
  document.getElementById("hotel").value = hotel;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function processBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const hotel = document.getElementById("hotel").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  console.log(
    `Booking Details: \nName: ${name}\nEmail: ${email}\nHotel: ${hotel}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`
  );

  alert("Booking Berhasil!");

  closeModal();

  document.getElementById("booking-form").reset();
}
