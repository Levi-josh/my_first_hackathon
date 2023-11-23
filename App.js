const setupArrow = document.getElementById("setup-arrow");
const content = document.getElementById("content");
const setupGuide = document.getElementById("setup-guide");




setupArrow.addEventListener("click", () => {
    const showcontent = window.getComputedStyle(content)

    if (showcontent.display === "flex") {
        content.style.display = "none";
        setupGuide.style.height = "124px";
    }
    else {
        content.style.display = "flex";
        setupGuide.style.height = "449px";
    }

})