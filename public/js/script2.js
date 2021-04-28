function render2(data2){
	var html2 = "<div class='commentBox'><div class='leftPanelImg'><img src='https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png' /></div><div class='rightPanel'><span>"+data2.name+"</span><div class='date'>"+data2.date+"</div><p>"+data2.body+"</p></div><div class='clear'></div></div>";
$('#container2').append(html2);
}


$(document).ready(function(){

	var coment2=[];
	if(!localStorage.comentData2){
		localStorage.comentData2 = [];
	}
	else
	{
		coment2= JSON.parse(localStorage.comentData2);
	}

for(var i=0;i<coment2.length;i++)
{
      render2(coment2[i]);
}
$('#addComment2').click(function(){
	var addObj2 = {
		"name": $('#name2').val(),
		"date":$('#date2').val(),
		"body": $('#bodyText2').val()
	};
	coment2.push(addObj2);
	localStorage.comentData2 = JSON.stringify(coment2);
	render2(addObj2);
    $('#name2').val('');
    $('#date2').val('yyyy/mm/dd');
    $('#bodyText2').val('');
});

});

