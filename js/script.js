document.addEventListener("DOMContentLoaded", () => {
  /*** === CONTACT FORM HANDLER === ***/
  const form = document.getElementById("contactForm");
  const infoBox = document.getElementById("contactInfo");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // cegah reload halaman

      // Ambil data form
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const tel = document.getElementById("tel").value;
      const birthdate = document.getElementById("birthdate").value;
      const gender = document.querySelector("input[name='gender']:checked")?.value;
      const message = document.getElementById("message").value;

      // Format hasil rapi
      infoBox.innerHTML = `
        <h3>Information Submitted</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telepon:</strong> ${tel}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `;
    });
  }

  /*** === WELCOME VIDEO HANDLER === ***/
  const video = document.getElementById("introVideo");
  const wrapper = document.getElementById("welcome-video");

  if (video && wrapper) {
    video.addEventListener("ended", () => {
      wrapper.classList.add("fade-out");
      setTimeout(() => wrapper.remove(), 1000); // hapus overlay setelah animasi
    });
  }
});
