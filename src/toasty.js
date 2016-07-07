/**
 * toasty.js
 */

function toasty(opts) {

  const defaults = {
    imagePath: 'toasty.gif',
    audioPath: 'toasty.mp3',
    transitionTime: 90,
    showTime: 800,
    preload: false,
  };

  const options = Object.assign(defaults, opts);

  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.bottom = 0;
  wrapper.style.right = 0;
  wrapper.style.zIndex = 9999999999;

  const img = document.createElement('img');
  img.style.position = 'relative';
  img.style.transition = 'all ' + options.transitionTime + 'ms linear';
  img.style.left = '100%';
  img.style.top = '3px';

  const audio = document.createElement('audio');
  wrapper.appendChild(audio);

  const imageLoader = new Promise(function(resolve, reject){
    img.addEventListener('load', resolve);
    img.addEventListener('error', reject);
    img.src = options.imagePath;
  });

  const audioLoader = new Promise(function(resolve, reject){
    audio.addEventListener('canplay', resolve);
    audio.addEventListener('error', reject);
    audio.src = options.audioPath;
  });

  const makeToast = () => {
    document.body.appendChild(wrapper);
    requestAnimationFrame(() => {
      wrapper.appendChild(img);
      requestAnimationFrame(() => {
        img.style.left = '0';
        audio.play();
        setTimeout(() => {
          img.style.left = '100%';
          setTimeout(() => {
            document.body.removeChild(wrapper);
          }, options.transitionTime * 2);
        }, options.showTime);
      });
    });
  }

  return Promise.all([imageLoader, audioLoader]).then(() => {
    // if you didn't specify preload, makeToast() now
    if (!options.preload) {
      makeToast();
    }
    return makeToast;
  })

}

module.exports = toasty;
