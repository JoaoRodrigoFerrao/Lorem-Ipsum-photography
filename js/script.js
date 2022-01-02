const menuNav = document.querySelector(".header nav.menu");
const menuUl = document.querySelector("header.header nav.menu ul");
const menuMobile = document.querySelector(".menu--mobile");

const classNav = 'show_menu__nav';
const classUl = 'show_menu__ul';

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

menuMobile.addEventListener('click', ()=> openMenu());
menuNav.addEventListener('click', ()=> closeMenu())