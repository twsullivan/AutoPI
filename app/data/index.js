//let $ = require('jquery') 

$('#rcorners2').on('touchend click', function(){
	if($('#light1Icon').attr("src") == 'lightbulb-off.png'){
		$('#light1Icon').attr("src",'lightbulb-on.png');
	  } else {
		$('#light1Icon').attr("src",'lightbulb-off.png');
	  }
});