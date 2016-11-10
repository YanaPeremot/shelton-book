

function throwdice(){
	//create a random integer between 0 and 5
	var min=1;
	var max=6;
	
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	
	return rand;
}

function change_src(value,numberDice){
	var imgpath=new String();
	imgpath="images/dice/dice";
	var imgext=new String();
	imgext=".png";
	
	$("#dice-img"+numberDice).attr("src",""+imgpath+value+imgext);
}

$(document).ready(function() {

	$('#setSkillValueButton').click(function(e){
		e.preventDefault();	
		
		var value=throwdice();
		change_src(value,1);
		
		$('#setSkillValueButton').css("display","none");
		$('#setSkillButton').css("display","none");
		$('#setSkill').append("<p>Ваше начальное мастерство: "+value+" + 6 = <strong>" + (value+6) +"</strong></p>");
		$('#skillValue').text(value+6);

	});

	$('#setEnduranceValueButton').click(function(e){
		e.preventDefault();	
		
		var value1=throwdice();
		var value2=throwdice();
		var enduranceValue=value1+value2+12;

		change_src(value1,2);
		change_src(value2,3);
		
		$('#setEnduranceValueButton').css("display","none");
		$('#setEnduranceButton').css("display","none");
		$('#setEndurance').append("<p>Ваша начальная выносливость: "+value1 + " + " +value2+ " + 12 = <strong>" + enduranceValue +"</strong></p>");
		$('#enduranceValue').text(enduranceValue);

	});

	$('#setFortunaValueButton').click(function(e){
		e.preventDefault();	
		
		var value=throwdice();
		change_src(value,4);
		
		$('#setFortunaValueButton').css("display","none");
		$('#setFortunaButton').css("display","none");
		$('#setFortuna').append("<p>Ваша начальная удача: "+value+" + 6 = <strong>" + (value+6) +"</strong></p>");
		$('#fortunaValue').text(value+6);

	});


});

