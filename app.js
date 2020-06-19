const {app, BrowserWindow, ipcMain} = require('electron');
const config = require('./config');
const sql = require('mssql');

const pool = new sql.ConnectionPool(config);

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL('http://localhost:3000');
});

ipcMain.on('get teams', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query('SELECT * FROM Команды')
                .then(result => {
                    mainWindow.webContents.send('return teams', {
                        teams: result.recordset
                    });
                });
        })
});

ipcMain.on('get games', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query('SELECT * FROM Игры')
                .then(result => {
                    mainWindow.webContents.send('return games', {
                        games: result.recordset
                    });
                });
        })
});

ipcMain.on('get admins', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query('SELECT * FROM Администраторы')
                .then(result => {
                    mainWindow.webContents.send('return admins', {
                        admins: result.recordset
                    });
                });
        })
});

ipcMain.on('get rooms', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query('SELECT * FROM Залы')
                .then(result => {
                    mainWindow.webContents.send('return rooms', {
                        rooms: result.recordset
                    });
                });
        })
});

ipcMain.on('get services', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query('SELECT * FROM Услуги')
                .then(result => {
                    mainWindow.webContents.send('return services', {
                        services: result.recordset
                    });
                });
        })
});

ipcMain.on('get computers', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query(`
                    SELECT Компьютеры.Код, Название, Процессор, Графический_адаптер, ОЗУ, Номер 
                    FROM Компьютеры INNER JOIN Залы ON Код_зала=Залы.Код`)
                .then(result => {
                    mainWindow.webContents.send('return computers', {
                        computers: result.recordset
                    });
                });
        })
});

ipcMain.on('get clients', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query(`
                    SELECT Клиенты.Код, ФИО, Паспорт, Название
                    FROM Клиенты INNER JOIN Команды ON Код_команды=Команды.Код`)
                .then(result => {
                    mainWindow.webContents.send('return clients', {
                        clients: result.recordset
                    });
                });
        })
});

ipcMain.on('get visits', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query(`
                    SELECT Посещения.Код, Клиенты.ФИО, Номер, Администраторы.ФИО as [Администратор]
                    FROM Посещения INNER JOIN Клиенты ON Код_клиента=Клиенты.Код
                        INNER JOIN Компьютеры ON Код_компьютера=Компьютеры.Код
                        INNER JOIN Администраторы ON Код_администратора=Администраторы.Код`)
                .then(result => {
                    mainWindow.webContents.send('return visits', {
                        visits: result.recordset
                    });
                });
        })
});

ipcMain.on('get competitions', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query(`
                    SELECT 
                        Соревнования.Код, 
                        Команда1.Название as [Команда 1], 
                        Команда2.Название as [Команда 2], 
                        Номер_победителя as Победитель, 
                        Игры.Название
                    FROM Соревнования, Команды as Команда1, Команды as Команда2, Игры
                    WHERE Команда1.Код = Соревнования.Код_команды_1 AND Команда2.Код = Соревнования.Код_команды_2
                    AND Код_игры=Игры.Код`)
                .then(result => {
                    mainWindow.webContents.send('return competitions', {
                        competitions: result.recordset
                    });
                });
        })
});

ipcMain.on('get served', (event) => {
    pool.connect()
        .then(pool => {
            return pool.request()
                .query(`
                    SELECT 
                        Оказанные_услуги.Код, 
                        Услуги.Название, 
                        Стоимость, 
                        Дата
                    FROM Оказанные_услуги INNER JOIN Посещения ON Код_посещения=Посещения.Код
                    INNER JOIN Услуги ON Код_услуги=Услуги.Код`)
                .then(result => {
                    mainWindow.webContents.send('return served', {
                        served: result.recordset
                    });
                });
        })
});



