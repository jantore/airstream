Ext.namespace('Airstream', 'Airstream.util')

Airstream.util.formatTime = function(secs) {
	secs = Math.floor(secs);
	var hours = Math.floor(secs / 3600);
	var minutes = Math.floor((secs % 3600) / 60);
	var seconds = secs % 60;
	
	if(hours > 0) {
		return hours + ':' + String("00" + minutes).slice(-2) + ':' + seconds.toFixed().pad(2, '0');
	} else {
		return minutes + ':' + String('00' + seconds).slice(-2);
	}
};

Airstream.util.log = function(message) {
    ((window.console && console.log) || (window.opera && opera.postError) || (Ext.isAir && air.trace) || window.alert).call(this, message);
}