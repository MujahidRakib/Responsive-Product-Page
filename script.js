const desktopSmallImages = document.querySelectorAll(".dsimg")
// open / close sidebar
const sideBarShadow = document.getElementById("side-bar-shadow")
const sideBar = document.getElementById("side-bar")


document.getElementById("menu-icon").addEventListener("click", openSidebar)
document.getElementById("close-icon").addEventListener("click", closeSidebar)
sideBarShadow.addEventListener("click", closeSidebar)


function openSidebar() {
  sideBar.style.left = "0";
  sideBarShadow.style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeSidebar() {
  sideBar.style.left = "-100%";
  sideBarShadow.style.display = "none";
  document.body.style.overflow = "scroll";
}



// closing cart
const topCartIcon = document.getElementById("top-cart")
const basket = document.getElementById("basket")

topCartIcon.addEventListener("click", openBasket)

function openBasket() {
  basket.style.top = "4.6875rem";
}

document.addEventListener('click', (event) => {
    if (!basket.contains(event.target) && !topCartIcon.contains(event.target)) {
        basket.style.top = "-400%";
    }
});


// image slider
let currIndex = 0
const images = document.querySelectorAll(".slide")
const totalImage = images.length
const slider = document.getElementById('img-slider')

const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
const desktopLeftBtn = document.getElementById('desktop-left-btn')
const desktopRightBtn = document.getElementById('desktop-right-btn')

leftBtn.addEventListener("click", () => {
  showImage(currIndex - 1)
})
rightBtn.addEventListener("click", () => {
  showImage(currIndex + 1)
})
desktopLeftBtn.addEventListener("click", () => {
  showImage(currIndex - 1)
})
desktopRightBtn.addEventListener("click", () => {
  showImage(currIndex + 1)
})

function showImage(index) {
  if (index >= totalImage) {
    currIndex = 0
  } else if(index < 0) {
    currIndex = totalImage - 1
  } else{
    currIndex = index
  }
  
  slider.style.transform = `translateX(-${currIndex * 100}%)`;
  
  
  
  // desktop small images active class change
  desktopSmallImages.forEach( (img, index) => {
    
     img.classList.remove("active")
     img.style.opacity = "1"
     
      if (currIndex == 0) {
        desktopSmallImages[0].classList.add("active")
        desktopSmallImages[0].style.opacity = ".7"
      }
      else if (currIndex == 1) {
        desktopSmallImages[1].classList.add("active")
        desktopSmallImages[1].style.opacity = ".7"
      }
      else if (currIndex == 2) {
        desktopSmallImages[2].classList.add("active")
        desktopSmallImages[2].style.opacity = ".7"
      }
      else if (currIndex == 3) {
        desktopSmallImages[3].classList.add("active")
        desktopSmallImages[3].style.opacity = ".7"
      }
    })
  }


// product counter

let count = 1
let stock = 100
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const productCount = document.getElementById('product-count')

plus.addEventListener("click", () => {
  if (count < stock) {
    count++
    productCount.innerText = count
  }
})
minus.addEventListener("click", () => {
  if (count > 1) {
    count--
    productCount.innerText = count
  }
})


// desktop small image click change function

const smallImages = document.querySelectorAll(".img-small")
const bigImage = document.querySelector(".big-img")


smallImages.forEach((image) => {
  image.addEventListener("click", function() {
    smallImages.forEach( (img) => {
      img.classList.remove("active")
      img.style.opacity = "1"
    })
    
    this.classList.add("active")
    this.style.opacity = ".7"
    
    if (this.classList.contains("small-img-1")) {
      bigImage.src = "/images/img-1.jpg"
    }
    else if (this.classList.contains("small-img-2")) {
      bigImage.src = "/images/img-2.jpg"
    }
    else if (this.classList.contains("small-img-3")) {
      bigImage.src = "/images/img-3.jpg"
    }
    else if (this.classList.contains("small-img-4")) {
      bigImage.src = "/images/img-4.jpg"
    }
  
  })
})


// desktop big image click function

const sliderShadow = document.querySelector(".slider-shadow")
const desktopCloseBtn = document.querySelector(".desktop-close-btn")

// open big slider 


bigImage.addEventListener("click", function() {
  sliderShadow.style.display = "block"
  desktopLeftBtn.style.display = "block"
  desktopRightBtn.style.display = "block"
  desktopCloseBtn.style.display = "block"
  
  smallImages.forEach((img) => {
    img.classList.remove("active")
    img.style.opacity = "1"
  })
})

// close big slider

desktopCloseBtn.addEventListener("click", closeDesktopSlider)

function closeDesktopSlider() {
  sliderShadow.style.display = "none"
}


desktopSmallImages.forEach((img, index) => {
  img.addEventListener("click", function(e) {
  showImage(index)
})
})