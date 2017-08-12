$(document).ready(function() {
    $("role").append("<br>");
    //actionlist
$("button").click(function() {
    alert($("action").text());
});

$("response").prepend("<b>R</b> ");
$("q").prepend("<br><b>Q</b> ");
$("action").prepend("<br><b>A</b>");
$("dialogue").prepend("<br><b>Dialogue</b>");

   
//participant total roles-table2    
var a= $("#session_four P10 [class2=teacher][class=actor]").length;
var b= $("#session_four P10 role[class2=teacher][class=audience]").length;
var c= $("#session_four P10 role[class2=student][class=actor]").length;
var d= $("#session_four P10 role[class2=student][class=audience]").length;


var e= $("#session_four P2 [class2=teacher][class=actor]").length;
var f= $("#session_four P2 [class2=teacher][class=audience]").length;
var g= $("#session_four P2 role[class2=student][class=actor]").length;
var h= $("#session_four P2 role[class2=student][class=audience]").length;

var i= $("#session_four P4 role[class2=teacher][class=actor]").length;
var j= $("#session_four P4 role[class2=teacher][class=audience]").length;
var k= $("#session_four P4 role[class2=student][class=actor]").length;
var l= $("#session_four P4 role[class2=student][class=audience]").length;

var m= $("#session_four P5 role[class2=teacher][class=actor]").length;
var n= $("#session_four P5 role[class2=teacher][class=audience]").length;
var o= $("#session_four P5 role[class2=student][class=actor]").length;
var p= $("#session_four P5 role[class2=student][class=audience]").length;
            
var aa= $("#session_four P01 [class2=teacher][class=actor]").length;
var bb= $("#session_four P01 role[class2=teacher][class=audience]").length;
var cc= $("#session_four P01 role[class2=student][class=actor]").length;
var dd= $("#session_four P01 role[class2=student][class=audience]").length;
            
var ee= $("#session_four P3 role[class2=teacher][class=actor]").length;
var ff= $("#session_four P3 role[class2=teacher][class=audience]").length;
var gg= $("#session_four P3 role[class2=student][class=actor]").length;
var hh= $("#session_four P3 role[class2=student][class=audience]").length;

var ii= $("#session_four P6 role[class2=teacher][class=actor]").length;
var jj= $("#session_four P6 role[class2=teacher][class=audience]").length;
var kk= $("#session_four P6 role[class2=student][class=actor]").length;
var ll= $("#session_four P6 role[class2=student][class=audience]").length;
 
            
var q= $("#session_four [class2=teacher][class=actor]").length;
var r= $("#session_four [class2=teacher][class=audience]").length;
var s= $("#session_four [class2=student][class=actor]").length;
var t= $("#session_four [class2=student][class=audience]").length;

//participant total roles-table3    

var one_exp_act= $("#session_four P01 [class4=expert][class=actor]").length;
var one_exp_aud= $("#session_four P01 [class4=expert][class=audience]").length;
var one_nov_act= $("#session_four P01 [class4=novice][class=actor]").length;
var one_nov_aud= $("#session_four P01 [class4=novice][class=audience]").length;
var one_eng_act= $("#session_four P01 [class3=engineer][class=actor]").length;
var one_eng_aud= $("#session_four P01 [class3=engineer][class=audience]").length;

var two_exp_act= $("#session_four P2 [class4=expert][class=actor]").length;
var two_exp_aud= $("#session_four P2 [class4=expert][class=audience]").length;
var two_nov_act= $("#session_four P2 [class4=novice][class=actor]").length;
var two_nov_aud= $("#session_four P2 [class4=novice][class=audience]").length;
var two_eng_act= $("#session_four P2 [class3=engineer][class=actor]").length;
var two_eng_aud= $("#session_four P2 [class3=engineer][class=audience]").length;

var three_exp_act= $("#session_four P3 [class4=expert][class=actor]").length;
var three_exp_aud= $("#session_four P3 [class4=expert][class=audience]").length;
var three_nov_act= $("#session_four P3 [class4=novice][class=actor]").length;
var three_nov_aud= $("#session_four P3 [class4=novice][class=audience]").length;
var three_eng_act= $("#session_four P3 [class3=engineer][class=actor]").length;
var three_eng_aud= $("#session_four P3 [class3=engineer][class=audience]").length;

var four_exp_act= $("#session_four P4 [class4=expert][class=actor]").length;
var four_exp_aud= $("#session_four P4 [class4=expert][class=audience]").length;
var four_nov_act= $("#session_four P4 [class4=novice][class=actor]").length;
var four_nov_aud= $("#session_four P4 [class4=novice][class=audience]").length;
var four_eng_act= $("#session_four P4 [class3=engineer][class=actor]").length;
var four_eng_aud= $("#session_four P4 [class3=engineer][class=audience]").length;

var five_exp_act= $("#session_four P5 [class4=expert][class=actor]").length;
var five_exp_aud= $("#session_four P5 [class4=expert][class=audience]").length;
var five_nov_act= $("#session_four P5 [class4=novice][class=actor]").length;
var five_nov_aud= $("#session_four P5 [class4=novice][class=audience]").length;
var five_eng_act= $("#session_four P5 [class3=engineer][class=actor]").length;
var five_eng_aud= $("#session_four P5 [class3=engineer][class=audience]").length;
            
var six_exp_act= $("#session_four P6 [class4=expert][class=actor]").length;
var six_exp_aud= $("#session_four P6 [class4=expert][class=audience]").length;
var six_nov_act= $("#session_four P6 [class4=novice][class=actor]").length;
var six_nov_aud= $("#session_four P6 [class4=novice][class=audience]").length;
var six_eng_act= $("#session_four P6 [class3=engineer][class=actor]").length;
var six_eng_aud= $("#session_four P6 [class3=engineer][class=audience]").length;
 
var ten_exp_act= $("#session_four P10 [class4=expert][class=actor]").length;
var ten_exp_aud= $("#session_four P10 [class4=expert][class=audience]").length;
var ten_nov_act= $("#session_four P10 [class4=novice][class=actor]").length;
var ten_nov_aud= $("#session_four P10 [class4=novice][class=audience]").length;
var ten_eng_act= $("#session_four P10 [class3=engineer][class=actor]").length;
var ten_eng_aud= $("#session_four P10 [class3=engineer][class=audience]").length;
    
var exp_act= $("#session_four [class4=expert][class=actor]").length;
var exp_aud= $("#session_four [class4=expert][class=audience]").length;
var nov_act= $("#session_four [class4=novice][class=actor]").length;
var nov_aud= $("#session_four [class4=novice][class=audience]").length;
var eng_act= $("#session_four [class3=engineer][class=actor]").length;
var eng_aud= $("#session_four [class3=engineer][class=audience]").length;
    
//participant total roles-table4 
var one_proj_act= $("#session_four P01 [class5=project_manager][class=actor]").length;
var one_proj_aud= $("#session_four P01 [class5=project_manager][class=audience]").length;
var one_eval_act= $("#session_four P01 [class5=evaluator][class=actor]").length;
var one_eval_aud= $("#session_four P01 [class5=evaluator][class=audience]").length;
var one_probl_act= $("#session_four P01 [class5=problem_solver][class=actor]").length;
var one_probl_aud= $("#session_four P01 [class5=problem_solver][class=audience]").length;
var one_mod_act= $("#session_four P01 [class11=modeler][class=actor]").length;
var one_mod_aud= $("#session_four P01 [class11=modeler][class=audience]").length;
var one_collab_act= $("#session_four P01 [class11=collaborator][class=actor]").length;
var one_collab_aud= $("#session_four P01 [class11=collaborator][class=audience]").length;

var two_proj_act= $("#session_four P2 [class5=project_manager][class=actor]").length;
var two_proj_aud= $("#session_four P2 [class5=project_manager][class=audience]").length;
var two_eval_act= $("#session_four P2 [class5=evaluator][class=actor]").length;
var two_eval_aud= $("#session_four P2 [class5=evaluator][class=audience]").length;
var two_probl_act= $("#session_four P2 [class5=problem_solver][class=actor]").length;
var two_probl_aud= $("#session_four P2 [class5=problem_solver][class=audience]").length;
var two_mod_act= $("#session_four P2 [class11=modeler][class=actor]").length;
var two_mod_aud= $("#session_four P2 [class11=modeler][class=audience]").length;
var two_collab_act= $("#session_four P2 [class11=collaborator][class=actor]").length;
var two_collab_aud= $("#session_four P2 [class11=collaborator][class=audience]").length;

var three_proj_act= $("#session_four P3 [class5=project_manager][class=actor]").length;
var three_proj_aud= $("#session_four P3 [class5=project_manager][class=audience]").length;
var three_eval_act= $("#session_four P3 [class5=evaluator][class=actor]").length;
var three_eval_aud= $("#session_four P3 [class5=evaluator][class=audience]").length;
var three_probl_act= $("#session_four P3 [class5=problem_solver][class=actor]").length;
var three_probl_aud= $("#session_four P3 [class5=problem_solver][class=audience]").length;
var three_mod_act= $("#session_four P3 [class11=modeler][class=actor]").length;
var three_mod_aud= $("#session_four P3 [class11=modeler][class=audience]").length;
var three_collab_act= $("#session_four P3 [class11=collaborator][class=actor]").length;
var three_collab_aud= $("#session_four P3 [class11=collaborator][class=audience]").length;

var four_proj_act= $("#session_four P4 [class5=project_manager][class=actor]").length;
var four_proj_aud= $("#session_four P4 [class5=project_manager][class=audience]").length;
var four_eval_act= $("#session_four P4 [class5=evaluator][class=actor]").length;
var four_eval_aud= $("#session_four P4 [class5=evaluator][class=audience]").length;
var four_probl_act= $("#session_four P4 [class5=problem_solver][class=actor]").length;
var four_probl_aud= $("#session_four P4 [class5=problem_solver][class=audience]").length;
var four_mod_act= $("#session_four P4 [class11=modeler][class=actor]").length;
var four_mod_aud= $("#session_four P4 [class11=modeler][class=audience]").length;
var four_collab_act= $("#session_four P4 [class11=collaborator][class=actor]").length;
var four_collab_aud= $("#session_four P4 [class11=collaborator][class=audience]").length;

var five_proj_act= $("#session_four P5 [class5=project_manager][class=actor]").length;
var five_proj_aud= $("#session_four P5 [class5=project_manager][class=audience]").length;
var five_eval_act= $("#session_four P5 [class5=evaluator][class=actor]").length;
var five_eval_aud= $("#session_four P5 [class5=evaluator][class=audience]").length;
var five_probl_act= $("#session_four P5 [class5=problem_solver][class=actor]").length;
var five_probl_aud= $("#session_four P5 [class5=problem_solver][class=audience]").length;
var five_mod_act= $("#session_four P5 [class11=modeler][class=actor]").length;
var five_mod_aud= $("#session_four P5 [class11=modeler][class=audience]").length;
var five_collab_act= $("#session_four P5 [class11=collaborator][class=actor]").length;
var five_collab_aud= $("#session_four P5 [class11=collaborator][class=audience]").length;
            
var six_proj_act= $("#session_four P6 [class5=project_manager][class=actor]").length;
var six_proj_aud= $("#session_four P6 [class5=project_manager][class=audience]").length;
var six_eval_act= $("#session_four P6 [class5=evaluator][class=actor]").length;
var six_eval_aud= $("#session_four P6 [class5=evaluator][class=audience]").length;
var six_probl_act= $("#session_four P6 [class5=problem_solver][class=actor]").length;
var six_probl_aud= $("#session_four P6 [class5=problem_solver][class=audience]").length;
var six_mod_act= $("#session_four P6 [class11=modeler][class=actor]").length;
var six_mod_aud= $("#session_four P6 [class11=modeler][class=audience]").length;
var six_collab_act= $("#session_four P6 [class11=collaborator][class=actor]").length;
var six_collab_aud= $("#session_four P6 [class11=collaborator][class=audience]").length;
 
var ten_proj_act= $("#session_four P10 [class5=project_manager][class=actor]").length;
var ten_proj_aud= $("#session_four P10 [class5=project_manager][class=audience]").length;
var ten_eval_act= $("#session_four P10 [class5=evaluator][class=actor]").length;
var ten_eval_aud= $("#session_four P10 [class5=evaluator][class=audience]").length;
var ten_probl_act= $("#session_four P10 [class5=problem_solver][class=actor]").length;
var ten_probl_aud= $("#session_four P10 [class5=problem_solver][class=audience]").length;
var ten_mod_act= $("#session_four P10 [class11=modeler][class=actor]").length;
var ten_mod_aud= $("#session_four P10 [class11=modeler][class=audience]").length;
var ten_collab_act= $("#session_four P10 [class11=collaborator][class=actor]").length;
var ten_collab_aud= $("#session_four P10 [class11=collaborator][class=audience]").length;
    
var proj_act= $("#session_four [class5=project_manager][class=actor]").length;
var proj_aud= $("#session_four [class5=project_manager][class=audience]").length;
var eval_act= $("#session_four [class5=evaluator][class=actor]").length;
var eval_aud= $("#session_four [class5=evaluator][class=audience]").length;
var probl_act= $("#session_four [class5=problem_solver][class=actor]").length;
var probl_aud= $("#session_four [class5=problem_solver][class=audience]").length;
var mod_act= $("#session_four [class11=modeler][class=actor]").length;
var mod_aud= $("#session_four [class11=modeler][class=audience]").length;
var collab_act= $("#session_four [class11=collaborator][class=actor]").length;
var collab_aud= $("#session_four [class11=collaborator][class=audience]").length;
    
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
    
//action response
 var one_response=$("P01 response").length;
var one_question=$("P01 q").length;
var one_action=$("P01 action").length;
    
    var two_response=$("P2 response").length;
var two_question=$("P2 q").length;
var two_action=$("P2 action").length;
    
    var three_response=$("P3 response").length;
var three_question=$("P3 q").length;
var three_action=$("P3 action").length;
    
    var four_response=$("P4 response").length;
var four_question=$("P4 q").length;
var four_action=$("P4 action").length;
    
    var five_response=$("P5 response").length;
var five_question=$("P5 q").length;
var five_action=$("P5 action").length;
    
    var six_response=$("P6 response").length;
var six_question=$("P6 q").length;
var six_action=$("P6 action").length;
    
    var seven_response=$("P7 response").length;
var seven_question=$("P7 q").length;
var seven_action=$("P7 action").length;
    
    var eight_response=$("P8 response").length;
var eight_question=$("P8 q").length;
var eight_action=$("P8 action").length;
    
    var nine_response=$("P9 response").length;
var nine_question=$("P9 q").length;
var nine_action=$("P9 action").length;
    
    var ten_response=$("P10 response").length;
var ten_question=$("P10 q").length;
var ten_action=$("P10 action").length;    
       
var total_response=$("response").length;
var total_question=$("q").length;
var total_action=$("action").length;
    
//dialogue
var sessone_pone_interactive=$("#session_one perspectiveone dialogue.interactive").length;
var sessone_pone_constructive= $("#session_one perspectiveone dialogue.constructive").length;
var sessone_pone_active= $("#session_one perspectiveone dialogue.active").length;    
var sessone_pone_dialogue=$("#session_one perspectiveone dialogue").length;
    
var sessone_ptwo_interactive=$("#session_one perspectivetwo dialogue.interactive").length;
var sessone_ptwo_constructive= $("#session_one perspectivetwo dialogue.constructive").length;
var sessone_ptwo_active= $("#session_one perspectivetwo dialogue.active").length;   
var sessone_ptwo_dialogue=$("#session_one perspectivetwo dialogue").length;
      
var sesstwo_pone_interactive=$("#session_two perspectiveone dialogue.interactive").length;
var sesstwo_pone_constructive= $("#session_two perspectiveone dialogue.constructive").length;
var sesstwo_pone_active= $("#session_two perspectiveone dialogue.active").length;
var sesstwo_pone_dialogue=$("#session_two perspectiveone dialogue").length;

var sesstwo_ptwo_interactive=$("#session_two perspectivetwo dialogue.interactive").length;
var sesstwo_ptwo_constructive= $("#session_two perspectivetwo dialogue.constructive").length;
var sesstwo_ptwo_active= $("#session_two perspectivetwo dialogue.active").length;    
var sesstwo_ptwo_dialogue=$("#session_two perspectivetwo dialogue").length;
  
var sessthree_pone_interactive=$("#session_three perspectiveone dialogue.interactive").length;
var sessthree_pone_constructive= $("#session_three perspectiveone dialogue.constructive").length;
var sessthree_pone_active= $("#session_three perspectiveone dialogue.active").length;  
var sessthree_pone_dialogue=$("#session_three perspectiveone dialogue").length;
  
var sessthree_ptwo_interactive=$("#session_three perspectivetwo dialogue.interactive").length;
var sessthree_ptwo_constructive= $("#session_three perspectivetwo dialogue.constructive").length;
var sessthree_ptwo_active= $("#session_three perspectivetwo dialogue.active").length;   
var sessthree_ptwo_dialogue=$("#session_three perspectivetwo dialogue").length; 
    
var sessfour_pone_interactive=$("#session_four perspectiveone dialogue.interactive").length;
var sessfour_pone_constructive= $("#session_four perspectiveone dialogue.constructive").length;
var sessfour_pone_active= $("#session_four perspectiveone dialogue.active").length;
var sessfour_pone_dialogue=$("#session_four perspectiveone dialogue").length;
    
var sessfour_ptwo_interactive=$("#session_four perspectivetwo dialogue.interactive").length;
var sessfour_ptwo_constructive= $("#session_four perspectivetwo dialogue.constructive").length;
var sessfour_ptwo_active= $("#session_four perspectivetwo dialogue.active").length;
var sessfour_ptwo_dialogue=$("#session_four perspectivetwo dialogue").length;
    
var total_interactive=$(".interactive").length;
var total_constructive= $(".constructive").length;
var total_active= $(".active").length;   
var total_dialogue=$("dialogue").length;

//table 7 
    //dialogue
var sessone_pone_rplanning=$("#session_one perspectiveone [class2=role_planning]").length;
var sessone_pone_rnegotiation= $("#session_one perspectiveone [class2=role_negotiation]").length;
var sessone_pone_rdevelopment= $("#session_one perspectiveone [class2=role_development]").length;    
var sessone_pone_rdevwork= $("#session_one perspectiveone [class3=project_work]").length;
var sessone_pone_review= $("#session_one perspectiveone [class3=review]").length;
var sessone_pone_xdomain= $("#session_one perspectiveone [class3=x-domain]").length;
    
var sessone_ptwo_rplanning=$("#session_one perspectivetwo [class2=role_planning]").length;
var sessone_ptwo_rnegotiation= $("#session_one perspectivetwo [class2=role_negotiation]").length;
var sessone_ptwo_rdevelopment= $("#session_one perspectivetwo [class2=role_development]").length;   
var sessone_ptwo_rdevwork= $("#session_one perspectivetwo [class3=project_work]").length;
var sessone_ptwo_review= $("#session_one perspectivetwo [class3=review]").length;
var sessone_ptwo_xdomain= $("#session_one perspectivetwo [class3=x-domain]").length;
      
var sesstwo_pone_rplanning=$("#session_two perspectiveone [class2=role_planning]").length;
var sesstwo_pone_rnegotiation= $("#session_two perspectiveone [class2=role_negotiation]").length;
var sesstwo_pone_rdevelopment= $("#session_two perspectiveone [class2=role_development]").length;
var sesstwo_pone_rdevwork= $("#session_two perspectiveone [class3=project_work]").length;
var sesstwo_pone_review= $("#session_two perspectiveone [class3=review]").length;
var sesstwo_pone_xdomain= $("#session_two perspectiveone [class3=x-domain]").length;

var sesstwo_ptwo_rplanning=$("#session_two perspectivetwo [class2=role_planning]").length;
var sesstwo_ptwo_rnegotiation= $("#session_two perspectivetwo [class2=role_negotiation]").length;
var sesstwo_ptwo_rdevelopment= $("#session_two perspectivetwo [class2=role_development]").length;    
var sesstwo_ptwo_rdevwork= $("#session_two perspectivetwo [class3=project_work]").length;
var sesstwo_ptwo_review= $("#session_two perspectivetwo [class3=review]").length;
var sesstwo_ptwo_xdomain= $("#session_two perspectivetwo [class3=x-domain]").length;
  
var sessthree_pone_rplanning=$("#session_three perspectiveone [class2=role_planning]").length;
var sessthree_pone_rnegotiation= $("#session_three perspectiveone [class2=role_negotiation]").length;
var sessthree_pone_rdevelopment= $("#session_three perspectiveone [class2=role_development]").length; var sessthree_pone_rdevwork= $("#session_three perspectiveone [class3=project_work]").length; 
var sessthree_pone_review= $("#session_three perspectiveone [class3=review]").length;
var sessthree_pone_xdomain= $("#session_three perspectiveone [class3=x-domain]").length;

  
var sessthree_ptwo_rplanning=$("#session_three perspectivetwo [class2=role_planning]").length;
var sessthree_ptwo_rnegotiation= $("#session_three perspectivetwo [class2=role_negotiation]").length;
var sessthree_ptwo_rdevelopment= $("#session_three perspectivetwo [class2=role_development]").length; var sessthree_ptwo_rdevwork= $("#session_three perspectivetwo [class3=project_work]").length;
var sessthree_ptwo_review= $("#session_three perspectivetwo [class3=review]").length; 
var sessthree_ptwo_xdomain= $("#session_three perspectivetwo [class3=x-domain]").length; 
 
    
var sessfour_pone_rplanning=$("#session_four perspectiveone [class2=role_planning]").length;
var sessfour_pone_rnegotiation= $("#session_four perspectiveone [class2=role_negotiation]").length;
var sessfour_pone_rdevelopment= $("#session_four perspectiveone [class2=role_development]").length;
var sessfour_pone_rdevwork= $("#session_four perspectiveone [class3=project_work]").length;
var sessfour_pone_review= $("#session_four perspectiveone [class3=review]").length;
var sessfour_pone_xdomain= $("#session_four perspectiveone [class3=x-domain]").length;
    
var sessfour_ptwo_rplanning=$("#session_four perspectivetwo [class2=role_planning]").length;
var sessfour_ptwo_rnegotiation= $("#session_four perspectivetwo [class2=role_negotiation]").length;
var sessfour_ptwo_rdevelopment= $("#session_four perspectivetwo [class2=role_development]").length;
var sessfour_ptwo_rdevwork= $("#session_four perspectivetwo [class3=project_work]").length;
var sessfour_ptwo_review= $("#session_four perspectivetwo [class3=review]").length;
var sessfour_ptwo_xdomain= $("#session_four perspectivetwo [class3=x-domain]").length;
    
var total_rplanning=$("[class2=role_planning]").length;
var total_rnegotiation= $("[class2=role_negotiation]").length;
var total_rdevelopment= $("[class2=role_development]").length;   
var total_rdevwork= $("[class3=project_work]").length;
var total_review= $("[class3=review]").length;
var total_xdomain= $("[class3=x-domain]").length;

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

//action response-table 5
$("#one_response").text(one_response);
$("#one_question").text(one_question);
$("#one_action").text(one_action);
    $("#one_action").text(one_action);
    
$("#two_response").text(two_response);
$("#two_question").text(two_question);
$("#two_action").text(two_action);
    $("#two_action").text(two_action);

$("#three_response").text(three_response);
$("#three_question").text(three_question);
$("#three_action").text(three_action);
    $("#three_action").text(three_action);
    
$("#four_response").text(four_response);
$("#four_question").text(four_question);
$("#four_action").text(four_action);
    $("#four_action").text(four_action);
    
$("#five_response").text(five_response);
$("#five_question").text(five_question);
$("#five_action").text(five_action);
    $("#five_action").text(five_action);
    
$("#six_response").text(six_response);
$("#six_question").text(six_question);
$("#six_action").text(six_action);
    $("#six_action").text(six_action);
    
$("#seven_response").text(seven_response);
$("#seven_question").text(seven_question);
$("#seven_action").text(seven_action);
    $("#seven_action").text(seven_action);
    
$("#eight_response").text(eight_response);
$("#eight_question").text(eight_question);
$("#eight_action").text(eight_action);
    $("#eight_action").text(eight_action);

$("#nine_response").text(nine_response);
$("#nine_question").text(nine_question);
$("#nine_action").text(nine_action);
    $("#nine_action").text(nine_action);
    
$("#ten_response").text(ten_response);
$("#ten_question").text(ten_question);
$("#ten_action").text(ten_action);
    $("#ten_action").text(ten_action);
    
$("#total_response").text(total_response);
$("#total_question").text(total_question);
$("#total_action").text(total_action);
    
//dialogue - table 6

$("#sessone_pone_interactive").text(sessone_pone_interactive); 
$("#sessone_pone_constructive").text(sessone_pone_constructive);
$("#sessone_pone_active").text(sessone_pone_active);
$("#sessone_pone_dialogue").text(sessone_pone_dialogue); 

$("#sessone_ptwo_interactive").text(sessone_ptwo_interactive); 
$("#sessone_ptwo_constructive").text(sessone_ptwo_constructive);
$("#sessone_ptwo_active").text(sessone_ptwo_active);
$("#sessone_ptwo_dialogue").text(sessone_ptwo_dialogue); 
  
$("#sesstwo_pone_interactive").text(sesstwo_pone_interactive); 
$("#sesstwo_pone_constructive").text(sesstwo_pone_constructive);
$("#sesstwo_pone_active").text(sesstwo_pone_active);
$("#sesstwo_pone_dialogue").text(sesstwo_pone_dialogue); 
  
$("#sesstwo_ptwo_interactive").text(sesstwo_ptwo_interactive); 
$("#sesstwo_ptwo_constructive").text(sesstwo_ptwo_constructive);
$("#sesstwo_ptwo_active").text(sesstwo_ptwo_active);
$("#sesstwo_ptwo_dialogue").text(sesstwo_ptwo_dialogue); 
   
$("#sessthree_pone_interactive").text(sessthree_pone_interactive); 
$("#sessthree_pone_constructive").text(sessthree_pone_constructive);
$("#sessthree_pone_active").text(sessthree_pone_active);
$("#sessthree_pone_dialogue").text(sessthree_pone_dialogue); 
  
$("#sessthree_ptwo_interactive").text(sessthree_ptwo_interactive); 
$("#sessthree_ptwo_constructive").text(sessthree_ptwo_constructive);
$("#sessthree_ptwo_active").text(sessthree_ptwo_active);
$("#sessthree_ptwo_dialogue").text(sessthree_ptwo_dialogue); 
    
$("#sessfour_pone_interactive").text(sessfour_pone_interactive); 
$("#sessfour_pone_constructive").text(sessfour_pone_constructive);
$("#sessfour_pone_active").text(sessfour_pone_active);
$("#sessfour_pone_dialogue").text(sessfour_pone_dialogue);
  
$("#sessfour_ptwo_interactive").text(sessfour_ptwo_interactive); 
$("#sessfour_ptwo_constructive").text(sessfour_ptwo_constructive); 
$("#sessfour_ptwo_active").text(sessfour_ptwo_active);
$("#sessfour_ptwo_dialogue").text(sessfour_ptwo_dialogue);


$("#total_interactive").text(total_interactive);
$("#total_constructive").text(total_constructive);
$("#total_active").text(total_active);
$("#total_dialogue").text(total_dialogue); 
    
//dialogue - table 7

$("#sessone_pone_rplanning").text(sessone_pone_rplanning); 
$("#sessone_pone_rnegotiation").text(sessone_pone_rnegotiation);
$("#sessone_pone_rdevelopment").text(sessone_pone_rdevelopment);
$("#sessone_pone_rdevwork").text(sessone_pone_rdevwork);
$("#sessone_pone_review").text(sessone_pone_review);
$("#sessone_pone_xdomain").text(sessone_pone_xdomain);

$("#sessone_ptwo_rplanning").text(sessone_ptwo_rplanning); 
$("#sessone_ptwo_rnegotiation").text(sessone_ptwo_rnegotiation);
$("#sessone_ptwo_rdevelopment").text(sessone_ptwo_rdevelopment);
$("#sessone_ptwo_rdevwork").text(sessone_ptwo_rdevwork);
$("#sessone_ptwo_review").text(sessone_ptwo_review);
$("#sessone_ptwo_xdomain").text(sessone_ptwo_xdomain);
  
$("#sesstwo_pone_rplanning").text(sesstwo_pone_rplanning); 
$("#sesstwo_pone_rnegotiation").text(sesstwo_pone_rnegotiation);
$("#sesstwo_pone_rdevelopment").text(sesstwo_pone_rdevelopment);
$("#sesstwo_pone_rdevwork").text(sesstwo_pone_rdevwork);
$("#sesstwo_pone_review").text(sesstwo_pone_review);
$("#sesstwo_pone_xdomain").text(sesstwo_pone_xdomain);
  
$("#sesstwo_ptwo_rplanning").text(sesstwo_ptwo_rplanning); 
$("#sesstwo_ptwo_rnegotiation").text(sesstwo_ptwo_rnegotiation);
$("#sesstwo_ptwo_rdevelopment").text(sesstwo_ptwo_rdevelopment);
$("#sesstwo_ptwo_rdevwork").text(sesstwo_ptwo_rdevwork);
$("#sesstwo_ptwo_review").text(sesstwo_ptwo_review);
$("#sesstwo_ptwo_xdomain").text(sesstwo_ptwo_xdomain);
   
$("#sessthree_pone_rplanning").text(sessthree_pone_rplanning); 
$("#sessthree_pone_rnegotiation").text(sessthree_pone_rnegotiation);
$("#sessthree_pone_rdevelopment").text(sessthree_pone_rdevelopment);
$("#sessthree_pone_rdevwork").text(sessthree_pone_rdevwork);
$("#sessthree_pone_review").text(sessthree_pone_review);
$("#sessthree_pone_xdomain").text(sessthree_pone_xdomain);
  
$("#sessthree_ptwo_rplanning").text(sessthree_ptwo_rplanning); 
$("#sessthree_ptwo_rnegotiation").text(sessthree_ptwo_rnegotiation);
$("#sessthree_ptwo_rdevelopment").text(sessthree_ptwo_rdevelopment);
$("#sessthree_ptwo_rdevwork").text(sessthree_ptwo_rdevwork);
$("#sessthree_ptwo_review").text(sessthree_ptwo_review);
$("#sessthree_ptwo_xdomain").text(sessthree_ptwo_xdomain);
    
$("#sessfour_pone_rplanning").text(sessfour_pone_rplanning); 
$("#sessfour_pone_rnegotiation").text(sessfour_pone_rnegotiation);
$("#sessfour_pone_rdevelopment").text(sessfour_pone_rdevelopment);
$("#sessfour_pone_rdevwork").text(sessfour_pone_rdevwork);
$("#sessfour_pone_review").text(sessfour_pone_review);
$("#sessfour_pone_xdomain").text(sessfour_pone_xdomain);
  
$("#sessfour_ptwo_rplanning").text(sessfour_ptwo_rplanning); 
$("#sessfour_ptwo_rnegotiation").text(sessfour_ptwo_rnegotiation); 
$("#sessfour_ptwo_rdevelopment").text(sessfour_ptwo_rdevelopment);
$("#sessfour_ptwo_rdevwork").text(sessfour_ptwo_rdevwork);
$("#sessfour_ptwo_review").text(sessfour_ptwo_review);
$("#sessfour_ptwo_xdomain").text(sessfour_ptwo_xdomain);
    
$("#total_rplanning").text(total_rplanning);
$("#total_rnegotiation").text(total_rnegotiation);
$("#total_rdevelopment").text(total_rdevelopment);
$("#total_rdevwork").text(total_rdevwork);
$("#total_review").text(total_review); 
$("#total_xdomain").text(total_xdomain); 


//hide dialogue text
//$("#session_1").hide();
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
       
                        

                        
