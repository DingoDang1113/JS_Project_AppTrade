// module.exports.calculateInvestment(startDate, data) {
//     let investment = 0;
//     let shares = 0;
//     let investing = false;
  
//     // Parse start date from string to Date object
//     let start = new Date(startDate);
//     start = new Date(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate());
  
//     for (let i = 0; i < data.length; i++) {
//       let row = data[i];
  
//       // Parse row date from string to Date object
//       let rowDateParts = row['Date'].split('/');
//       let rowDate = new Date(rowDateParts[2], rowDateParts[0] - 1, rowDateParts[1]);
  
//       if (rowDate.getTime() === start.getTime()) {
//         investing = true;
//       }
//       if (investing) {
//         let price = parseFloat(row['AvgPrice']);
//         if (isNaN(price)) {
//           console.error('Invalid price on row', i, row);
//           continue;
//         }
//         investment += 1;  // invest $1
//         shares += 1 / price;  // buy shares with $1
//       }
//     }
  
//     let finalPrice = parseFloat(data[data.length - 1]['AvgPrice']);
//     let finalValue = shares * finalPrice;
//     let returnOnInvestment = finalValue - investment;
  
//     return {
//       investment,
//       finalValue,
//       returnOnInvestment

//     };
//   }
  
// //   let result = calculateInvestment('07/24/2023', rows);
// //   console.log(result);
  