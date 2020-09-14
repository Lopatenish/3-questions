function clickChoice(item){
	document.querySelector('.choice .active').classList.remove('active');
	document.querySelector('.contentChoice .active').classList.remove('active');
	item.classList.add('active');
	var id = '.contentChoice .' + item.id;
	document.querySelector(id).classList.add('active');
}