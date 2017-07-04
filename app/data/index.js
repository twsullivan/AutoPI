const $ = require('jquery');
const mqtt = require('mqtt')  
const client = mqtt.connect('mqtts://iodrop.net',{username:'iodrop',password:'Atomic'})

var connected = false;
var state = 1;

client.on('connect', function () {
  connected = true;
})

$('#rcorners2').on('touchend click', function(event){
	if($('#light1Icon').attr("src") == 'lightbulb-off.png'){
		$('#light1Icon').attr("src",'lightbulb-on.png');
		state = 1;
	} else {
		$('#light1Icon').attr("src",'lightbulb-off.png');
		state = 0;
	}
	 event.preventDefault();
	 
	if(connected) { client.publish('test', state); }
});