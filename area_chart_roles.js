d3.csv("data/teacher.csv")
    .row(function(d) { return {Session: Number(d.Session), Novice: Number(d.Novice), Expert: Number(d.Expert), Engineer: Number(d.Engineer),Teacher: Number(d.Teacher), Student: Number(d.Student)};})
    .get(function(error, data){
    
     
   
  var height= 300;
    var width =500;
    var margin={left:50, right:50,top:200,bottom:0};
    
    var y=d3.scaleLinear()
    .domain([0,d3.max(data, function(d){ return d.Novice+d.Expert+d.Engineer+d.Teacher+d.Student;})])
    .range([height,0]);
    
    var x=d3.scaleLinear()
    .domain(d3.extent(data, function(d){ return d.Session}))
    .range([0,width]);
    //.rangeRound([0,width])
    //.padding(.1);
    
    var categories =['Novice', 'Expert', 'Engineer','Teacher','Student'];
    var stack=d3.stack().keys(categories);
    var stacked =stack(data);
    
    var area=d3.area()
    .x(function(d){ return x(d.data.Session);})
    .y0(function(d){ return y(d[0]);})
    .y1(function(d){ return y(d[1]);})
    
    var svg= d3.select("body").append ("svg").attr("height","800").attr("width", "1000");
    var participantGroup= svg.append("g").attr("class", "area")
    .attr("transform", "translate("+margin.left+","+margin.top+")");
         
    
participantGroup.selectAll("path.area")
.data(stacked)
.enter().append("path")
.attr("class",function(d,i){ return "area" + i;})
.attr("d", function(d){ return area(d); })
 
    
    
/*.attr("height", function(d,i)
     { return y(d[0]); })
.attr("width", 50)
.attr("x",function(d,i) 
      { return x(d.Participant); })
.attr("y", function(d,i){ return y(d[1]);})*/

participantGroup.append("g")
.attr("class", "x axis hidden")
.attr("transform","translate(0,"+height+")")
.call(d3.axisBottom(x).ticks(4));

participantGroup.append("g")
.attr("class", "y axis")
.call(d3.axisLeft(y));
    
participantGroup.append("text")
.text("P1 Roles")
.attr("class","charttitle")
.attr("x", width/2); 


 })
