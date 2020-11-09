Make a file named as .babelrc
{
	"presets": ["@babel/preset-env"],
	"plugins": ["@babel/plugin-proposal-class-properties"]
}
Install the babel dev dependencies
npm i -D @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-env babel-loader babel-polyfill babel-watch rimraf
Add scripts for the development & production mode
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev-start": "NODE_ENV=dev babel-watch ./src/index",
    "start": "npm run build && node ./dist/index",
    "build": "npm run clean && npm run babel-build",
    "babel-build": "babel -d ./dist ./src -s",
    "clean": "rimraf ./dist && mkdir dist"
}