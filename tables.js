$(document).ready(function() {
    $("role").append("<br>");
    //actionlist
$("button").click(function() {
    alert($("action").text());
});
   
//participant total roles-table2    
var a= $("P10 [class2=teacher][class=actor]").length;
var b= $("P10 role[class2=teacher][class=audience]").length;
var c= $("P10 role[class2=student][class=actor]").length;
var d= $("P10 role[class2=student][class=audience]").length;


var e= $("P2 [class2=teacher][class=actor]").length;
var f= $("P2 [class2=teacher][class=audience]").length;
var g= $("P2 role[class2=student][class=actor]").length;
var h= $("P2 role[class2=student][class=audience]").length;

var i= $("P4 role[class2=teacher][class=actor]").length;
var j= $("P4 role[class2=teacher][class=audience]").length;
var k= $("P4 role[class2=student][class=actor]").length;
var l= $("P4 role[class2=student][class=audience]").length;

var m= $("P5 role[class2=teacher][class=actor]").length;
var n= $("P5 role[class2=teacher][class=audience]").length;
var o= $("P5 role[class2=student][class=actor]").length;
var p= $("P5 role[class2=student][class=audience]").length;
            
var aa= $("P01 [class2=teacher][class=actor]").length;
var bb= $("P01 role[class2=teacher][class=audience]").length;
var cc= $("P01 role[class2=student][class=actor]").length;
var dd= $("P01 role[class2=student][class=audience]").length;
            
var ee= $("P3 role[class2=teacher][class=actor]").length;
var ff= $("P3 role[class2=teacher][class=audience]").length;
var gg= $("P3 role[class2=student][class=actor]").length;
var hh= $("P3 role[class2=student][class=audience]").length;

var ii= $("P6 role[class2=teacher][class=actor]").length;
var jj= $("P6 role[class2=teacher][class=audience]").length;
var kk= $("P6 role[class2=student][class=actor]").length;
var ll= $("P6 role[class2=student][class=audience]").length;
 
            
var q= $("[class2=teacher][class=actor]").length;
var r= $("[class2=teacher][class=audience]").length;
var s= $("[class2=student][class=actor]").length;
var t= $("[class2=student][class=audience]").length;

//participant total roles-table3    

var one_exp_act= $("P01 [class4=expert][class=actor]").length;
var one_exp_aud= $("P01 [class4=expert][class=audience]").length;
var one_nov_act= $("P01 [class4=novice][class=actor]").length;
var one_nov_aud= $("P01 [class4=novice][class=audience]").length;
var one_eng_act= $("P01 [class3=engineer][class=actor]").length;
var one_eng_aud= $("P01 [class3=engineer][class=audience]").length;

var two_exp_act= $("P2 [class4=expert][class=actor]").length;
var two_exp_aud= $("P2 [class4=expert][class=audience]").length;
var two_nov_act= $("P2 [class4=novice][class=actor]").length;
var two_nov_aud= $("P2 [class4=novice][class=audience]").length;
var two_eng_act= $("P2 [class3=engineer][class=actor]").length;
var two_eng_aud= $("P2 [class3=engineer][class=audience]").length;

var three_exp_act= $("P3 [class4=expert][class=actor]").length;
var three_exp_aud= $("P3 [class4=expert][class=audience]").length;
var three_nov_act= $("P3 [class4=novice][class=actor]").length;
var three_nov_aud= $("P3 [class4=novice][class=audience]").length;
var three_eng_act= $("P3 [class3=engineer][class=actor]").length;
var three_eng_aud= $("P3 [class3=engineer][class=audience]").length;

var four_exp_act= $("P4 [class4=expert][class=actor]").length;
var four_exp_aud= $("P4 [class4=expert][class=audience]").length;
var four_nov_act= $("P4 [class4=novice][class=actor]").length;
var four_nov_aud= $("P4 [class4=novice][class=audience]").length;
var four_eng_act= $("P4 [class3=engineer][class=actor]").length;
var four_eng_aud= $("P4 [class3=engineer][class=audience]").length;

var five_exp_act= $("P5 [class4=expert][class=actor]").length;
var five_exp_aud= $("P5 [class4=expert][class=audience]").length;
var five_nov_act= $("P5 [class4=novice][class=actor]").length;
var five_nov_aud= $("P5 [class4=novice][class=audience]").length;
var five_eng_act= $("P5 [class3=engineer][class=actor]").length;
var five_eng_aud= $("P5 [class3=engineer][class=audience]").length;
            
var six_exp_act= $("P6 [class4=expert][class=actor]").length;
var six_exp_aud= $("P6 [class4=expert][class=audience]").length;
var six_nov_act= $("P6 [class4=novice][class=actor]").length;
var six_nov_aud= $("P6 [class4=novice][class=audience]").length;
var six_eng_act= $("P6 [class3=engineer][class=actor]").length;
var six_eng_aud= $("P6 [class3=engineer][class=audience]").length;
 
var ten_exp_act= $("P10 [class4=expert][class=actor]").length;
var ten_exp_aud= $("P10 [class4=expert][class=audience]").length;
var ten_nov_act= $("P10 [class4=novice][class=actor]").length;
var ten_nov_aud= $("P10 [class4=novice][class=audience]").length;
var ten_eng_act= $("P10 [class3=engineer][class=actor]").length;
var ten_eng_aud= $("P10 [class3=engineer][class=audience]").length;
    
var exp_act= $("[class4=expert][class=actor]").length;
var exp_aud= $("[class4=expert][class=audience]").length;
var nov_act= $("[class4=novice][class=actor]").length;
var nov_aud= $("[class4=novice][class=audience]").length;
var eng_act= $("[class3=engineer][class=actor]").length;
var eng_aud= $("[class3=engineer][class=audience]").length;
    
//participant total roles-table4 
var one_proj_act= $("P01 [class5=project_manager][class=actor]").length;
var one_proj_aud= $("P01 [class5=project_manager][class=audience]").length;
var one_eval_act= $("P01 [class5=evaluator][class=actor]").length;
var one_eval_aud= $("P01 [class5=evaluator][class=audience]").length;
var one_probl_act= $("P01 [class5=problem_solver][class=actor]").length;
var one_probl_aud= $("P01 [class5=problem_solver][class=audience]").length;
var one_mod_act= $("P01 [class11=modeler][class=actor]").length;
var one_mod_aud= $("P01 [class11=modeler][class=audience]").length;
var one_collab_act= $("P01 [class11=collaborator][class=actor]").length;
var one_collab_aud= $("P01 [class11=collaborator][class=audience]").length;

var two_proj_act= $("P2 [class5=project_manager][class=actor]").length;
var two_proj_aud= $("P2 [class5=project_manager][class=audience]").length;
var two_eval_act= $("P2 [class5=evaluator][class=actor]").length;
var two_eval_aud= $("P2 [class5=evaluator][class=audience]").length;
var two_probl_act= $("P2 [class5=problem_solver][class=actor]").length;
var two_probl_aud= $("P2 [class5=problem_solver][class=audience]").length;
var two_mod_act= $("P2 [class11=modeler][class=actor]").length;
var two_mod_aud= $("P2 [class11=modeler][class=audience]").length;
var two_collab_act= $("P2 [class11=collaborator][class=actor]").length;
var two_collab_aud= $("P2 [class11=collaborator][class=audience]").length;

var three_proj_act= $("P3 [class5=project_manager][class=actor]").length;
var three_proj_aud= $("P3 [class5=project_manager][class=audience]").length;
var three_eval_act= $("P3 [class5=evaluator][class=actor]").length;
var three_eval_aud= $("P3 [class5=evaluator][class=audience]").length;
var three_probl_act= $("P3 [class5=problem_solver][class=actor]").length;
var three_probl_aud= $("P3 [class5=problem_solver][class=audience]").length;
var three_mod_act= $("P3 [class11=modeler][class=actor]").length;
var three_mod_aud= $("P3 [class11=modeler][class=audience]").length;
var three_collab_act= $("P3 [class11=collaborator][class=actor]").length;
var three_collab_aud= $("P3 [class11=collaborator][class=audience]").length;

var four_proj_act= $("P4 [class5=project_manager][class=actor]").length;
var four_proj_aud= $("P4 [class5=project_manager][class=audience]").length;
var four_eval_act= $("P4 [class5=evaluator][class=actor]").length;
var four_eval_aud= $("P4 [class5=evaluator][class=audience]").length;
var four_probl_act= $("P4 [class5=problem_solver][class=actor]").length;
var four_probl_aud= $("P4 [class5=problem_solver][class=audience]").length;
var four_mod_act= $("P4 [class11=modeler][class=actor]").length;
var four_mod_aud= $("P4 [class11=modeler][class=audience]").length;
var four_collab_act= $("P4 [class11=collaborator][class=actor]").length;
var four_collab_aud= $("P4 [class11=collaborator][class=audience]").length;

var five_proj_act= $("P5 [class5=project_manager][class=actor]").length;
var five_proj_aud= $("P5 [class5=project_manager][class=audience]").length;
var five_eval_act= $("P5 [class5=evaluator][class=actor]").length;
var five_eval_aud= $("P5 [class5=evaluator][class=audience]").length;
var five_probl_act= $("P5 [class5=problem_solver][class=actor]").length;
var five_probl_aud= $("P5 [class5=problem_solver][class=audience]").length;
var five_mod_act= $("P5 [class11=modeler][class=actor]").length;
var five_mod_aud= $("P5 [class11=modeler][class=audience]").length;
var five_collab_act= $("P5 [class11=collaborator][class=actor]").length;
var five_collab_aud= $("P5 [class11=collaborator][class=audience]").length;
            
var six_proj_act= $("P6 [class5=project_manager][class=actor]").length;
var six_proj_aud= $("P6 [class5=project_manager][class=audience]").length;
var six_eval_act= $("P6 [class5=evaluator][class=actor]").length;
var six_eval_aud= $("P6 [class5=evaluator][class=audience]").length;
var six_probl_act= $("P6 [class5=problem_solver][class=actor]").length;
var six_probl_aud= $("P6 [class5=problem_solver][class=audience]").length;
var six_mod_act= $("P6 [class11=modeler][class=actor]").length;
var six_mod_aud= $("P6 [class11=modeler][class=audience]").length;
var six_collab_act= $("P6 [class11=collaborator][class=actor]").length;
var six_collab_aud= $("P6 [class11=collaborator][class=audience]").length;
 
var ten_proj_act= $("P10 [class5=project_manager][class=actor]").length;
var ten_proj_aud= $("P10 [class5=project_manager][class=audience]").length;
var ten_eval_act= $("P10 [class5=evaluator][class=actor]").length;
var ten_eval_aud= $("P10 [class5=evaluator][class=audience]").length;
var ten_probl_act= $("P10 [class5=problem_solver][class=actor]").length;
var ten_probl_aud= $("P10 [class5=problem_solver][class=audience]").length;
var ten_mod_act= $("P10 [class11=modeler][class=actor]").length;
var ten_mod_aud= $("P10 [class11=modeler][class=audience]").length;
var ten_collab_act= $("P10 [class11=collaborator][class=actor]").length;
var ten_collab_aud= $("P10 [class11=collaborator][class=audience]").length;
    
var proj_act= $("[class5=project_manager][class=actor]").length;
var proj_aud= $("[class5=project_manager][class=audience]").length;
var eval_act= $("[class5=evaluator][class=actor]").length;
var eval_aud= $("[class5=evaluator][class=audience]").length;
var probl_act= $("[class5=problem_solver][class=actor]").length;
var probl_aud= $("[class5=problem_solver][class=audience]").length;
var mod_act= $("[class11=modeler][class=actor]").length;
var mod_aud= $("[class11=modeler][class=audience]").length;
var collab_act= $("[class11=collaborator][class=actor]").length;
var collab_aud= $("[class11=collaborator][class=audience]").length;
    
//participant total roles-table1
var u= $("P01 > role").length;
var v= $("P2 > role").length;
var w= $("P3 > role").length;
var x= $("P4 > role").length;
var y = $("P5 > role").length;
var z = $("P6 > role").length;
var zz = $("P7 > role").length;
var ab = $("P8 > role").length;
var ac = $("P9 > role").length;
var ad = $("P10 > role").length;
var ae = $("P11 > role").length;
var roles =$("role").length;

//participant actor audience roles-table 1
  var acta = $("P01 role.actor").length;
 var auda =$("P01  role.audience").length;
    
    var actb=  $("P2 role.actor").length;
    var audb=$("P2 role.audience").length;
    
    var actc= $("P3 role.actor").length;
    var audc= $("P3 role.audience").length;
    
    var actd=$("P4 role.actor").length;
    var audd=$("P4 role.audience").length;
   
    var  acte=$("P5 role.actor").length;
    var aude=$("P5 role.audience").length;
    
    var  actf= $("P6 role.actor").length;
   var audf=$("P6 role.audience").length;
   
    var actg=$("P7 role.actor").length;
    var audg=$("P7 role.audience").length;
    
    var acth=$("P8 role.actor").length;
    var audh=$("P8 role.audience").length;
    var  acti=$("P9 role.actor").length;
   var audi=$("P9 role.audience").length;
    
    var  actj=$("P10 role.actor").length;
    var audj=$("P10 role.audience").length;
    
    var  actk=$("P11 role.actor").length;
    var audk=$("P11 role.audience").length;
    
//actor audience roles-table1
var  totalactor=$(".actor").length;
var totalaudience=$(".audience").length;

//variable search and replace-table2
$("#a").text(a);
$("#aa").text(aa);
$("#b").text(b);
$("#bb").text(bb);
$("#c").text(c);
$("#cc").text(cc);
$("#d").text(d);
$("#dd").text(dd);
$("#e").text(e);
$("#ee").text(ee);
$("#f").text(f);
$("#ff").text(ff);
$("#g").text(g);
$("#gg").text(gg);
$("#h").text(h);
$("#hh").text(hh);
$("#i").text(i);
$("#ii").text(ii);
$("#j").text(j);
$("#jj").text(jj);
$("#k").text(k);
$("#kk").text(kk);
$("#l").text(l);
$("#ll").text(ll);
$("#m").text(m);
$("#n").text(n);
$("#o").text(o);
$("#p").text(p);
            
$("#q").text(q);
$("#r").text(r);
$("#s").text(s);
$("#t").text(t);

//variable search and replace-table3

$("#one_exp_act").text(one_exp_act);
$("#one_exp_aud").text(one_exp_aud);
$("#one_nov_act").text(one_nov_act);
$("#one_nov_aud").text(one_nov_aud);
$("#one_eng_act").text(one_eng_act);
$("#one_eng_aud").text(one_eng_aud);

$("#two_exp_act").text(two_exp_act);
$("#two_exp_aud").text(two_exp_aud);
$("#two_nov_act").text(two_nov_act);
$("#two_nov_aud").text(two_nov_aud);
$("#two_eng_act").text(two_eng_act);
$("#two_eng_aud").text(two_eng_aud);

$("#three_exp_act").text(three_exp_act);
$("#three_exp_aud").text(three_exp_aud);
$("#three_nov_act").text(three_nov_act);
$("#three_nov_aud").text(three_nov_aud);
$("#three_eng_act").text(three_eng_act);
$("#three_eng_aud").text(three_eng_aud);

$("#four_exp_act").text(four_exp_act);
$("#four_exp_aud").text(four_exp_aud);
$("#four_nov_act").text(four_nov_act);
$("#four_nov_aud").text(four_nov_aud);
$("#four_eng_act").text(four_eng_act);
$("#four_eng_aud").text(four_eng_aud);

$("#five_exp_act").text(five_exp_act);
$("#five_exp_aud").text(five_exp_aud);
$("#five_nov_act").text(five_nov_act);
$("#five_nov_aud").text(five_nov_aud);
$("#five_eng_act").text(five_eng_act);
$("#five_eng_aud").text(five_eng_aud);

$("#six_exp_act").text(six_exp_act);
$("#six_exp_aud").text(six_exp_aud);
$("#six_nov_act").text(six_nov_act);
$("#six_nov_aud").text(six_nov_aud);
$("#six_eng_act").text(six_eng_act);
$("#six_eng_aud").text(six_eng_aud);

$("#ten_exp_act").text(ten_exp_act);
$("#ten_exp_aud").text(ten_exp_aud);
$("#ten_nov_act").text(ten_nov_act);
$("#ten_nov_aud").text(ten_nov_aud);
$("#ten_eng_act").text(ten_eng_act);
$("#ten_eng_aud").text(ten_eng_aud);
    
$("#exp_act").text(exp_act);
$("#exp_aud").text(exp_aud);
$("#nov_act").text(nov_act);
$("#nov_aud").text(nov_aud);
$("#eng_act").text(eng_act);
$("#eng_aud").text(eng_aud);

//variable search and replace-table4

$("#one_proj_act").text(one_proj_act);
$("#one_proj_aud").text(one_proj_aud);
$("#one_eval_act").text(one_eval_act);
$("#one_eval_aud").text(one_eval_aud);
$("#one_probl_act").text(one_probl_act);
$("#one_probl_aud").text(one_probl_aud);
$("#one_mod_act").text(one_mod_act);
$("#one_mod_aud").text(one_mod_aud);
$("#one_collab_act").text(one_collab_act);
$("#one_collab_aud").text(one_collab_aud);

$("#two_proj_act").text(two_proj_act);
$("#two_proj_aud").text(two_proj_aud);
$("#two_eval_act").text(two_eval_act);
$("#two_eval_aud").text(two_eval_aud);
$("#two_probl_act").text(two_probl_act);
$("#two_probl_aud").text(two_probl_aud);
$("#two_mod_act").text(two_mod_act);
$("#two_mod_aud").text(two_mod_aud);
$("#two_collab_act").text(two_collab_act);
$("#two_collab_aud").text(two_collab_aud);

$("#three_proj_act").text(three_proj_act);
$("#three_proj_aud").text(three_proj_aud);
$("#three_eval_act").text(three_eval_act);
$("#three_eval_aud").text(three_eval_aud);
$("#three_probl_act").text(three_probl_act);
$("#three_probl_aud").text(three_probl_aud);
$("#three_mod_act").text(three_mod_act);
$("#three_mod_aud").text(three_mod_aud);
$("#three_collab_act").text(three_collab_act);
$("#three_collab_aud").text(three_collab_aud);

$("#four_proj_act").text(four_proj_act);
$("#four_proj_aud").text(four_proj_aud);
$("#four_eval_act").text(four_eval_act);
$("#four_eval_aud").text(four_eval_aud);
$("#four_probl_act").text(four_probl_act);
$("#four_probl_aud").text(four_probl_aud);
$("#four_mod_act").text(four_mod_act);
$("#four_mod_aud").text(four_mod_aud);
$("#four_collab_act").text(four_collab_act);
$("#four_collab_aud").text(four_collab_aud);

$("#five_proj_act").text(five_proj_act);
$("#five_proj_aud").text(five_proj_aud);
$("#five_eval_act").text(five_eval_act);
$("#five_eval_aud").text(five_eval_aud);
$("#five_probl_act").text(five_probl_act);
$("#five_probl_aud").text(five_probl_aud);
$("#five_mod_act").text(five_mod_act);
$("#five_mod_aud").text(five_mod_aud);
$("#five_collab_act").text(five_collab_act);
$("#five_collab_aud").text(five_collab_aud);

$("#six_proj_act").text(six_proj_act);
$("#six_proj_aud").text(six_proj_aud);
$("#six_eval_act").text(six_eval_act);
$("#six_eval_aud").text(six_eval_aud);
$("#six_probl_act").text(six_probl_act);
$("#six_probl_aud").text(six_probl_aud);
$("#six_mod_act").text(six_mod_act);
$("#six_mod_aud").text(six_mod_aud);
$("#six_collab_act").text(six_collab_act);
$("#six_collab_aud").text(six_collab_aud);

$("#ten_proj_act").text(ten_proj_act);
$("#ten_proj_aud").text(ten_proj_aud);
$("#ten_eval_act").text(ten_eval_act);
$("#ten_eval_aud").text(ten_eval_aud);
$("#ten_probl_act").text(ten_probl_act);
$("#ten_probl_aud").text(ten_probl_aud);
$("#ten_mod_act").text(ten_mod_act);
$("#ten_mod_aud").text(ten_mod_aud);
$("#ten_collab_act").text(ten_collab_act);
$("#ten_collab_aud").text(ten_collab_aud);
    
$("#proj_act").text(proj_act);
$("#proj_aud").text(proj_aud);
$("#eval_act").text(eval_act);
$("#eval_aud").text(eval_aud);
$("#probl_act").text(probl_act);
$("#probl_aud").text(probl_aud);
$("#mod_act").text(mod_act);
$("#mod_aud").text(mod_aud);
$("#collab_act").text(collab_act);
$("#collab_aud").text(collab_aud);
    

//participant total roles-table 1
$("#u").text(u);
$("#v").text(v);
$("#w").text(w);
$("#x").text(x);
$("#y").text(y);
$("#z").text(z);
$("#zz").text(zz);
$("#ab").text(ab);
$("#ac").text(ac);
$("#ad").text(ad);
$("#ae").text(ae);
$("#roles").text(roles);
    
//participant actor roles-table1
$("#acta").text(acta);
$("#actb").text(actb);
$("#actc").text(actc);
$("#actd").text(actd);
$("#acte").text(acte);
$("#actf").text(actf);
$("#actg").text(actg);
$("#acth").text(acth);
$("#acti").text(acti);
$("#actj").text(actj);
$("#actk").text(actk);

$("#auda").text(auda);
$("#audb").text(audb);
$("#audc").text(audc);
$("#audd").text(audd);
$("#aude").text(aude);
$("#audf").text(audf);
$("#audg").text(audg);
$("#audh").text(audh);
$("#audi").text(audi);
$("#audj").text(audj);
$("#audk").text(audk);
// actor audience roles-table 1
$(".totalactor").text(totalactor);
$(".totalaudience").text(totalaudience);


    
//hide dialogue text
$("section").hide();
} );
/*


function createTable(){
mytable = $('<table></table>').attr({ id: "basicTable",class:"table table-hover"});
    var rows = new Number($("#rowcount").val());
    var cols = new Number($("#columncount").val());
    var tr = [];

    for (var i = 0; i <= rows; i++) {
        var row = $('<tr></tr>').attr({ class: ["class1"].join(' ') }).appendTo(mytable);
    if (i==0) {
      for (var j = 0; j < cols; j++) {
            $('<th></th>').text("text1").attr({class:["info"]}).appendTo(row);
        }
    }else {
        for (var j = 0; j < cols; j++) {
            $('<td></td>').text("text1").appendTo(row);
        }
}
    }

    mytable.appendTo("#box");
}



*/

//$("#teacherroles").text(teacherroles);

        
     /*   $("P10 engineering").length;
        $("P1 engineering").length;
        $("P2 engineering").length;
         $("P3 engineering").length;
        $("P5 engineering").length; 
        $("P6 engineering").length;
        $("P4 engineering").length;
            
      */


//$("role[class2=engineer][class=actor]").css("background","gray");
//$("role[class2=engineer][class=audience]").css("background","#ea1212");
        
        //$("role:even").css("background","yellow");
        //$("role:odd").css("background","rgb(199, 199, 239)");
        //$(".actor")
        //$(".audience")
        //$("evaluation")
        //$("response")
        //$("q")
        //$("request")
       
                        

                        
