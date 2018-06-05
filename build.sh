cat libs/lineWrapDetector.js main.js > extension/contentScript.js

while getopts ":i" opt; do
  case $opt in
    i)
      convert chromeWebStore/wasp.png -resize 16x16 extension/icons/wasp16.png
      convert chromeWebStore/wasp.png -resize 24x24 extension/icons/wasp24.png
      convert chromeWebStore/wasp.png -resize 32x32 extension/icons/wasp32.png
      convert chromeWebStore/wasp.png -resize 48x48 extension/icons/wasp48.png
      convert chromeWebStore/wasp.png -resize 128x128 extension/icons/wasp128.png
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done

(cd extension && zip ../waspLineReader * */*)
