var titles = document.getElementById('tab-title').getElementsByTagName('li'),
	pages = document.getElementById('tab-page').getElementsByTagName('div');
for(var i = 0; i < titles.length; i++){
	titles[i].index = i;
	titles[i].onclick = change;
}

function change(){
	for(var j = 0; j < titles.length; j++){
		titles[j].className = '';
		pages[j].style.display = 'none';
	}
	this.className = 'select';
	pages[this.index].style.display = 'block';
}
