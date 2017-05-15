window.addEventListener('load',function(){
	var canvas = document.getElementById('id_canvas');
	var context = canvas.getContext('2d');
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight - 100;
	context.fillStyle = 'blue';
	context.lineWidth=2;
	context.strokeStyle = 'green';

/*	context.beginPath();
	context.moveTo(50,50);
	context.lineTo(150,150);
	context.closePath();
	context.stroke();*/

	var flag = false;
	var x = 0;
	var y = 0;
	var prevX = 0;
	var prevY = 0;
	var color = document.getElementById('id_color');
	var radio = document.getElementById('id_pen');

	canvas.addEventListener('mousemove', function(eve){
		if(flag === true){
			console.log(eve);

			var rect = eve.target.getBoundingClientRect();
			x = eve.clientX - rect.left;
			y = eve.clientY - rect.top;
			console.log(x,y);
			//context.fillRect(x,y,10,10);

			if(radio.checked === true){
				context.beginPath();
				context.moveTo(prevX,prevY);
				context.lineTo(x,y);
				context.closePath();
				context.stroke();
				prevX = x;
				prevY = y;
				//context.fillRect(x,y,10,10);
			}
			else{
				context.clearRect(x,y,10,10);
			}
		}
//		context.fillRect(eve.layerX,eve.layerY,10,10);
	}, false);

	canvas.addEventListener('mousedown', function(eve){
		flag = true;
		var rect = eve.target.getBoundingClientRect();
			x = eve.clientX - rect.left;
			y = eve.clientY - rect.top;

			prevX = x;
			prevY = y;

	}, false);

	canvas.addEventListener('mouseup', function(eve) {
		flag = false;
	}, false);

	var button = document.getElementById('id_button');
	button.addEventListener('click', function(){
		context.clearRect(0,0,canvas.width,canvas.height);
	}, false);

	color.addEventListener("change",function(eve){
		context.fillStyle=color.value;
	}, false);



})
