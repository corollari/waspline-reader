
<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/corollari/waspline-reader/master/chromeWebStore/wasp.png" width="200"></a>
  <br>
  WaspLine Reader
  <br>
</h1>

<h4 align="center">FOSS version of <a href="http://www.beelinereader.com/" target="_blank">BeeLine Reader</a>, a chrome extension that uses color-gradients to help with reading</h4>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#build">Build</a> •
  <a href="#credits">Credits</a> •
  <a href="#to-do">TO-DO</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/corollari/waspline-reader/master/chromeWebStore/screenshot.png)

## Install
The extension can be installed through [Chrome's Web Store](https://chrome.google.com/webstore/detail/waspline-reader/ndlnnojbbcbdpkccfmcgbopalpbmhbhm)

## Build
```bash
git clone https://github.com/corollari/waspline-reader.git
cd waspline-reader
bash build.sh
```

## Credits
The following external resources have been included as part of the project:
- A [slightly modified version](https://github.com/corollari/js-line-wrap-detector) of [jsLineWrapDetector](https://github.com/xdamman/js-line-wrap-detector) is used to separate the text in lines
- The [wasp icon](https://icons8.com/icon/6558/wasp) used in the extension comes from Icons8's Free License icon collection

## TO-DO
- [ ] Integrate Readability into the extension so the color gradients are only applied to the main text

## License
The Unlicense
