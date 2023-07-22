/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("async function apiInput(symbol) {\n  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=X4P4NAYA7W5GTCBT`;\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    } else {\n      const result = await response.json();\n      console.log(result); // Log the whole result\n      const timeSeriesData = result[\"Time Series (Daily)\"];\n      console.log(timeSeriesData); // Log the extracted time series data\n\n      if (timeSeriesData) {\n        const mostRecentTimestamp = Object.keys(timeSeriesData)[0];\n        const mostRecentData = timeSeriesData[mostRecentTimestamp];\n        const symbolElement = document.createElement('p');\n        symbolElement.textContent = `Symbol: ${symbol}`;\n        const closeElement = document.createElement('p');\n        closeElement.textContent = `Latest Close Price: ${mostRecentData[\"4. close\"]}`;\n        const contentDiv = document.getElementById('content');\n        if (contentDiv) {\n          contentDiv.appendChild(symbolElement);\n          contentDiv.appendChild(closeElement);\n        } else {\n          console.log(`Symbol: ${symbol}`);\n          console.log(`Latest Close Price: ${mostRecentData[\"4. close\"]}`);\n        }\n      } else {\n        console.log('No time series data available');\n      }\n    }\n  } catch (error) {\n    console.error(error);\n  }\n  // const response = await fetch(url);\n  // const result = await response.json();\n  // console.log(result);\n}\n\napiInput('IBM');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJhcGlJbnB1dCIsInN5bWJvbCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lU2VyaWVzRGF0YSIsIm1vc3RSZWNlbnRUaW1lc3RhbXAiLCJPYmplY3QiLCJrZXlzIiwibW9zdFJlY2VudERhdGEiLCJzeW1ib2xFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbG9zZUVsZW1lbnQiLCJjb250ZW50RGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gYXBpSW5wdXQoc3ltYm9sKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249VElNRV9TRVJJRVNfREFJTFkmc3ltYm9sPSR7c3ltYm9sfSZhcGlrZXk9WDRQNE5BWUE3VzVHVENCVGA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBMb2cgdGhlIHdob2xlIHJlc3VsdFxuICAgICAgY29uc3QgdGltZVNlcmllc0RhdGEgPSByZXN1bHRbXCJUaW1lIFNlcmllcyAoRGFpbHkpXCJdO1xuICAgICAgY29uc29sZS5sb2codGltZVNlcmllc0RhdGEpOyAvLyBMb2cgdGhlIGV4dHJhY3RlZCB0aW1lIHNlcmllcyBkYXRhXG5cbiAgICAgIGlmKHRpbWVTZXJpZXNEYXRhKSB7XG4gICAgICAgIGNvbnN0IG1vc3RSZWNlbnRUaW1lc3RhbXAgPSBPYmplY3Qua2V5cyh0aW1lU2VyaWVzRGF0YSlbMF07XG4gICAgICAgIGNvbnN0IG1vc3RSZWNlbnREYXRhID0gdGltZVNlcmllc0RhdGFbbW9zdFJlY2VudFRpbWVzdGFtcF07XG5cbiAgICAgICAgY29uc3Qgc3ltYm9sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgc3ltYm9sRWxlbWVudC50ZXh0Q29udGVudCA9IGBTeW1ib2w6ICR7c3ltYm9sfWA7XG4gICAgICAgIGNvbnN0IGNsb3NlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2xvc2VFbGVtZW50LnRleHRDb250ZW50ID0gYExhdGVzdCBDbG9zZSBQcmljZTogJHttb3N0UmVjZW50RGF0YVtcIjQuIGNsb3NlXCJdfWA7XG5cbiAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGlmKGNvbnRlbnREaXYpIHtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc3ltYm9sRWxlbWVudCk7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNsb3NlRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3ltYm9sOiAke3N5bWJvbH1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMYXRlc3QgQ2xvc2UgUHJpY2U6ICR7bW9zdFJlY2VudERhdGFbXCI0LiBjbG9zZVwiXX1gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHRpbWUgc2VyaWVzIGRhdGEgYXZhaWxhYmxlJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbi8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbi8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG59XG5cblxuYXBpSW5wdXQoJ0lCTScpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlQSxRQUFRQSxDQUFDQyxNQUFNLEVBQUU7RUFDOUIsTUFBTUMsR0FBRyxHQUFJLHVFQUFzRUQsTUFBTywwQkFBeUI7RUFFbkgsSUFBSTtJQUNGLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO01BQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFFLHVCQUFzQkgsUUFBUSxDQUFDSSxNQUFPLEVBQUMsQ0FBQztJQUMzRCxDQUFDLE1BQU07TUFDTCxNQUFNQyxNQUFNLEdBQUcsTUFBTUwsUUFBUSxDQUFDTSxJQUFJLENBQUMsQ0FBQztNQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDckIsTUFBTUksY0FBYyxHQUFHSixNQUFNLENBQUMscUJBQXFCLENBQUM7TUFDcERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFDOztNQUU3QixJQUFHQSxjQUFjLEVBQUU7UUFDakIsTUFBTUMsbUJBQW1CLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTUksY0FBYyxHQUFHSixjQUFjLENBQUNDLG1CQUFtQixDQUFDO1FBRTFELE1BQU1JLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ2pERixhQUFhLENBQUNHLFdBQVcsR0FBSSxXQUFVbkIsTUFBTyxFQUFDO1FBQy9DLE1BQU1vQixZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUNoREUsWUFBWSxDQUFDRCxXQUFXLEdBQUksdUJBQXNCSixjQUFjLENBQUMsVUFBVSxDQUFFLEVBQUM7UUFFOUUsTUFBTU0sVUFBVSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBR0QsVUFBVSxFQUFFO1VBQ1hBLFVBQVUsQ0FBQ0UsV0FBVyxDQUFDUCxhQUFhLENBQUM7VUFDckNLLFVBQVUsQ0FBQ0UsV0FBVyxDQUFDSCxZQUFZLENBQUM7UUFDeEMsQ0FBQyxNQUFNO1VBQ0hYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLFdBQVVWLE1BQU8sRUFBQyxDQUFDO1VBQ2hDUyxPQUFPLENBQUNDLEdBQUcsQ0FBRSx1QkFBc0JLLGNBQWMsQ0FBQyxVQUFVLENBQUUsRUFBQyxDQUFDO1FBQ3BFO01BQ0YsQ0FBQyxNQUFNO1FBQ0xOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDO01BQzlDO0lBQ0Y7RUFDRixDQUFDLENBQUMsT0FBTWMsS0FBSyxFQUFFO0lBQ2JmLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDdEI7RUFDRjtFQUNBO0VBQ0E7QUFDQTs7QUFHQXpCLFFBQVEsQ0FBQyxLQUFLLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;