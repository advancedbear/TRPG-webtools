var count = 1;
var sum = 0;

var skillCount = 1;
var sDamageDice = 0;
var sDamage = 0;
var sJudgeDice = 0;
var sJudge = 0;

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
		$("#count3").append($("<option>").val(a).text(a+" D 6"));
	}
	$("select").val("2");

	$(document).on("click", ".use", function(){
		var num = 0;
		var sDamageDice = 0;
		var sDamage = 0;
		var sJudgeDice = 0;
		var sJudge = 0;
		var sCost = 0;
		$("#scNames").empty();
		$(".use").each(function(){
			if($(this).prop('checked')){
				num = $(this).attr("id");
				sJudgeDice += parseInt($("#skillJudgeDice_"+num).val(), 10);
				sJudge += parseInt($("#skillJudge_"+num).val(), 10);
				sDamageDice += parseInt($("#skillDamageDice_"+num).val(), 10);
				sDamage += parseInt($("#skillDamage_"+num).val(), 10);
				sCost += parseInt($("#skillCost_"+num).val(), 10);
				$("#scNames").append($("#skillName_"+num).val()+"<br>")
			}
		})
		console.log(num);
		console.log(sJudgeDice);
		$("#scJudgeDice").text(sJudgeDice+"D");
		console.log(sJudge);
		$("#scJudge").text("＋ "+sJudge);
		console.log(sDamageDice);
		$("#scDamageDice").text(sDamageDice+"D");
		console.log(sDamage);
		$("#scDamage").text("＋ "+sDamage);
		console.log(sCost);
		$("#scCost").text("＋ "+sCost);
	});

	$("#addPanel").click(function(){
		$("<div class=\"skill\" id=\"skill_"+skillCount+"\">\n" +
			"<input type=\"text\" placeholder=\"スキル名を入力\" style=\"width:60%; font-size:2ex;\" id=\"skillName_"+skillCount+"\">\n" +
			"<input type=\"checkbox\" class=\"use\" id=\""+skillCount+"\"><label for=\""+skillCount+"\">&nbsp;✔&nbsp;</label><br>\n" + 
			"<label>対象：<input type=\"text\" id=\"skillTarget_"+skillCount+"\"></label><label>　コスト：<input type=\"number\" id=\"skillCost_"+skillCount+"\" value=\"0\"></label><br>\n" +
			"<label>タイミング：<select id=\"sTiming\" id=\"skillTiming_"+skillCount+"\"><option>パッシブ</option><option>ムーブアクション</option><option>マイナーアクション</option><option>メジャーアクション</option><option>その他</option></select></label><br>\n" +
			"<label>判定D数：<input type=\"number\" id=\"skillJudgeDice_"+skillCount+"\" value=\"0\">D</label>　<label>判定値：<input type=\"number\" id=\"skillJudge_"+skillCount+"\" value=\"0\"></label><br>\n" +
			"<label>ダメD数：<input type=\"number\" id=\"skillDamageDice_"+skillCount+"\" value=\"0\">D</label>　<label>ダメ値：<input type=\"number\" id=\"skillDamage_"+skillCount+"\" value=\"0\"></label>" +
					//"<span id=\"0\" class=\"deleteSkill\">✕</span>"
					"<br>\n" +
			"</div>").appendTo("#battleSkills").hide().slideDown("fast");
		skillCount++;
	});
	
	$(document).on("click", ".deleteSkill", function(){
		var idNum = $(this).attr("id");
		if(window.confirm("「"+$("#skillName_"+idNum).val()+"」を削除しますか？")){
		$("#skillCount_"+idNum).slideUp("fast");
		}
	})

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