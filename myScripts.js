window.onbeforeunload = function (){
	window.scrollTo(0,0);
}

function toggleMenu(){
  let menuBtn = document.getElementById('menu-btn');
  let menu = document.getElementById('mobile-menu');
  menuBtn.classList.toggle("change");
  menu.classList.toggle("show");
  setTimeout(fadeUp, 100);

}

function fadeUp(){
	let arr = document.getElementById('list').children;
	for(let i=0;i<arr.length;i++){
		arr[i].classList.toggle('fadeUp');
	}
}

let a = Array.from(document.getElementsByClassName('animate'));
window.onscroll = function(e){
	
	if(a[0] && isVisible(a[0])){
		a[0].classList.toggle('doSomething');
		a.shift();
	}
	//arr[] if visible fadeIn
}

function isVisible(el){
	let screenH = window.screen.height;
	let rect = el.getBoundingClientRect().top;
	if(rect > 0 && rect < (screenH-(screenH/5))){
		return true;
	}else{
		return false;
	}
}