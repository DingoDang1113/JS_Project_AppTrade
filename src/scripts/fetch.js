
const API_KEY = "f43645c7dcc9b1fe95e501b844e1c963"

async function stockPrice(symbol) {
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;    
    } catch(error) {
      console.error(error);
      return null;
    }
}


// async function stockSearch(ticker,name) {
    //     const url = `https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
    
    //     try {
        //         const response = await fetch(url);
        //         const result = await response.json();
        //         return result;
        //     } catch (error) {
            //         console.log(error);
            //         return null;
            //     }
            // }
            
            // export default stockSearch;
            
            
export {stockPrice};