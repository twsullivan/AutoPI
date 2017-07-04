let t = require('electron');
$('#rcorners2').on('touchend click', function(event){
	if($('#light1Icon').attr("src") == 'lightbulb-off.png'){
		$('#light1Icon').attr("src",'lightbulb-on.png');
	} else {
		$('#light1Icon').attr("src",'lightbulb-off.png');
	}
	 event.preventDefault();
});