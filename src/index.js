// import { buildChart, buildPieChart } from "./scripts/charts";
let tickerArr = [];
let purchasePrices = {};
let quantities = {};
let tickerDataCache = {};
let myChart;
let colorIndex = 0;
const colors = ['#45ffbc', '#e3ffa8', '#a6a6a6', '#f6cd61','#aec993'];

async function apiFetch(symbol) {
  if (tickerDataCache[symbol]) {
    return tickerDataCache[symbol];
  }

  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=f43645c7dcc9b1fe95e501b844e1c963`);
    const result = await response.json();
    tickerDataCache[symbol] = result;
    return result;
  } catch(error) {
    console.error(error);
    return null;
  }
}

async function apiInput(symbol, purchasePrice, quantity) {
  const data = await apiFetch(symbol); 
  if (data.length > 0) {
    purchasePrices[symbol] = purchasePrice;
    quantities[symbol] = quantity;
    return parseFloat(data[0].price);
  } 
}


const contentDiv = document.getElementById('content');
const tileDiv = document.getElementById('stockTiles');

function displayData(data) { 
  // console.log('display is passed with', data);
  const stock = data[0];
  const symbol = document.createElement('span'); 
  const tile = document.createElement('div');
  // tile.style.border = '1px solid';
  tile.style.margin = '5px';
  tile.style.padding ='1px';
  tile.style.borderRadius = '8px';
  tile.style.width = '150px';
  tile.style.backgroundColor = colors[colorIndex % colors.length];
  colorIndex++;
  const info = document.createElement('span');

  // conditional format
  const percentChg = function (percent) {
    if (percent > 0) {
      return `⬆${percent.toFixed(2)}%`
    } else {
      return `⬇${percent.toFixed(2)}%`
    }
  }
   
  const purchasePrice = purchasePrices[stock['symbol']];
  const quantity = quantities[stock['symbol']];
  const gainLoss =  (stock['price'] - purchasePrice) * quantity;
  const roi = (stock['price']/purchasePrice - 1) * 100;
  
  // Create separate elements for each piece of info
  const symbolP = document.createElement('p');
  symbolP.id = "symbolInfo";
  symbolP.style.fontWeight = "600";
  symbolP.textContent = `${stock['symbol']}`;
  
  const priceP = document.createElement('p');
  priceP.id = "priceInfo";
  priceP.style.fontStyle = "oblique";
  priceP.textContent = `$${stock['price'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  
  const percentChgP = document.createElement('p');
  percentChgP.id = "changeInfo";
  percentChgP.style.fontStyle = "oblique";
  percentChgP.textContent = `${percentChg(stock['changesPercentage'])}`;
  
  if (stock['changesPercentage'] < 0) {
    priceP.style.color = "red";
    percentChgP.style.color = 'red';
  } 
  
  const gainLossP = document.createElement('p');
  gainLossP.id = "gainLossInfo";
  gainLossP.textContent = `$${gainLoss.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  
  const roiP = document.createElement('p');
  roiP.id = "roiInfo";
  roiP.textContent = `${percentChg(roi)}`;
  if (roi < 0) {
    gainLossP.style.color = "red";
    roiP.style.color = 'red';
  } 
  
  //delete button
  const deleteTile = document.createElement('button');
  deleteTile.textContent = '-';
  deleteTile.addEventListener('click', function() {
  const index = tickerArr.indexOf(stock['symbol']);
    if (index !== -1) {
      tickerArr.splice(index, 1);
      delete purchasePrices[stock['symbol']];
      delete quantities[stock['symbol']];
    }
    tileDiv.removeChild(tile);
    buildChart();
    updateTotalGainLossAndROI();
    
    
  });
  // append 
  tile.appendChild(deleteTile);
  tile.appendChild(info);
  tile.appendChild(symbolP);
  tile.appendChild(priceP);
  tile.appendChild(percentChgP);
  tile.appendChild(gainLossP);
  tile.appendChild(roiP);
  tileDiv.appendChild(tile);

  return stock['price'];
}

async function updateTotalGainLossAndROI() {
  // Calculate total gain/loss and ROI
  let totalGainLoss = 0;
  let totalWorth = 0;
  let totalInvestment = 0;
  let totalCurrentValue = 0;
  for (const symbol of Object.keys(purchasePrices)) {
    const data = await apiFetch(symbol);
    if (data && data.length > 0) {
      const currentPrice = data[0].price;
      totalWorth += currentPrice * quantities[symbol];
      totalGainLoss += (currentPrice - purchasePrices[symbol]) * quantities[symbol];
      totalInvestment += quantities[symbol] * purchasePrices[symbol];
      totalCurrentValue += quantities[symbol] * currentPrice;
    } 
  }
  // console.log ('totalGainLoss', totalGainLoss) // gets back value

  // Calculate ROI
  const totalROI = ((totalCurrentValue / totalInvestment) - 1) * 100;
  // console.log('totalROI',totalROI)

  // summary tile
  const summaryTile = document.getElementById('summaryTile');
  summaryTile.innerHTML = "";
  // console.log(summaryTile);
  // summaryTile.textContent = `Total Gain/Loss: $${totalGainLoss.toFixed(2)} Total ROI: ${totalROI.toFixed(2)}%`;
 
  const summaryTotal = document.createElement('p');
  summaryTotal.id = "summaryTotal";
  summaryTotal.style.fontWeight = "800";
  summaryTotal.style.padding = "1px";
  summaryTotal.style.fontSize = "20px"
  summaryTotal.textContent = `$${totalWorth.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  
  const summaryGl = document.createElement('p');
  summaryGl.id = "summaryGL";
  // summaryGl.style.fontWeight = "800";
  summaryGl.innerHTML = `Gain/Loss<sup>*</sup>:     $${totalGainLoss.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  
  const summaryROI = document.createElement('p');
  summaryROI.id = "summaryROI";
  summaryROI.style.marginTop = '5px';
  summaryROI.textContent = `${totalROI.toFixed(2)}%`;
  if (totalROI < 0) {
    summaryGl.style.color = "red";
    summaryROI.style.color = 'red';
  } 

  const footer = document.createElement('p');
  footer.id = 'footer';
  footer.style.fontSize = '10px';
  footer.style.fontStyle = 'italic';
  footer.innerHTML = "<sup>*</sup> not include tax and related fees"
  
  
  
  
  summaryTile.appendChild(summaryTotal);
  summaryTile.appendChild(summaryGl);
  summaryTile.appendChild(summaryROI);
  summaryTile.appendChild(footer.cloneNode(true));

}


async function onSubmitForm() {

  const tickerInput = document.getElementById('ticker');
  const purchasePriceInput = document.getElementById('purchasePrice');
  const quantityInput = document.getElementById('quantity');
  
  const ticker = document.getElementById('ticker').value;
  const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
  const quantity = parseFloat(document.getElementById('quantity').value);
  
  if (tickerArr.includes(ticker)) {
    console.log('This ticker is already added'); 
    return;
  }
  
  document.getElementById('estimatorForm').style.backgroundColor = '#e3ffa8';
  const currentPrice = await apiInput(ticker, purchasePrice, quantity);
  if (currentPrice && ticker.trim() !=='') {
    const gainLoss =  (currentPrice - purchasePrice) * quantity;
    const roi = (currentPrice/purchasePrice -1).toFixed(2)*100;

    tickerInput.value = '';
    purchasePriceInput.value = '';
    quantityInput.value = '';

    tickerArr.push(ticker)
    await printTile();  // Display the tile
    await updateTotalGainLossAndROI();

  } else {
    console.log('failed to fetch current price');
  }  
}

function printTile () {    // render all tiles
  document.getElementById('stockTiles').innerHTML = "";
  while (tileDiv.firstChild ) {
    tileDiv.removeChild(tileDiv.firstChild)
  }
  tickerArr?.forEach ((ticker) => {
    let tickerData = tickerDataCache[ticker];
    displayData(tickerData);
  });
  buildChart();
}


async function buildChart() {
  if(myChart) {
    myChart.destroy();
  }

  let tickers = tickerArr;
  let gainLosses = [];
  let labels = [];
  // const purchasePrices = JSON.parse(localStorage.getItem('purchasePrices'));
  // const quantities = JSON.parse(localStorage.getItem('quantities'));

  for (let i = 0; i < tickers.length; i++) {
    let tickerData = tickerDataCache[tickers[i]];
    if (tickerData && tickerData.length > 0) {
      let currentPrice = tickerData[0].price;
      let purchasePrice = purchasePrices[tickers[i]];
      let quantity = quantities[tickers[i]];
      let gainLoss = (currentPrice - purchasePrice) * quantity;
      labels.push(tickerData[0].symbol);
      gainLosses.push(gainLoss);
    }
  }

  const ctx = document.getElementById('myChart').getContext('2d');


  myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
      labels: labels,
      datasets: [{
        label: 'Gain/Loss in USD',
        data: gainLosses,
        barPercentage: 2,
        // barThickness: 6,
        maxBarThickness:20,
        minBarThickness:10,
        backgroundColor: 'rgba(180,255,228,1)',
        borderColor:'rgba(75,192,192,1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          grid: {
            offset: true
          }
        }
      }
    },
    // backgroundColor:'black'
  });
}


printTile();
