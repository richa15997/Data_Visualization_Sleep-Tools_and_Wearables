//function to plot graph for one week vs exertion
function activity1(){
    
//seleccting the second file from drop-down menu
var selection1=document.getElementById("selection1").value;

//console.log(selection1)
var dselection1=document.getElementById(selection1).value;
//console.log(dselection1);
var csvFile1 = "../csv_files/" + dselection1 + "_activity.csv";

    

        d3.csv(csvFile1,function(err,data){
     
      var dataToPlot = Object.keys(data[0]).filter(function(k){return k!="day"})
        .map(function(k){
          return {"key":k,"values":data.map(function(d){
           return {
           
             "x":d.day,
             "y":+d[k]
           }
          })}
        })
        
      nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
     
          .rotateLabels(25)      
          .showControls(true)  
          .groupSpacing(0.1)
           .stacked(true)
            .showControls(false)
            .margin({top: 30, right: 60, bottom: 50, left: 70})
        ;
     chart.color(['#1f77b4', '#aec7e8', '#ffbb78','#ff7f0e']);//assigning bar-colors to rest light moderate and vigorous
    chart.reduceXTicks(false).staggerLabels(true);
        
         chart.xAxis
            .axisLabel("Day")
            .axisLabelDistance(5)
            .showMaxMin(false)
          
        ;
          chart.yAxis
            .axisLabel("Activity Level")
            .axisLabelDistance(-5)
            .tickFormat(d3.format(',.01f'))
        ;
        
        
           
        d3.select('#activity1 svg')
            .datum(dataToPlot)
            .call(chart);
    
        nv.utils.windowResize(chart.update);	
      
        return chart;
     
    
    });
      
  });
        
}

function activity2(){

//seleccting the second file from drop-down menu
 
var selection2=document.getElementById("selection2").value;

//console.log(selection2)
var dselection2=document.getElementById(selection2).value;
//console.log(dselection2);
var csvFile2 = "../csv_files/" + dselection2 + "_activity.csv";

    
  
        d3.csv(csvFile2,function(err,data){
      
      var dataToPlot = Object.keys(data[0]).filter(function(k){return k!="day"})
        .map(function(k){
          return {"key":k,"values":data.map(function(d){
           return {
            
             "x":d.day,
             "y":+d[k]
           }
          })}
        })
        
      nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
      
          .rotateLabels(25)      
          .showControls(true)  
          .groupSpacing(0.1)
           .stacked(true)
            .showControls(false)
            .margin({top: 30, right: 60, bottom: 50, left: 70})
        ;
    chart.color(['#1f77b4', '#aec7e8', '#ffbb78','#ff7f0e']); //assiging bar colors
    chart.reduceXTicks(false).staggerLabels(true);
        
         chart.xAxis
            .axisLabel("Day")
            .axisLabelDistance(5)
            .showMaxMin(false)
          
        ;
          chart.yAxis
            .axisLabel("Activity Level")
            .axisLabelDistance(-5)
            .tickFormat(d3.format(',.01f'))
        ;
        
      
           
        d3.select('#activity2 svg')
            .datum(dataToPlot)
            .call(chart);
    
        nv.utils.windowResize(chart.update);
   
    

      
        return chart;
     
    
    });
      
  });
        
}
