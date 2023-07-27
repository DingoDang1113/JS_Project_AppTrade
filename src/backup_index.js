let tikerArr = [];
let purchasePrices = {};
let quanties = {};
let myChart;

async function apiFetch(symbol) {
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=9d63fd6e1909cca85846e3cc209c9304`;

  const storedData = localStorage.getItem(`${symbol}`);
  if (storedData) {
    return JSON.parse(storedData);
  }


  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(JSON.stringify(response));
    localStorage.setItem(`${symbol}`, JSON.stringify(result));
    // console.log(result)
    return result;    
      } catch(error) {
        console.error(error);
        return null;
      }
    }

async function apiInput(symbol, purchasePrice, quantity) {
  const data = await apiFetch(symbol); 
  if (data.length > 0) {
    //displayData(data);
    //console.log(data)
    purchasePrices[symbol] = purchasePrice;
    quanties[symbol] = quantity;
    localStorage.setItem('purchasePrices', JSON.stringify(purchasePrices));
    localStorage.setItem('quantities', JSON.stringify(quanties))

    return parseFloat(data[0].price);
  } 
}
  


function displayData(data) { 
  const contentDiv = document.getElementById('content');
  //const searchBox = document.getElementById('searchBox');
  
  // data.forEach((stock) => {
    const stock = data[0];
    const symbol = document.createElement('span'); 
    const tile = document.createElement('div');
    tile.style.border = '1px solid white';
    tile.style.margin = '10px';
    tile.style.padding ='1px';
    // tile.style.width = '100px';

    const info = document.createElement('span');

    const percentChg = function (percent) {
      if (percent > 0) {
        return `⬆${percent.toFixed(2)}%`
      } else {
        return `⬇${percent.toFixed(2)}%`
      }
    }

    if (stock['changesPercentage'] < 0) {
      info.style.color = 'red';
    } 
    
    info.textContent = `${stock['symbol']} $${stock['price'].toFixed(2)} ${percentChg(stock['changesPercentage'])}`;

    //delete button
    const deleteTile = document.createElement('button');
    deleteTile.textContent = 'DELETE';
    deleteTile.addEventListener('click', function() {
      const index = tikerArr.indexOf(stock['symbol']);
      if (index !== -1) {
        tikerArr.splice(index, 1);
        delete purchasePrices[stock['symbol']];
        delete quanties[stock['symbol']];
      }
      contentDiv.removeChild(tile);

    });

    deleteTile.style.backgroundColor = "red";
    deleteTile.style.color ="white";
    deleteTile.style.border = '1px solid white'

    tile.appendChild(deleteTile);
    tile.appendChild(info);
    contentDiv.appendChild(tile);
    contentDiv.appendChild(price);
    return stock['price'];
  // });
}


function postLocalData(key) {
  let retrieveData = localStorage.getItem(key);
  if (retrieveData) {
    let locData = JSON.parse(retrieveData);
    displayData(locData);
  }
  
}

async function onSubmitForm() {
  //event.preventDefault();
  const ticker = document.getElementById('ticker').value;
  const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
  const quantity = parseFloat(document.getElementById('quantity').value);
  document.getElementById('estimatorForm').style.backgroundColor = '#e3ffa8';


  const currentPrice = await apiInput(ticker, purchasePrice, quantity);
  // console.log(currentPrice);
  if (currentPrice) {
    const gainLoss =  (currentPrice - purchasePrice) * quantity;
    const roi = (currentPrice/purchasePrice -1).toFixed(2)*100

    const infoDiv = document.createElement('div');

    infoDiv.innerHTML = `
      <p>${ticker}</p>
      <p>$${currentPrice.toFixed(2)}</p>
      <p>$${purchasePrice.toFixed(2)}</p>  
      <p>$${gainLoss.toFixed(2)}</p>
      <p>${roi.toFixed(2)}%</p>
      
    `;

    tikerArr.push(ticker)    // array = ['JPM, price, quantity','APPL','PE']
    // console.log('push to arr',tikerArr); //works
    // localStorage.setItem(`${symbol}`, JSON.stringify(result));
    //Write a method for each item -> builds an array the trader the trader is watching -> iterate thru the array from local storage -> pass the info to card
    await buildChart();
    updateTotalGainLossAndROI();
    document.getElementById('content').appendChild(infoDiv);

  } else {
    console.log('failed to fetech current price');
  }  
}

function printTile () {    // render all tiles
  //loop thru the tikerArr 
  // let locTickers = JSON.parse(localStorage.getItem('tickers'));
    document.getElementById('content').innerHTML = "";
    // pass tiker into postLocData()
   
    tikerArr.forEach ((ticker) => {
      let tickerData = JSON.parse(localStorage.getItem(ticker));
      displayData(tickerData);
    })

}





async function buildChart() {
  let tickers = tikerArr;
  // console.log('tickers ',tickers) // WORKS
  let gainLosses = [];
  let labels = [];
  const purchasePrices = JSON.parse(localStorage.getItem('purchasePrices'));
  const quanties = JSON.parse(localStorage.getItem('quantities'));
  // console.log(purchasePrices)  //works

  for (let i = 0; i < tickers.length; i++) {
    let tickerData = JSON.parse(localStorage.getItem(tickers[i]));
    // console.log('tickerData: ',tickerData) //WORKS
    if (tickerData && tickerData.length > 0) {
      let currentPrice = tickerData[0].price;
      // console.log('currentPrice: ', currentPrice); //works
      let purchasePrice = purchasePrices[tickers[i]];
      // console.log('purchasePrice: ', purchasePrice);//works
      let quantity = quanties[tickers[i]];
      // console.log('quantity: ', quantity);//WORKS
      let gainLoss = (currentPrice - purchasePrice) * quantity;
      // console.log('gain/loss: ', gainLoss);//WORKS
      labels.push(tickerData[0].symbol);
      gainLosses.push(gainLoss);
    }
      console.log(labels)
      // console.log(gainLosses) //=> works
  }

  if(myChart) {
    myChart.destroy();
  }

  const ctx = document.getElementById('myChart').getContext('2d');

  myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
      labels: labels,
      datasets: [{
        label: 'Gain/Loss in USD',
        data: gainLosses,
        backgroundColor: 'rgba(161,143,241,150)',
        borderColor:'rgba(75,192,192,1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
    backgroundColor:'white'
  });
}


// console.log('tickers before building chart: ', tikerArr);
printTile();
buildChart();


