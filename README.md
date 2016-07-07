# ToastyJS

The infamous Mortal Kombat **Toasty!** popup, right in your browser.

## Usage
Just include the script in your browser and call the `toasty()` function.

There's a couple of different ways to use it:

#### Simple Usage
```
// No options.
// Looks for toasty.mp3 and toasty.gif in your current path
// and shows the toasty straight away
toasty();
```

#### Custom options
```
// Specify options
// Use whatever image & audio you want,
toasty({
  imagePath: 'something.com/image.gif', // transparent backgrounds look best
  audioPath: 'something.com/audio.mp3', // mp3 gives you best cross-browser support
  transitionTime: 90, // time for the slide-in-out animation
  showTime: 800, // time to display the image
});
```

#### Preloading
You can preload your image and audio so you don't have to wait for them when you make the call. `toasty()` always returns a Promise that resolves to a function that makes toast, but if you specify `preload: true` then it won't call that function until you ask it to. Like:
```
var promise = toasty({
  preload: true,
});
promise.then(function (toast) {
  toast(); // call
});
```


## Installation, Build
You can just drop `dist/toasty.js` straight into a script tag in your browser, but you can also build it as a module or hack on it yourself:
```
npm install
npm run build
```


## Notes
Probably not very cross-browser compatible. Feel free to open a pull request and contribute.
