d3.csv("#.csv")
    .row(function(d) { return {"#"};})
    .get(function(error, data){
    
     
   
  var height= 300;
    var width =500;
    var margin={left:50, right:50,top:200,bottom:0};
    
    var y=d3.scaleLinear()
    .domain([0,d3.max(data, function(d){ return "#";})])
    .range([height,0]);
    
    var x=d3.scaleLinear()
    .domain(d3.extent(data, function(d){ return "#"}))
    .range([0,width]);
    //.rangeRound([0,width])
    //.padding(.1);
    
    var area=d3.area()
    .x(function(d){ return x(d.data.Session);})
    .y0(function(d){ return y(d[0]);})
    .y1(function(d){ return y(d[1]);})
    
    var svg= d3.select("body").append ("svg").attr("height","800").attr("width", "1000");
    var participantGroup= svg.append("g").attr("class", "area")
    .attr("transform", "translate("+margin.left+","+margin.top+")");