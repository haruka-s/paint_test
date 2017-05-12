window.addEventListener('load',function(){
	var canvas = document.getElementById('id_canvas');
	var context = canvas.getContext('2d');
	context.fillstyle = 'blue';

	canvas.addEventListener('mousemove', function(eve){
		console.log(eve);
		context.fillRect(eve.layerX,eve.layerY,10,10);
	}, false);

	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

})
