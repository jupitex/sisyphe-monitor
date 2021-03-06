const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
// const {
//   default: installExtension,
//   ANGULARJS_BATARANG
// } = require("electron-devtools-installer");

// installExtension(ANGULARJS_BATARANG)
//   .then(name => console.log(`Added Extension:  ${name}`))
//   .catch(err => console.log("An error occurred: ", err));
require("electron-context-menu")({
  showInspectElement: true,
  shouldShowMenu: (event, params) => params.isEditable
});
let win;
function createWindow () {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    icon: path.join(__dirname, 'public/img/icon.png')
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
