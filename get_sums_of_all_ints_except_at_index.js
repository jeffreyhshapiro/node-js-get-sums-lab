var fs = require('fs');
var totalSum = 0;

fs.readFile("number.txt", "utf8", function(error,data){
  //console.log(data);
  result = data.split(", ");
  //console.log(parseFloat(result));

    for (var i = 0; i < 4; i++) {
      totalSum += parseFloat(result[i]);
      if (i === 0){
        //add all elements in the array except for result[0]
        i = 1;
        totalSum += parseFloat(result[i]);
        console.log(totalSum);
      } else if (i === 1) {
        totalSum
      }


  };

  //for turn i, ignore result[i]

});