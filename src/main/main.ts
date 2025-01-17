import { BrowserWindow, app, ipcMain } from 'electron'

import { join } from 'path'

const iconPath = join(__dirname, 'static', 'vue-icon.png')

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 800,
		resizable: false,
		icon: iconPath,
		title: 'Electron Vue App',
		webPreferences: {
			preload: join(__dirname, 'preload.js'),
			nodeIntegration: false,
			contextIsolation: true,
		},
	})

	if (process.env.NODE_ENV === 'development') {
		const rendererPort = process.argv[2]
		mainWindow.loadURL(`http://localhost:${rendererPort}`)
	} else {
		mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'))
	}
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('message', (event, message) => {
	console.log(message)
})
