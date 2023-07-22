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

eval("async function apiInput(symbol) {\n  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=`;\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    } else {\n      const result = await response.json();\n      console.log(result); // Log the whole result\n      const timeSeriesData = result[\"Time Series (Daily)\"];\n      console.log(timeSeriesData); // Log the extracted time series data\n\n      if (timeSeriesData) {\n        const mostRecentTimestamp = Object.keys(timeSeriesData)[0];\n        const mostRecentData = timeSeriesData[mostRecentTimestamp];\n        const symbolElement = document.createElement('p');\n        symbolElement.textContent = `Symbol: ${symbol}`;\n        const closeElement = document.createElement('p');\n        closeElement.textContent = `Latest Close Price: ${mostRecentData[\"4. close\"]}`;\n        const contentDiv = document.getElementById('content');\n        if (contentDiv) {\n          contentDiv.appendChild(symbolElement);\n          contentDiv.appendChild(closeElement);\n        } else {\n          console.log(`Symbol: ${symbol}`);\n          console.log(`Latest Close Price: ${mostRecentData[\"4. close\"]}`);\n        }\n      } else {\n        console.log('No time series data available');\n      }\n    }\n  } catch (error) {\n    console.error(error);\n  }\n  // const response = await fetch(url);\n  // const result = await response.json();\n  // console.log(result);\n}\n\napiInput('IBM');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJhcGlJbnB1dCIsInN5bWJvbCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lU2VyaWVzRGF0YSIsIm1vc3RSZWNlbnRUaW1lc3RhbXAiLCJPYmplY3QiLCJrZXlzIiwibW9zdFJlY2VudERhdGEiLCJzeW1ib2xFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbG9zZUVsZW1lbnQiLCJjb250ZW50RGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gYXBpSW5wdXQoc3ltYm9sKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249VElNRV9TRVJJRVNfREFJTFkmc3ltYm9sPSR7c3ltYm9sfSZhcGlrZXk9YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIExvZyB0aGUgd2hvbGUgcmVzdWx0XG4gICAgICBjb25zdCB0aW1lU2VyaWVzRGF0YSA9IHJlc3VsdFtcIlRpbWUgU2VyaWVzIChEYWlseSlcIl07XG4gICAgICBjb25zb2xlLmxvZyh0aW1lU2VyaWVzRGF0YSk7IC8vIExvZyB0aGUgZXh0cmFjdGVkIHRpbWUgc2VyaWVzIGRhdGFcblxuICAgICAgaWYodGltZVNlcmllc0RhdGEpIHtcbiAgICAgICAgY29uc3QgbW9zdFJlY2VudFRpbWVzdGFtcCA9IE9iamVjdC5rZXlzKHRpbWVTZXJpZXNEYXRhKVswXTtcbiAgICAgICAgY29uc3QgbW9zdFJlY2VudERhdGEgPSB0aW1lU2VyaWVzRGF0YVttb3N0UmVjZW50VGltZXN0YW1wXTtcblxuICAgICAgICBjb25zdCBzeW1ib2xFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzeW1ib2xFbGVtZW50LnRleHRDb250ZW50ID0gYFN5bWJvbDogJHtzeW1ib2x9YDtcbiAgICAgICAgY29uc3QgY2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjbG9zZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgTGF0ZXN0IENsb3NlIFByaWNlOiAke21vc3RSZWNlbnREYXRhW1wiNC4gY2xvc2VcIl19YDtcblxuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgaWYoY29udGVudERpdikge1xuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzeW1ib2xFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTeW1ib2w6ICR7c3ltYm9sfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYExhdGVzdCBDbG9zZSBQcmljZTogJHttb3N0UmVjZW50RGF0YVtcIjQuIGNsb3NlXCJdfWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gdGltZSBzZXJpZXMgZGF0YSBhdmFpbGFibGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxuLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbn1cblxuXG5hcGlJbnB1dCgnSUJNJyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLGVBQWVBLFFBQVFBLENBQUNDLE1BQU0sRUFBRTtFQUM5QixNQUFNQyxHQUFHLEdBQUksdUVBQXNFRCxNQUFPLFVBQVM7RUFFbkcsSUFBSTtJQUNGLE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO01BQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFFLHVCQUFzQkgsUUFBUSxDQUFDSSxNQUFPLEVBQUMsQ0FBQztJQUMzRCxDQUFDLE1BQU07TUFDTCxNQUFNQyxNQUFNLEdBQUcsTUFBTUwsUUFBUSxDQUFDTSxJQUFJLENBQUMsQ0FBQztNQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDckIsTUFBTUksY0FBYyxHQUFHSixNQUFNLENBQUMscUJBQXFCLENBQUM7TUFDcERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFDOztNQUU3QixJQUFHQSxjQUFjLEVBQUU7UUFDakIsTUFBTUMsbUJBQW1CLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTUksY0FBYyxHQUFHSixjQUFjLENBQUNDLG1CQUFtQixDQUFDO1FBRTFELE1BQU1JLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ2pERixhQUFhLENBQUNHLFdBQVcsR0FBSSxXQUFVbkIsTUFBTyxFQUFDO1FBQy9DLE1BQU1vQixZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUNoREUsWUFBWSxDQUFDRCxXQUFXLEdBQUksdUJBQXNCSixjQUFjLENBQUMsVUFBVSxDQUFFLEVBQUM7UUFFOUUsTUFBTU0sVUFBVSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBR0QsVUFBVSxFQUFFO1VBQ1hBLFVBQVUsQ0FBQ0UsV0FBVyxDQUFDUCxhQUFhLENBQUM7VUFDckNLLFVBQVUsQ0FBQ0UsV0FBVyxDQUFDSCxZQUFZLENBQUM7UUFDeEMsQ0FBQyxNQUFNO1VBQ0hYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLFdBQVVWLE1BQU8sRUFBQyxDQUFDO1VBQ2hDUyxPQUFPLENBQUNDLEdBQUcsQ0FBRSx1QkFBc0JLLGNBQWMsQ0FBQyxVQUFVLENBQUUsRUFBQyxDQUFDO1FBQ3BFO01BQ0YsQ0FBQyxNQUFNO1FBQ0xOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDO01BQzlDO0lBQ0Y7RUFDRixDQUFDLENBQUMsT0FBTWMsS0FBSyxFQUFFO0lBQ2JmLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDdEI7RUFDRjtFQUNBO0VBQ0E7QUFDQTs7QUFHQXpCLFFBQVEsQ0FBQyxLQUFLLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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