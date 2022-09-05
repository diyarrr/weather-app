/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst input = document.getElementById(\"place\");\r\nconst search = document.querySelector(\"span\");\r\n\r\n// To get the specific url, I will combine the api key and cityname\r\n\r\nlet key = \"604d1a8210fda7da28563a0d092e553c\";\r\n\r\nlet cityName = \"izmir\";\r\n\r\n\r\ngettingData(cityName).then(function(data) {\r\n    manipulateHtml(data);\r\n})\r\n\r\n// In case search icon clicked\r\n\r\nsearch.addEventListener(\"click\", () => {\r\n\r\n    cityName = input.value;\r\n\r\n    gettingData(cityName).then(function(data) {\r\n        manipulateHtml(data);\r\n        \r\n    })\r\n    input.value = \"\";\r\n\r\n})\r\n\r\n// In case user type \"enter\"\r\n\r\nwindow.addEventListener(\"keydown\", (e) => {\r\n    if(e.key == \"Enter\") {\r\n        cityName = input.value;\r\n        gettingData(cityName).then(function(data) {\r\n            manipulateHtml(data);\r\n            \r\n        });\r\n        input.value = \"\";\r\n\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\nasync function gettingData(cityName) {\r\n\r\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\" + cityName + \"&appid=\" + key;\r\n\r\n    try {\r\n        const response = await fetch(url, {mode: \"cors\"});\r\n        if(!response.ok) {\r\n            throw new Error(\"City \" + cityName +  \" not found\");\r\n        }\r\n        const weatherData = await response.json();\r\n        return weatherData;\r\n\r\n    } catch(err) {\r\n        alert(err);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n// Altering the hmtl info with the chosen city weather info\r\n\r\nfunction manipulateHtml(data) {\r\n    const city = document.getElementById(\"city\");\r\n    const condition = document.getElementById(\"condition\");\r\n    const temperature = document.getElementById(\"temperature\");\r\n    const feelsLike = document.getElementById(\"feels-like\");\r\n    const humidity = document.getElementById(\"humidity\");\r\n    const wind = document.getElementById(\"wind\");\r\n\r\n\r\n    city.textContent = data.name;\r\n    condition.textContent = data.weather[0].description;\r\n    temperature.textContent = convertKelToCel(data.main.temp) + \" °C\";\r\n    let fL = convertKelToCel(data.main.feels_like);\r\n    feelsLike.textContent = \"Feels like: \" + fL + \" °C\";\r\n    humidity.textContent = \"Humidity: \" +data.main.humidity + \" %\";\r\n    wind.textContent = \"Wind: \" + data.wind.speed + \" km\\\\h\";\r\n\r\n}\r\n\r\n\r\n// Converting given Kelvin temperature to Celcius\r\n\r\nfunction convertKelToCel(temperature) {\r\n    return parseFloat(temperature - 273.15).toFixed(2);\r\n\r\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;