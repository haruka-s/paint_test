window.addEventListener('load',function(){
	var canvas = document.getElementById('id_canvas');
	var context = canvas.getContext('2d');
	context.fillstyle = 'blue';
	var flag = false;
	var x = 0;
	var y = 0;
	var color = document.getElementById('id_color');
	var radio = document.getElementById('id_pen');

	canvas.addEventListener('mousemove', function(eve){
		if(flag === true){
			console.log(eve);

			var rect = eve.target.getBoundingClientRect();
			x = eve.clientX - rect.left;
			y = eve.clientY - rect.top;
			if(radio.checked === true){
				context.fillRect(x,y,10,10);
			}
			else{
				context.clearRect(x,y,10,10);
			}
		}
//		context.fillRect(eve.layerX,eve.layerY,10,10);
	}, false);

	canvas.addEventListener('mousedown', function(eve){
		flag = true;
	}, false);

	canvas.addEventListener('mouseup', function(eve) {
		flag = false;
	}, false);

	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight - 100;

	var button = document.getElementById('id_button');
	button.addEventListener('click', function(){
		context.clearRect(0,0,canvas.width,canvas.height);
	}, false);

	color.addEventListener("change",function(eve){
		context.fillStyle=color.value;
	}, false);



})
