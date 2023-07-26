
let tikerArr = [];
let purchasePrices = {};
let quanties = {};

async function apiFetch(symbol) {
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=f43645c7dcc9b1fe95e501b844e1c963`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(JSON.stringify(response));
    localStorage.setItem(`${symbol}`, JSON.stringify(result));
    console.log(localStorage.setItem(`${symbol}`, JSON.stringify(result)))
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
  console.log(currentPrice);
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
    // console.log(tikerArr);
    // localStorage.setItem(`${symbol}`, JSON.stringify(result));
    //Write a method for each item -> builds an array the trader the trader is watching -> iterate thru the array from local storage -> pass the info to card

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
  const tickers = tikerArr;
  let gainLosses = [];
  let labels = [];
  const purchasePrices = JSON.parse(localStorage.getItem('purchasePrices'));
  const quanties = JSON.parse(localStorage.getItem('quantities'));

  for (let i = 0; i < tickers.length; i++) {
    let tickerData = JSON.parse(localStorage.getItem(tickers[i]));
    if (tickerData && tickerData.length > 0) {
      let currentPrice = tickerData.price;
      let purchasePrice = tickerData.price;
      let quantity = quanties[tickers[i]];
      let gainLoss = (currentPrice - purchasePrice) * quantity;
      labels.push(tickerData.symbol);
      gainLosses.push(gainLoss);
    }
  }

  const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar', 
    data: {
      labels: labels,
      datasets: [{
        label: 'Gain/Loss in USD',
        data: gainLosses,
        backgroundColor: 'rgba(75,192,192,0.2)',
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
    }
  });
}



printTile();
buildChart();



//local storage can pull what I have saved 


// apiInput('AAPL');
//apiIndex()
