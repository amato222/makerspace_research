var margin={left:100, right:0,top:60,bottom:0}; 

function init() {var svg= d3.select("#svg")
.attr("height",window.innerHeight).attr("width", window.innerWidth); 
    
svg.append("svg:g")
.attr("id", "barchart")
.attr("transform", "translate("+margin.left+","+margin.top+")");
}


/*yUpdate
.attr("class", "yAxis")
.call(d3.axisLeft(y).ticks(6))*/



var chart= function(data){ 
var margin={left:50, right:50,top:50,bottom:0}; 
    var height= 400;
    var width =800;
    var barwidth=30;
    var bargap=10;
    
  var total=(d3.sum(data, function(d) { return (d.novice +d.student+d.expert+d.engineer+d.teacher);}))/4 
  
var maxY=d3.max(data, function(d) { return d.total;})

    
 var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
    
var y=d3.scaleLinear()
    .domain([0,total])
    .range([height,0]);
    
var x=d3.scaleBand()
    .domain(data.map(function(d) { return d.session; }))
   .range([width,0]);
    
var vis=d3.select("#barchart")

//bar variables    
var barsN= vis.selectAll("rect.novice").data(data)
var barsEx= vis.selectAll("rect.expert").data(data)
var barsS= vis.selectAll("rect.student").data(data)
var barsE= vis.selectAll("rect.engineer").data(data)
var barsT= vis.selectAll("rect.teacher").data(data)
//percent bar variables
var barNpercent=vis.selectAll("rect.novice_percent")
    .data(data)
var barExpercent=vis.selectAll("rect.expert_percent")
.data(data)
var barSpercent=vis.selectAll("rect.student_percent")
.data(data)
var barEpercent=vis.selectAll("rect.engineer_percent")
.data(data)
var barTpercent=vis.selectAll("rect.teacher_percent")
.data(data)

var xAxis= vis.select("g.xAxis")
var yAxis=vis.select("g.yAxis")



//declare
/*
barsN.attr("x", "200").attr("y","10")
barsEx.attr("x", "200").attr("y","10")
barsS.attr("x", "200").attr("y","10")
barsE.attr("x", "200").attr("y","10")
barsT.attr("x", "200").attr("y","10")
*/


//enter
    
/*
.call(d3.axisLeft(y).ticks(6))

.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 6)
.attr("x",-6)
.text("Interactions")


.call(d3.axisBottom(x))

.attr("transform","translate(0,"+height+")")*/


barNpercent.enter()
.append("svg:rect")
.attr("class", "novice_percent")
.attr("fill","rgb(204, 196, 196)")
.attr("stroke", "rgb(255, 255, 255)")
    
 barExpercent.enter()
.append("svg:rect")
.attr("class", "expert_percent")
 .attr("fill","rgb(204, 196, 196)")
 .attr("stroke", "rgb(255, 255, 255)")
    
 barSpercent.enter()
.append("svg:rect")
.attr("class", "student_percent")
 .attr("fill","rgb(204, 196, 196)")
 .attr("stroke", "rgb(255, 255, 255)")
    
 barEpercent.enter()
.append("svg:rect")
.attr("class", "engineer_percent")
 .attr("fill","rgb(204, 196, 196)")
 .attr("stroke", "rgb(255, 255, 255)")
    
 barTpercent.enter()
.append("svg:rect")
.attr("class", "teacher_percent")
 .attr("fill","rgb(204, 196, 196)")
 .attr("stroke", "rgb(255, 255, 255)")
 
barsN.enter()
.append("svg:rect")
.attr("class","novice")
.attr("fill","#800")

barsEx.enter()
.append("svg:rect")
.attr("class","expert")
.attr("fill","#800")

barsS.enter()
.append("svg:rect")
.attr("class", "student")
 .attr("fill","#800")   
 barsE.enter()
.append("svg:rect")
.attr("class", "engineer")
  .attr("fill","#800")  
barsT.enter()
.append("svg:rect")
.attr("class", "teacher")
.attr("fill","#800")


    

//exit 
xAxis.remove()
yAxis.remove()
barsN.exit().remove()
barsEx.exit().remove()
barsS.exit().remove()
barsE.exit().remove()
barsT.exit().remove()
barNpercent.exit().remove()
barExpercent.exit().remove()
barSpercent.exit().remove()
barEpercent.exit().remove()
barTpercent.exit().remove()


//declear qualities of rect.class
/*



 



*/

vis
.append("g")
.attr("class", "xAxis")
.attr("transform","translate(0,"+height+")")
.call(d3.axisBottom(x))

vis
.append("g")
.attr("class", "yAxis")
.call(d3.axisLeft(y).ticks(6))
.append("text")
.attr("transform", "rotate(-90)")
      .attr("y", 6)
     .attr("x",-6)
      .text("Interactions")

barsN.transition().duration(750)
.attr("class","novice")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(d.novice);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(d.novice)); })
.attr("transform","translate("+bargap+",0)")
barsN.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Novice: "  + d.novice)	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
        /*.on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/
    
 barsEx.transition().duration(750)
.attr("class","expert")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(d.expert);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(d.expert)); })
.attr("transform","translate("+(barwidth+bargap)+",0)")
barsEx.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Expert: "  + d.expert)	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
      /*  .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })  */ 

