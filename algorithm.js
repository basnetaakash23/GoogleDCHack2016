var rating = 100;

document.getElementById('button').onclick = myFunction;
var alldata=[];

function myFunction() {

	var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write('<body><img src="http://i.imgur.com/BvB959w.gif" width="2000px" height="3000px" alt="Image not loaded"></body>');
	var education = document.getElementById("education");
	var firstarray = education.value.split("\n");


	var check_it = firstarray[1];
	if (check_it>3.0 && check_it < 3.5){
		rating -= 5;
		var a1 = "5% of your resume points are deducted because your GPA is less than 3.5";
		alldata.push(a1);
	}
	else if (check_it < 3.0){

		rating -= 10;
		var a1 = "10% of your resume points are deducted because your GPA is less than 3.0";
		alldata.push(a1);
	}
	

	var achievements = document.getElementById("achievements");
	var secondarrays = achievements.value.split(" ");
	var count_percent = 0;
	var count_num = 0;
	for (var each_word in secondarrays ) {

		if (!isNaN(secondarrays[each_word])){

			count_num += 1;

		}

		if (secondarrays[each_word] === "%"){
			
			count_percent = count_percent + 1;
		}
	}
	if (count_num < 1){
		var a3 = "The achievement portion of the resume should be quantifiable. So, please include the increase in the revenue because of your work on behalf of the company. 10% is deducted off the resume points as a result. ";
		alldata.push(a3);

		rating -=10;
	}
	if (count_percent < 1){
		var a4 = "The achievement portion of the resume should be quantifiable. So, please include the increase in terms of % because of your work on behalf of the company. 10% is deducted off the resume points as a result. ";
		rating -= 10;
		alldata.push(a4);
	}
	

	var projects = document.getElementById("projects");
	var thirdarrays = projects.value.split("\n");

	if (thirdarrays.length === 1) {
		rating -= 20;
	}
	alldata.push(rating);
	return{
		alldata;
	}





	/*console.log(a1 + a2 + a3 + "So, the rating of your resume is "+ rating);*/

};