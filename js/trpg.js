var count = 1;
var sum = 0;

var dice_fig = [ "⚀", "⚁", "⚂", "⚃", "⚄", "⚅" ];

$(function() {
	$(".tab li").click(function() {
		var idx = $(".tab li").index(this);
		$(".content").hide();
		$(".content").eq(idx).show();
		$(".tab li").removeClass('selected');
		$(this).addClass('selected');
	});

	for(var a=1; a<=50; a++){
		$("#count").append($("<option>").val(a).text(a+" D 6"));
		$("#count2").append($("<option>").val(a).text(a+" D 6"));
	}
	$("select").val("2");

});

function clr() {
	console.log("test");
	$("#sum").text("Total = 0");
	$("#roll").empty();
	sum = 0;
	count = 1;
}

function dice() {
	var n = $("#count").val();
	var dice_roll = "";
	sum_2 = 0;
	six_count = 0;
	one_count = 0;
	for (var c = 0; c < n; c++) {
		var random = Math.random() * 6;
		var now = 1 + Math.floor(random);
		if(now ==6)six_count++;
		if(now ==1)one_count++;
		console.log(random);
		console.log(now);
		sum = sum + now;
		sum_2 = sum_2 + now;
		if (now == 1) {
			dice_num = "<span style=\"color:#FF0000;\">" + dice_fig[now - 1]
					+ "</span>";
		} else if (now == 6) {
			dice_num = "<span style=\"color:#0000FF;\">" + dice_fig[now - 1]
					+ "</span>";
		} else {
			dice_num = "<span style=\"color:#000000;\">" + dice_fig[now - 1]
					+ "</span>";
		}
		dice_roll = dice_roll + dice_num + " ";
	}
	$("#roll").prepend("<hr>");
	$("#roll").prepend(dice_roll);
	if(six_count >= 2) $("#roll").prepend("<font color=\"blue\">クリティカル！</font><br />");
	if(one_count == n) $("#roll").prepend("<font color=\"red\">ファンブル！</font><br />");
	$("#roll").prepend("<small>" + count + "回目: "+sum_2+"<br /></small>");
	$("#sum").text("Total = " + sum);
	count++;
};

function HPu(){
	var hp = $("#HP").val();
	if(hp=="") hp=0;
	$("#HP").val(parseInt(hp,10)+1);
}
function HPd(){
	var hp = $("#HP").val();
	if(hp=="") hp=0;
	$("#HP").val(parseInt(hp,10)-1);
}
function MPu(){
	var mp = $("#MP").val();
	if(mp =="") mp=0;
	$("#MP").val(parseInt(mp,10)+1);
}
function MPd(){
	var mp = $("#MP").val();
	if(mp=="") mp=0;
	$("#MP").val(parseInt(mp,10)-1);
}

function addSkill(){
	$("addSkillPane").slideDown("fast");
}