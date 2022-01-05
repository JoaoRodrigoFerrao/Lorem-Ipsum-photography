const menuNav = document.querySelector(".header nav.menu");
const menuUl = document.querySelector("header.header nav.menu ul");
const menuMobile = document.querySelector(".menu--mobile");
const classNav = 'show_menu__nav';
const classUl = 'show_menu__ul';
const menuItems = document.querySelectorAll("header.header .menu ul li a");
const classAnime = 'active';
const contactArea = document.querySelector("section.contact");
const contactAreaForm = document.querySelector("section.contact .contact--content");
const closeContactButton = document.querySelector(".close--contact");
const slideArea = document.querySelector("section.slide");
const slideAreaContent = document.querySelector("section.slide .slide--content");
const imagesSlide = document.querySelectorAll("section.work .image");
const closeSlideButton = document.querySelector(".close--slide i");
const btnContact = document.querySelectorAll(".contact--btn");



menuMobile.addEventListener('click', ()=> openMenu());
menuNav.addEventListener('click', ()=> closeMenu());
menuItems.forEach(item=> {
	item.addEventListener("click", selectButton);
});
closeContactButton.addEventListener("click", ()=> closeElement(contactArea, contactAreaForm));
closeSlideButton.addEventListener("click", ()=> closeElement(slideArea, slideAreaContent));
imagesSlide.forEach(img=> {
	img.addEventListener("click", ()=> {
		openElement(slideArea, slideAreaContent);
		let item = img.querySelector('img').getAttribute("data-img");
		setCurrentImage(item);
	});
});
btnContact.forEach(item=> {
	item.addEventListener("click",()=> openElement(contactArea, contactAreaForm));
})


function openMenu()
{
	menuNav.classList.add(classNav);
	setTimeout(()=> menuUl.classList.add(classUl), 100);
}
function closeMenu()
{
	menuUl.classList.remove(classUl);
	setTimeout(()=> menuNav.classList.remove(classNav), 100);
}
function selectButton(e)
{
	let menuItem = e.target;

	menuItems.forEach(item=> {
		item.classList.remove(classAnime);
	})

	menuItem.classList.add(classAnime);
}
function openElement(container, content)
{
	container.classList.add("anime_contact__section");
	setTimeout(()=> content.classList.remove("anime_contact__content"), 100);
}
function closeElement(container, content)
{
	content.classList.add("anime_contact__content");
	setTimeout(()=> container.classList.remove("anime_contact__section"), 100);

	menuItems.forEach(item=> {
		item.classList.remove(classAnime);
		if (item.innerHTML === 'Home') 
		{
			item.classList.add(classAnime);
		}
	})
}


const btnLess = document.querySelector(".slide .control.l");
const btnMore = document.querySelector(".slide .control.m");
const slideImage = document.querySelector(".slide img");
let qtImage = 3;
let currentImage = 0;

btnMore.addEventListener("click", ()=> nextImage(currentImage));
btnLess.addEventListener("click", ()=> prevImage(currentImage));


function setCurrentImage(img)
{
	slideImage.src = `assets/images/img${img}.jpg`;
	currentImage = img;
}
function prevImage(img)
{
	if (img >= qtImage - 1)
	{
		img--;
	}
	else {
		img = 3;
	}
	setCurrentImage(img);
}
function nextImage(img)
{
	if (img < qtImage) 
	{
		img++;
	} 
	else 
	{
		img = 1;
	}
	setCurrentImage(img);	
}