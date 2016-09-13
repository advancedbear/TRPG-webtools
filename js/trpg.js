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
	}
	$("select").val("2");

});

function clr() {
	console.log("test");
	$("#sum").empty();
	$("#roll").empty();
	sum = 0;
	count = 1;
}

function dice() {
	var n = $("#count").val();
	var dice_roll = "";

	for (var c = 0; c < n; c++) {
		var random = Math.random() * 6;
		var now = 1 + Math.floor(random);
		console.log(random);
		console.log(now);
		sum = sum + now;
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
	$("#roll").prepend("<small>" + count + "回目<br /></small>");
	$("#sum").text("Total = " + sum);
	count++;
};