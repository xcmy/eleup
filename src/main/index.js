'use strict'
import { autoUpdater } from 'electron-updater'
import {app, BrowserWindow, Menu} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow,logoutWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })
  mainWindow.loadURL(winURL)
  const template = [ {
    label: 'eleup',
    submenu: [
      {
        label: '检查更新',
        accelerator: '',
        click: function () {
            logoutWindow = new BrowserWindow({
                parent: mainWindow,
                height:270,
                width:350,
                resizable:false,
                fullscreenable:false,
                center:true,
                movable:false,
                minimizable:false,
                maximizable:false,
                titleBarStyle:"hidden"
            });
            logoutWindow.loadURL(`http://localhost:9080/#/version`);
        }
      }]
  }]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */
//

autoUpdater.on('update-downloaded', () => {
  console.log('检测到更新')
  autoUpdater.quitAndInstall()
})
