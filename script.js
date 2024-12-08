  // JavaScript Lightbox Popup
  document.addEventListener("DOMContentLoaded", () => {
      const galleryItems = document.querySelectorAll(".gallery-item img");
      const lightbox = document.createElement("div");
      const lightboxImg = document.createElement("img");
    
    
      lightbox.classList.add("lightbox");
      lightbox.style.position = "fixed";
      lightbox.style.top = "0";
      lightbox.style.left = "0";
      lightbox.style.width = "100%";
      lightbox.style.height = "100%";
      lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      lightbox.style.display = "flex";
      lightbox.style.justifyContent = "center";
      lightbox.style.alignItems = "center";
      lightbox.style.zIndex = "1000";
      lightbox.style.display = "none";
      lightbox.style.cursor = "pointer";
    
      lightboxImg.style.maxWidth = "90%";
      lightboxImg.style.maxHeight = "90%";
    

      lightbox.appendChild(lightboxImg);
      document.body.appendChild(lightbox);
    

      galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
          lightboxImg.src = item.src;
          lightbox.style.display = "flex";
        });
      });
    

      lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    });
    
    if (galleryItems.length > 0) {
      galleryItems.forEach((item) => {
          item.addEventListener("click", () => {
              lightboxImg.src = item.src;
              lightbox.style.display = "flex";
          });
      });
  }
