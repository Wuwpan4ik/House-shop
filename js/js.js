document.addEventListener("DOMContentLoaded", function () {
	var btn = document.getElementById('burger');
	var mob = document.getElementById('mob');
	var body= document.getElementById('body');
	function headerFunction() {
		btn.classList.toggle("active");
		mob.classList.toggle("active");
		body.classList.toggle("active");
	}
	btn.addEventListener("click", headerFunction);
});