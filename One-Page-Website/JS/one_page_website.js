document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photo-container img");
    const modal = document.createElement("div");
    modal.classList.add("lightbox");
    modal.innerHTML = `
        <div class="lightbox-content">
            <span class="close">&times;</span>
            <img class="lightbox-img" src="" alt="Enlarged Image">
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>
        </div>
    `;
    document.body.appendChild(modal);

    const lightboxImg = modal.querySelector(".lightbox-img");
    const closeButton = modal.querySelector(".close");
    const prevButton = modal.querySelector(".prev");
    const nextButton = modal.querySelector(".next");

    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            lightboxImg.src = img.src;
            modal.style.display = "flex";
        });
    });

    function showImage(index) {
        if (index >= 0 && index < images.length) {
            lightboxImg.src = images[index].src;
            currentIndex = index;
        }
    }

    prevButton.addEventListener("click", function () {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showImage(currentIndex + 1);
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        } else if (event.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        } else if (event.key === "ArrowRight") {
            showImage(currentIndex + 1);
        }
    });
});