function render3(data3){
	var html3 = "<div class='commentBox'><div class='leftPanelImg'><img src='https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png' /></div><div class='rightPanel'><span>"+data3.name+"</span><div class='date'>"+data3.date+"</div><p>"+data3.body+"</p></div><div class='clear'></div></div>";
$('#container3').append(html3);
}


$(document).ready(function(){

	var coment3=[];
	if(!localStorage.comentData3){
		localStorage.comentData3 = [];
	}
	else
	{
		coment3= JSON.parse(localStorage.comentData3);
	}

for(var i=0;i<coment3.length;i++)
{
      render3(coment3[i]);
}
$('#addComment3').click(function(){
	var addObj3 = {
		"name": $('#name3').val(),
		"date":$('#date3').val(),
		"body": $('#bodyText3').val()
	};
	coment3.push(addObj3);
	localStorage.comentData3 = JSON.stringify(coment3);
	render3(addObj3);
    $('#name3').val('');
    $('#date3').val('yyyy/mm//dd');
    $('#bodyText3').val('');
});

});

