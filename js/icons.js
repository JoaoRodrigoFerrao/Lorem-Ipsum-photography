const closeSlide = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.42857 0L0 1.42857L8.57143 10L0 18.5714L1.42857 20L10 11.4286L18.5714 20L20 18.5714L11.4286 10L20 1.42857L18.5714 0L10 8.57143L1.42857 0Z" fill="white"/></svg>' ;
const close = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.14286 0L0 1.14286L6.85714 8L0 14.8571L1.14286 16L8 9.14286L14.8571 16L16 14.8571L9.14286 8L16 1.14286L14.8571 0L8 6.85714L1.14286 0Z" fill="black"/></svg>';
const less = '<svg width="11" height="40" viewBox="0 0 11 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.487 38.9251L3.20807 20L10.487 1.07487L7.69231 0L0 20L7.69231 40L10.487 38.9251Z" fill="white"/></svg>';
const more = '<svg width="11" height="40" viewBox="0 0 11 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.07487L7.2789 20L0 38.9251L2.79466 40L10.487 20L2.79466 0L0 1.07487Z" fill="white"/></svg>';

let icons = [
	{ic: closeSlide, cod: 'close_slide'},
	{ic: close, cod: 'close'},
	{ic: less, cod: 'less'},
	{ic: more, cod: 'more'}
];

const iconsElements = document.querySelectorAll('i');

iconsElements.forEach(ic=> {
	let icCod = ic.getAttribute('data-icon');
	for (let i in icons) 
	{
		if (icCod === icons[i].cod) {
			ic.innerHTML = icons[i].ic;
		}
	}
})