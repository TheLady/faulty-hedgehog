function buildRequest() {
  var host = document.getElementById('host').value;
  var method = document.getElementById('method').value;

// Query Parameters
  var qkey1 = document.getElementById('qkey1').value;
  var qvalue1 = document.getElementById('qvalue1').value;
  var qkey2 = document.getElementById('qkey2').value;
  var qvalue2 = document.getElementById('qvalue2').value;
  var qkey3 = document.getElementById('qkey3').value;
  var qvalue3 = document.getElementById('qvalue3').value;

//Headers
  var hkey1 = document.getElementById('hkey1').value;
  var hvalue1 = document.getElementById('hvalue1').value;
  var hkey2 = document.getElementById('hkey2').value;
  var hvalue2 = document.getElementById('hvalue2').value;
  var hkey3 = document.getElementById('hkey3').value;
  var hvalue3 = document.getElementById('hvalue3').value;

//Body
  var bod = document.querySelector('textarea').value;

// Host & Methods
  var showHost = document.createElement('p');
  showHost.innerHTML = "HOST: " + host;
  var showMethod = document.createElement('p');
  showMethod.innerHTML = "METHOD: " + method.toUpperCase();

// Query
  var queryString = "";

  if (qkey1.length !== 0 && qvalue1.length !== 0) queryString += qkey1 + "=" + qvalue1;

  if (qkey2.length !== 0 && qvalue2.length !== 0) queryString += "&" + qkey2 + "=" + qvalue2;

  if (qkey3.length !== 0 && qvalue3.length !== 0) queryString += "&" + qkey3 + "=" + qvalue3;

  var showQuery = document.createElement('p');
  showQuery.innerHTML = "QUERY: ?" + queryString;

//Headers
var headerString = "";

if (hkey1.length !== 0 && hvalue1.length !== 0) headerString += hkey1 + ", " + hvalue1;

if (hkey2.length !== 0 && hvalue2.length !== 0) headerString += "; " + hkey2 + ", " + hvalue2;

if (hkey3.length !== 0 && hvalue3.length !== 0) headerString += "; " + hkey3 + ", " + hvalue3;

var showHeader = document.createElement('p');
showHeader.innerHTML = "HEADERS: " + headerString;

// Body

var showBody = document.createElement('p');
showBody.innerHTML = "BODY: " + bod;

// Display the built request
  document.getElementById('request').appendChild(showHost);
  document.getElementById('request').appendChild(showMethod);
  document.getElementById('request').appendChild(showQuery);
  document.getElementById('request').appendChild(showHeader);
  document.getElementById('request').appendChild(showBody);

}
