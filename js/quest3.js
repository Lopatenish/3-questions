function clickModal(item){
	var shadow = document.querySelector('.shadow');
	switch(item.tagName)
	{
		case 'INPUT': 
			shadow.classList.add('visible');
			break;
		case 'ARTICLE': 
			shadow.classList.remove('visible');
			break;
	}
}