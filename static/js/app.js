// from data.js
var tableData = data;
Ufodata(tableData);
// YOUR CODE HERE!
function Ufodata(data)
{
var tbody = d3.select("tbody");
tbody.html("");
// Console.log the weather data from data.js
console.log(data);
data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
//   if(inputValue!='')
//   {
//    var dateParts = inputValue.split('-');
//     inputValue = parseInt(dateParts[1])+'/'+ parseInt(dateParts[2]) +"/"+dateParts[0];
//   }

  console.log(inputValue);
  console.log(tableData);
   
  var filteredData = tableData.filter(tableData => (tableData.datetime === inputValue));
  //var dates = filteredData.map(tableData => tableData.datetime);
  console.log(filteredData);
  Ufodata(filteredData);
  

  });

 // BONUS: Calculate summary statistics for the age field of the filtered data

  //First, create an array with just the age values
 