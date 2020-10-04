var servicekey = 'HiKEn%2Binv0Y%2BCuGvVtE6YewIhkFK2DdobGFcYnkTZklGXMupZOVb6wzxN7pncoCcRmILBwq%2F0nqnnqcuvtCuow%3D%3D';

var xhr = new XMLHttpRequest();
var url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station'; /*URL*/            
var queryParams = '?';
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent('HiKEn%2Binv0Y%2BCuGvVtE6YewIhkFK2DdobGFcYnkTZklGXMupZOVb6wzxN7pncoCcRmILBwq%2F0nqnnqcuvtCuow%3D%3D'); /**/
queryParams += '&' + encodeURIComponent('stationId') + '=' + encodeURIComponent('200000078'); /**/
queryParams += '&';

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

var hw = document.getElementById('busbutton');
hw.addEventListener('click', function(){
	xhr.open('GET', url + queryParams);
	xhr.send('');	
})
