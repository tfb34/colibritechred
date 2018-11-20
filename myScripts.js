

function toggleMenu(){
  let menuBtn = document.getElementById('menu-btn');
  let menu = document.getElementById('mobile-menu');
  menuBtn.classList.toggle("change");
  menu.classList.toggle("show");
  setTimeout(fadeUp, 100);
}

function fadeUp(){
	console.log("hello");
	let arr = document.getElementById('list').children;
	console.log(arr);
	for(let i=0;i<arr.length;i++){
		arr[i].classList.toggle('fadeUp');
	}
}