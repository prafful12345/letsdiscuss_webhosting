function render1(data1){
	var html1 = "<div class='commentBox'><div class='leftPanelImg'><img src='https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png' /></div><div class='rightPanel'><span>"+data1.name+"</span><div class='date'>"+data1.date+"</div><p>"+data1.body+"</p></div><div class='clear'></div></div>";
$('#container1').append(html1);
}


$(document).ready(function(){

	var coment1=[];
	if(!localStorage.comentData1){
		localStorage.comentData1 = [];
	}
	else
	{
		coment1= JSON.parse(localStorage.comentData1);
	}

for(var i=0;i<coment1.length;i++)
{
      render1(coment1[i]);
}
$('#addComment1').click(function(){
	var addObj1 = {
		"name": $('#name1').val(),
		"date":$('#date1').val(),
		"body": $('#bodyText1').val()
	};
	coment1.push(addObj1);
	localStorage.comentData1 = JSON.stringify(coment1);
	render1(addObj1);
    $('#name1').val('');
    $('#date1').val('yyyy/mm/dd');
    $('#bodyText1').val('');
});

});

