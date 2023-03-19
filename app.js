// Get the list of thumbnail images
const thumbList = document.getElementById("thumb-list");

// Get the main image element
const mainImg = document.getElementById("main-img");

// Add a click event listener to the list of thumbnail images
thumbList.addEventListener("click", (event) => {
  // Only handle clicks on thumbnail images
  if (event.target.tagName === "IMG") {
    // Get the clicked thumbnail image and its parent li element
    const thumbImg = event.target;
    const thumbParent = thumbImg.parentNode;

    // Remove the "active" class from the previously active thumbnail's parent
    const activeThumbParent = thumbList.querySelector(".active");
    if (activeThumbParent) {
      activeThumbParent.classList.remove("active");
    }

    // Add the "active" class to the clicked thumbnail's parent
    thumbParent.classList.add("active");

    // Fade out the currently displayed image
    mainImg.style.opacity = 0;
    
    // Wait for the fade out animation to complete before updating the main image
    setTimeout(() => {
      // Set the main image source to the clicked thumbnail's source
      mainImg.src = thumbImg.src;

      // Update the main image caption to match the clicked thumbnail's title
      const caption = thumbImg.title;
      mainImg.nextElementSibling.textContent = caption;

      // Fade in the selected image
      mainImg.style.opacity = 1;
    }, 300); // 300ms is the duration of the fade out animation
  }
});
