// GALLERY - MODAL DISPLAY
const imgList = document.querySelectorAll<HTMLElement>(".gallery__img");
const modal = document.querySelector(".js-modal");
const modalContent = document.querySelector(".js-modal-content");
const modalImg = document.querySelector(".js-modal-img");
const overlay = document.querySelector(".js-modal-overlay");

let activeIndex = 0;

// FUNCTION for changing displayed image
// gallery contains small and large versions of images for better performance
// first small version is displayed
const changeModalImg = (imgIndex: number) => {
  // console.log(imgList[imgIndex].dataset.image);
  const largeVersion = imgList[imgIndex].dataset.image;
  modalImg?.setAttribute("src", largeVersion!);
};

// FUNCTION to validate index if IMG which is about do be displayed
//  - checks, if index is in range, corrects index when it is out of range
const validateIndex = (index: number) => {
  let validIndex;
  if (index >= imgList.length) {
    validIndex = 0;
  } else if (index < 0) {
    validIndex = imgList.length - 1;
  } else {
    validIndex = index;
  }
  return validIndex;
};

const setModalGallery = () => {
  imgList.forEach((img, index) => {
    img.addEventListener("click", () => {
      // console.log("KLICK - open MODAL now");
      activeIndex = index;
      changeModalImg(index);
      modal?.classList.add("modal--active");
    });
  });
};

// CLOSE gallery modal when clicking on overlay
overlay?.addEventListener("click", () => {
  // console.log("OVERLAY KLIK");
  modal?.classList.remove("modal--active");
});

// MODAL CONTROLS
// - basic control functions
const goToNextImg = () => {
  // console.log("go to next IMG");
  activeIndex++;
  activeIndex = validateIndex(activeIndex);
  modalContent?.classList.add("modal--move-left");
  setTimeout(() => {
    modalContent?.classList.add("modal--hidden");
    changeModalImg(activeIndex);
  }, 300);
  setTimeout(() => {
    modalContent?.classList.remove("modal--move-left");
    modalContent?.classList.add("modal--move-right");
  }, 350);
  setTimeout(() => {
    modalContent?.classList.remove("modal--hidden");
  }, 360);
  setTimeout(() => {
    modalContent?.classList.remove("modal--move-right");
  }, 380);
};
const goToPrevImg = () => {
  // console.log("go to prev IMG");
  activeIndex--;
  activeIndex = validateIndex(activeIndex);
  modalContent?.classList.add("modal--move-right");
  setTimeout(() => {
    modalContent?.classList.add("modal--hidden");
    changeModalImg(activeIndex);
  }, 300);
  setTimeout(() => {
    modalContent?.classList.remove("modal--move-right");
    modalContent?.classList.add("modal--move-left");
  }, 350);
  setTimeout(() => {
    modalContent?.classList.remove("modal--hidden");
  }, 360);
  setTimeout(() => {
    modalContent?.classList.remove("modal--move-left");
  }, 380);
};

// Buttons - click on CHEVRON
const btnChevronLeft = document.querySelector(".js-chevron-left");
const btnChevronRight = document.querySelector(".js-chevron-right");

btnChevronLeft?.addEventListener("click", goToPrevImg);
btnChevronRight?.addEventListener("click", goToNextImg);

// CONTROL MODAL GALLERY with key - LEFT/RIGHT arrow key
document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  const modalIsActive = modal?.classList.contains("modal--active");

  if (modalIsActive && keyName === "ArrowRight") {
    goToNextImg();
  } else if (modalIsActive && keyName === "ArrowLeft") {
    goToPrevImg();
  }
});

//   TEST GALLERY

// const createImg = (imgName: string) => {
//   const imgNode = document.createElement("img");
//   imgNode.setAttribute("src", imgName);
//   return imgNode;
// };

// ROOT element for gallery
const testGallery = document.querySelector<HTMLElement>(".js-gallery");

// handles IMG list, display IMGs
const handleTXT = (text: string, galleryID: string) => {
  const testArray = text.split("\n");
  testArray.forEach((img) => {
    const imgElement = document.createElement("img");
    const listItemElement = document.createElement("li");
    listItemElement.classList.add("gallery__item");
    // imgElement.setAttribute("src", `assets/${galleryID}/small/${img}`);
    imgElement.setAttribute("src", `assets/${galleryID}/${img}`);
    imgElement.classList.add("gallery__img");
    // imgElement.setAttribute("loading", "lazy");
    listItemElement.appendChild(imgElement);
    testGallery?.appendChild(listItemElement);
  });
};

// reads gallery ID, loads IMGs list
const setUpGallery = () => {
  const galleryID = testGallery?.dataset.gallery!;
  console.log("galleryID: ", galleryID);
  fetch(`assets/${galleryID}.txt`)
    .then((response) => response.text())
    .then((text) => handleTXT(text, galleryID));
};

setUpGallery();
