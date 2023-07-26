const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');

let rows = [];

const csvFiles = [
    path.resolve(__dirname,'../S&P 500 Historical Data_1.csv'),
    path.resolve(__dirname,'../S&P 500 Historical Data_2.csv'),
    path.resolve(__dirname,'../S&P 500 Historical Data_3.csv')
];

function readCsv(filename) {
    return new Promise((resolve, reject) => {
      csv.parseFile(filename, { headers: true })
        .on('data', (row) => {
          let openPrice = parseFloat(row.Open.replace(',', ''));
          let closePrice = parseFloat(row.Price.replace(',', ''));
          let avgPrice = (openPrice + closePrice) / 2;
          rows.push({ Date: row.Date, AvgPrice: avgPrice });
        })
        .on('end', resolve)
        .on('error', reject);
    });
  }
  
  // Function to write to a new CSV file
  function writeCsv(filename) {
    return new Promise((resolve, reject) => {
      const csvStream = csv.format({ headers: true });
      const writableStream = fs.createWriteStream(filename);
  
      writableStream.on('finish', resolve);
      writableStream.on('error', reject);
  
      csvStream.pipe(writableStream);
      rows.forEach((row) => csvStream.write(row));
      csvStream.end();
    });
  }
  
  // Read all CSV files
  Promise.all(csvFiles.map(readCsv))
    .then(() => writeCsv(path.resolve(__dirname, 'combined.csv')))
    .then(() => console.log('CSV files combined successfully'))
    .catch(console.error);

  
  
  
  
  
  
  