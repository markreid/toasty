var toasty =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * toasty.js
	 */

	function toasty(opts) {

	  var defaults = {
	    imagePath: 'toasty.gif',
	    audioPath: 'toasty.mp3',
	    transitionTime: 90,
	    showTime: 800,
	    preload: false
	  };

	  var options = Object.assign(defaults, opts);

	  var wrapper = document.createElement('div');
	  wrapper.style.position = 'fixed';
	  wrapper.style.bottom = 0;
	  wrapper.style.right = 0;
	  wrapper.style.zIndex = 9999999999;

	  var img = document.createElement('img');
	  img.style.position = 'relative';
	  img.style.transition = 'all ' + options.transitionTime + 'ms linear';
	  img.style.left = '100%';
	  img.style.top = '3px';

	  var audio = document.createElement('audio');
	  wrapper.appendChild(audio);

	  var imageLoader = new Promise(function (resolve, reject) {
	    img.addEventListener('load', resolve);
	    img.addEventListener('error', reject);
	    img.src = options.imagePath;
	  });

	  var audioLoader = new Promise(function (resolve, reject) {
	    audio.addEventListener('canplay', resolve);
	    audio.addEventListener('error', reject);
	    audio.src = options.audioPath;
	  });

	  var makeToast = function makeToast() {
	    document.body.appendChild(wrapper);
	    requestAnimationFrame(function () {
	      wrapper.appendChild(img);
	      requestAnimationFrame(function () {
	        img.style.left = '0';
	        audio.play();
	        setTimeout(function () {
	          img.style.left = '100%';
	          setTimeout(function () {
	            document.body.removeChild(wrapper);
	          }, options.transitionTime * 2);
	        }, options.showTime);
	      });
	    });
	  };

	  return Promise.all([imageLoader, audioLoader]).then(function () {
	    // if you didn't specify preload, makeToast() now
	    if (!options.preload) {
	      makeToast();
	    }
	    return makeToast;
	  });
	}

	module.exports = toasty;

/***/ }
/******/ ]);