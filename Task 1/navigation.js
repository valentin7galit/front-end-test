let element = document.getElementById('nav');
element.addEventListener('click', navigationTab, false);

function navigationTab(event) {
	let activeT = document.querySelectorAll('.active');

	for (let i = 0; i < activeT.length; i++) {
		activeT[i].className = activeT[i].className.replace('active', '');
	}

	event.target.parentElement.className += ' active';
	document.getElementById(event.target.href.split('#')[1]).className += ' active';
}