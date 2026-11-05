


// jam digital

function updateClock() {
    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

updateClock();
setInterval(updateClock, 1000);


//  slide gambar

let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    currentSlide = (currentSlide + 1) % slides.length;
}

if (document.querySelector(".slide")) {
    showSlides();
    setInterval(showSlides, 4000);
}


//  form registrasi

const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const paket = document.getElementById("paket").value;

        const message = document.getElementById("formMessage");

        if (!nama || !email || !telepon || !paket) {
            message.textContent = "Mohon lengkapi seluruh data!";
            return;
        }

        message.textContent =
            "Pendaftaran berhasil disimulasikan. Terima kasih, " +
            nama + "!";

        registrationForm.reset();

    });

}


//  form kontak

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const nama = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const institusi = document.getElementById("institusi").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        const result = document.getElementById("contactMessage");

        if (!nama || !email || !institusi || !pesan) {
            result.textContent = "Semua kolom wajib diisi.";
            return;
        }

        result.textContent =
            "Pesan berhasil disimulasikan. Terima kasih, " + nama + "!";

        contactForm.reset();

    });

}


// dropdown mobile support

document.querySelectorAll(".dropdown > a").forEach(link => {

    link.addEventListener("click", function(e) {

        if (window.innerWidth <= 600) {
            const menu = this.nextElementSibling;

            if (menu) {
                e.preventDefault();

                menu.style.display =
                    menu.style.display === "block" ? "none" : "block";
            }
        }

    });

});
