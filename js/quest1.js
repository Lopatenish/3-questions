radioChange(document.querySelector('#MO'));
function radioChange(item){
	var id = item.id;
	var contents = document.querySelectorAll('.content');
	for (var i = contents.length - 1; i >= 0; i--) {
		if(contents[i].classList.contains(id))
			contents[i].style.display = 'block';
		else
			contents[i].style.display = 'none';
	}
}