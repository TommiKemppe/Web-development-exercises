function loadDoc(page) {
    console.log('ladataan sivu ', page);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
  }
  
  window.onload=function loadFirst() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "page1.html", true);
    xhttp.send();
  }

  function showLanguage(){
	  var select=document.getElementById("source_language");
	  console.log(select);
	  var source_language=select.value;
	  console.log(source_language);
	  var target_language=document.getElementById("target_language");
	  target_language.value=source_language;
	}

	function showPhone(phone){
	  console.log(phone);
	  var target_phone=document.getElementById("target_phone");
	  target_phone.value=phone;
	}