barsS.transition().duration(750)
.attr("class","student")
    .attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(d.novice);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(d.novice)); })
.attr("transform","translate("+bargap+",0)")
barsS.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Novice: "  + d.novice)	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
      /*  .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/

barsT.transition().duration(750)
.attr("class","teacher")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(d.teacher);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(d.teacher)); })
.attr("transform","translate("+(4*barwidth+bargap)+",0)")
barsT.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Teacher: "  + d.teacher)	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
/*.on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/


barsE.transition().duration(750)
.attr("class","engineer")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(d.engineer);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(d.engineer)); })
.attr("transform","translate("+(2*barwidth+bargap)+",0)")
barsE.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Engineer: "  + d.engineer)	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
/*.on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/

barEpercent
.attr("class", "engineer_percent")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(total*.6);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(total*.6)); })
.attr("transform","translate("+(2*barwidth+bargap)+",0)")
.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Goal: "  + Math.round((total*.6)-d.engineer))	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
/*.on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/


barSpercent
.attr("class", "student_percent")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(total*.1);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(total*.1)); })
.attr("transform","translate("+(3*barwidth+bargap)+",0)")
.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Goal: "  + Math.round((total*.1)-d.student))	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
/*.on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/
    

barTpercent
.attr("class", "teacher_percent")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(total*.1);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(total*.1)); })
.attr("transform","translate("+(4*barwidth+bargap)+",0)")
.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Goal: "  + Math.round((total*.1)-d.teacher))	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
/*.on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/
    
barExpercent
.attr("class", "expert_percent")
.attr("x", function(d,i){ return x(d.session);})
.attr("y", function(d,i){ return y(total*.2);})
.attr("width", barwidth)
.attr("height", function(d,i) { return height-(y(total*.2)); })
.attr("transform","translate("+(barwidth+bargap)+",0)")
.on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html("Goal: "  + Math.round((total*.2)-d.expert))	
                .style("left", (d3.event.pageX-50) + "px")		
                .style("top", (d3.event.pageY - 100) + "px");	
            })					
/*.on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })*/
    


}



    
//percentage bars text

//novice role
/*firstGroup.append("text")
.attr("class", "novice")
.attr("x", function(d) { return x(d.session) +barwidth;} )
.attr("y", function(d) {return y(.5);})
.text(function(d) { return total*0; });


firstGroup.append("text")
.attr("class", "expert")
.attr("x", function(d) { return x(d.session) +(2*barwidth);} )
.attr("y", function(d) {return y(total*.2);})
.text(function(d) { return Math.round(total*.2); });

firstGroup.append("text")
.attr("class", "teacher")
.attr("x", function(d) { return x(d.session) +(4.5*barwidth+bargap);} )
.attr("y", function(d) {return y(total*.1);})
.text(function(d) { return Math.round(total*.1); });

firstGroup.append("text")
.attr("class", "engineer")
.attr("x", function(d) { return x(d.session) +(2.5*barwidth+bargap);} )
.attr("y", function(d) {return y(total*.6);})
.text(function(d) { return Math.round(total*.6); });
    
firstGroup.append("text")
.attr("class", "student")
.attr("x", function(d) { return x(d.session) +(3.5*barwidth+bargap);} )
.attr("y", function(d) {return y(total*.1);})
.text(function(d) { return Math.round(total*.1); });*/




