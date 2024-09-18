// elements selection

let nextBtn = document.querySelector(".slider .next") as HTMLButtonElement;
let prevBtn = document.querySelector(".slider .prev") as HTMLButtonElement;
let slider = document.querySelector(".slider .slider_imgs") as HTMLElement ;
let prevImgs = document.querySelectorAll(".product_prev .product_img img");
let productsInfo = document.querySelectorAll(".product .product_info");
// vars 
let current:number = 0;
let rotate:number = 0;
let rotateAmount:number = 360/prevImgs.length;

function show(){
  slider.style.setProperty("--rotate", rotate +'deg');
  prevImgs.forEach((ele) =>  ele.classList.remove('active'))
  prevImgs[current].classList.add('active');
  productsInfo.forEach((ele) =>  ele.classList.remove('active'))
  productsInfo[current].classList.add('active');
}

function slide(direction:string):void{
  if(direction === 'next'){
    if(current >= prevImgs.length - 1){
      current = 0;
    } else {
      current += 1;
    }
      rotate += rotateAmount;
   show()
  }
  if(direction === 'prev'){
    if(current <= 0){
      current = prevImgs.length - 1;
    } else {
      current -= 1;
    }
   rotate -= rotateAmount;
   show()
  }
}


nextBtn.onclick = () :void => slide("next") ;
prevBtn.onclick = () :void => slide("prev") ;


// image reflect
//vars
let imgs = document.querySelectorAll<HTMLElement>(".categories .categories_info .box .img_holder") ;
imgs.forEach((ele) => {
  let img = ele.querySelector('img') as HTMLImageElement;
  let url = img.getAttribute('src');
  ele.style.setProperty('--imgSrc' ,`url(.${url})` )
})



// fav button
// Favorite button functionality
const favButtons = document.querySelectorAll<HTMLElement>('.fav-btn');

function toggleFavorite(button: HTMLElement): void {
  button.classList.toggle('fav');
}

favButtons.forEach(button => {
  button.addEventListener('click', () => toggleFavorite(button));
});

// header

let links_bar = document.querySelector(".header .links") as HTMLElement ;
let socialMedia = document.querySelector(".header .social-media") as HTMLElement;
let menuBar = document.querySelector(".header .menu-bar") as HTMLElement;

menuBar.addEventListener('click', () => {
  links_bar.classList.toggle('active');
  socialMedia.classList.toggle('active');
})

let links = document.querySelectorAll(".header .links a") as NodeListOf<HTMLElement>;
links.forEach((ele) => {  
  ele.addEventListener('click', () => {
    links_bar.classList.remove('active');
    socialMedia.classList.remove('active');
  })
})

