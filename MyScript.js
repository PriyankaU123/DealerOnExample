function load() {
	 var data1 = JSON.stringify(obj.data);
	 console.log(obj.data);
	var out = "";
    var i;
    for(i = 0; i < obj.data.length; i++) {
        // out += '<a href="' + obj.data[i].name + '">' + 
        // obj.data[i].name + '</a><br>';
		out += '<p>' + obj.data[i].name + '</p>';
		out += '<p class="box2">' + obj.data[i].quote + '</p>';
    }
    document.getElementById("id01").innerHTML = out;

 }
 
 function load1() {
	 var data1 = JSON.stringify(obj.data);
	 console.log(obj.data);
	var About = "";
    var i;
    for(i = 0; i < obj.data.length; i++) {		
		About += '<p>' + obj.data[i].name + '</p>';
		About += '<img src="' + obj.data[i].image_url + '" style="width:250px;height:250px;">';
    }

	document.getElementById("about").innerHTML = About;
 }
 