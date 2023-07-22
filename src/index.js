async function apiInput(symbol) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=X4P4NAYA7W5GTCBT`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const result = await response.json();
      console.log(result); // Log the whole result
      const timeSeriesData = result["Time Series (Daily)"];
      console.log(timeSeriesData); // Log the extracted time series data

      if(timeSeriesData) {
        const mostRecentTimestamp = Object.keys(timeSeriesData)[0];
        const mostRecentData = timeSeriesData[mostRecentTimestamp];

        const symbolElement = document.createElement('p');
        symbolElement.textContent = `Symbol: ${symbol}`;
        const closeElement = document.createElement('p');
        closeElement.textContent = `Latest Close Price: ${mostRecentData["4. close"]}`;

        const contentDiv = document.getElementById('content');
        if(contentDiv) {
            contentDiv.appendChild(symbolElement);
            contentDiv.appendChild(closeElement);
        } else {
            console.log(`Symbol: ${symbol}`);
            console.log(`Latest Close Price: ${mostRecentData["4. close"]}`);
        }
      } else {
        console.log('No time series data available');
      }
    }
  } catch(error) {
    console.error(error);
  }
// const response = await fetch(url);
// const result = await response.json();
// console.log(result);
}


apiInput('IBM');
