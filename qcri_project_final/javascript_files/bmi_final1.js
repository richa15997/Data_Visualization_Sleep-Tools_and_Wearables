
function bmi()//function to collect data for the dashboard 
{
   
var finalDataset = null; 


//setting margin, height, width
var m = {top: 30, right: 60, bottom: 50, left: 70}
  , h = 400 - m.top - m.bottom
  , w = 800 - m.left - m.right
  , numBins = 40;
	
//defining the range of x-axis
var x = d3.scale.linear().domain([12,42]).range([0, w]);



var dataset2=[];
var dataset1 = [];
  var convertedData=[];
  var countObj1=[];
  var countObj2=[];

//selecting first file from the drop-down of dashboard
var selection1=document.getElementById("selection1").value;
//console.log(selection1);
var dselection1=document.getElementById(selection1).value;
//console.log(dselection1);
var csvFile1 = "csv_files/" + dselection1 + "_bmi.csv";


//selecting second file from the drop fown of dashboard
var selection2=document.getElementById("selection2").value;
//console.log(selection2);
var dselection2=document.getElementById(selection2).value;
//console.log(dselection2);
var csvFile2 = "csv_files/" + dselection2 + "_bmi.csv";


 d3.csv(csvFile1, function(error, data){
  
		//giving a cummulative value to histogram from first file
    data.forEach(function (d){
    	dataset1.push(d.bmi);
    });
        binData1 = d3.layout.histogram().bins(x.ticks(numBins))(dataset1);
          countObj1 = {'key': dselection1, 'bar': true, 'color': 'rgb(0,204,102)', 'values': []};
  
 for(var i = 0; i < binData1.length; i++){
  countObj1.values.push([binData1[i].x,binData1[i].y]);

  }

      
  
convertedData.push(countObj1);

 });
   

 d3.csv(csvFile2, function(error, data){
  
		//giving a cummulative value to histogram from first file
    data.forEach(function (d){
    	dataset2.push(d.bmi);
    });
  binData2 = d3.layout.histogram().bins(x.ticks(numBins))(dataset2);
    countObj2 = {'key': dselection2, 'bar': true, 'color':'rgb(255,102,102)', 'values': []};
 for(var i = 0; i < binData2.length; i++){
    countObj2.values.push([binData2[i].x,binData2[i].y]);
   }
  
   
  
 convertedData.push(countObj2);
 });


  
 

 


  nv.addGraph(function() {
      var chart = nv.models.multiBarChart()
              .margin({top: m.top, right: m.right, bottom: m.bottom, left: m.left})
         
            .x(function(d,i) { return d[0] })
            .y(function(d,i) {return d[1] })
           
            .duration(300)
            .rotateLabels(60)
            .groupSpacing(0.1)
            .reduceXTicks(false)

                    ;
  
  
  chart.xAxis.tickPadding(5);
  
      chart.xAxis.tickFormat(function(d) {
        return d
      });
      var data=convertedData;
 
                     
      chart.xAxis.ticks(data[0].values.length)
      chart.xAxis.axisLabel('BMI');
    
   
      chart.yAxis
          .tickFormat(d3.format(',f'))
          .axisLabel('No. of Children');
         
      
         
      d3.select('#bmi svg')
        .datum(data)
        .transition()
        .duration(0)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
  });

}
