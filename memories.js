document.addEventListener("DOMContentLoaded", () => {

const universe = document.getElementById("memoryPhotos");

    if (!universe) return;

    const photos = [
        "img/katling1.jpg",
        "img/katling2.jpg",
        "img/katling3.jpg",
        "img/katling4.jpg",
        "img/katling5.jpg",
        "img/lorena1.jpg",
        "img/lorena2.jpg",
        "img/lorena3.jpg"
    ];

    let started = false;

    function createMemory() {

        if (document.querySelectorAll(".memoryFloat").length >= 3) return;

        const img = document.createElement("img");

        img.className = "memoryFloat";

        img.src = photos[Math.floor(Math.random() * photos.length)];

        img.style.left = (5 + Math.random() * 90) + "%";
        img.style.top = (5 + Math.random() * 80) + "%";

        img.style.animationDuration =
            (14 + Math.random() * 8) + "s";

        universe.appendChild(img);

        img.addEventListener("animationend", () => {

            img.remove();

        });

    }

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !started) {

                started = true;

                createMemory();

                setInterval(createMemory, 3500);

            }

        });

    }, {

        threshold: 0.35

    });

    observer.observe(universe);

});