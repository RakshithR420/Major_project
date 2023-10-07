document.addEventListener("DOMContentLoaded", function () {
    const categorySelect = document.getElementById("category");
    const brandSelect = document.getElementById("brand");
    const shoeItems = document.querySelectorAll(".shoe-item");

    categorySelect.addEventListener("change", filterShoes);
    brandSelect.addEventListener("change", filterShoes);

    function filterShoes() {
        const selectedCategory = categorySelect.value;
        const selectedBrand = brandSelect.value;

        shoeItems.forEach((item) => {
            const category = item.classList.contains(selectedCategory) || selectedCategory === "all";
            const brand = item.classList.contains(selectedBrand) || selectedBrand === "all";
            item.style.display = category && brand ? "block" : "none";
        });
    }
});