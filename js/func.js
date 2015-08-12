function prev()
{
	var x=document.getElementById("img1").src;
	var slash=x.lastIndexOf("/");
	var dot=x.lastIndexOf(".");
	var sub=x.substring(slash+1,dot);
	var first=x.substring(0,slash);
	var third=x.substring(dot,x.length);
	sub--;
	if(sub==0)
	sub=16;
	var y;
	y=first+"/"+sub+third;
	document.getElementById("img1").src=y;
	//var j="../IMAGES/"+sub+third;
	//alert(j);
	//document.body.style.background = "url('j') no-repeat center fixed";
}
function next()
{
	var x=document.getElementById("img1").src;
	var slash=x.lastIndexOf("/");
	var dot=x.lastIndexOf(".");
	var sub=x.substring(slash+1,dot);
	var first=x.substring(0,slash);
	var third=x.substring(dot,x.length);
	sub++;
	if(sub==5)
	sub=4;
	var y;
	y=first+"/"+sub+third;
	document.getElementById("img1").src=y;
}
setInterval(function()
{
prev();},2000
);
function raja()
{
	var x=document.getElementById("raj").src;
	var slash=x.lastIndexOf("/");
	var dot=x.lastIndexOf(".");
	var sub=x.substring(slash+1,dot);
	var first=x.substring(0,slash);
	var third=x.substring(dot,x.length);
	sub++;
	if(sub==8)
	sub=5;
	var y;
	y=first+"/"+sub+third;
	document.getElementById("raj").src=y;
}
setInterval(function()
{
raja();},2000
);
function wb()
{
	var x=document.getElementById("wb").src;
	var slash=x.lastIndexOf("/");
	var dot=x.lastIndexOf(".");
	var sub=x.substring(slash+1,dot);
	var first=x.substring(0,slash);
	var third=x.substring(dot,x.length);
	sub++;
	if(sub==5)
	sub=1;
	var y;
	y=first+"/"+sub+third;
	document.getElementById("wb").src=y;
}
setInterval(function()
{
wb();},2000
);
function ka()
{
	var x=document.getElementById("ka").src;
	var slash=x.lastIndexOf("/");
	var dot=x.lastIndexOf(".");
	var sub=x.substring(slash+1,dot);
	var first=x.substring(0,slash);
	var third=x.substring(dot,x.length);
	sub++;
	if(sub==12)
	sub=9;
	var y;
	y=first+"/"+sub+third;
	document.getElementById("ka").src=y;
}
setInterval(function()
{
ka();},2000
);
function kr()
{
	var x=document.getElementById("kr").src;
	var slash=x.lastIndexOf("/");
	var dot=x.lastIndexOf(".");
	var sub=x.substring(slash+1,dot);
	var first=x.substring(0,slash);
	var third=x.substring(dot,x.length);
	sub++;
	if(sub==16)
	sub=13;
	var y;
	y=first+"/"+sub+third;
	document.getElementById("kr").src=y;
}
setInterval(function()
{
kr();},2000
);
function rajshow()
{
	var x=document.getElementById("img1").src;
	var slash=x.lastIndexOf("/");
	var dot=x.lastIndexOf(".");
	var sub=x.substring(slash+1,dot);
	if(sub<5 || sub>8)
		sub=4;
	var first=x.substring(0,slash);
	var third=x.substring(dot,x.length);
	sub++;
	if(sub==9)
	sub=4;
	var y;
	y=first+"/"+sub+third;
	document.getElementById("img1").src=y;
}
setInterval(function()
{
rajshow();},2000
);