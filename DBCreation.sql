ALTER TABLE Посещения
	DROP CONSTRAINT FK_Посещения_Клиенты,
		CONSTRAINT FK_Посещения_Компьютеры,
		CONSTRAINT FK_Посещения_Администраторы
GO

ALTER TABLE Оказанные_услуги
	DROP CONSTRAINT FK_ОказанныеУслуги_Услуги,
		CONSTRAINT FK_ОказанныеУслуги_Посещения
GO
ALTER TABLE Компьютеры
	DROP CONSTRAINT FK_Компьютеры_Залы
GO

ALTER TABLE Клиенты
	DROP CONSTRAINT FK_Клиенты_Команды
GO

ALTER TABLE Соревнования
	DROP CONSTRAINT FK_Соревнования_Команды1,
		CONSTRAINT FK_Соревнования_Команды2,
		CONSTRAINT FK_Соревнования_Игры
GO

DROP TABLE Игры
GO

DROP TABLE Команды
GO

DROP TABLE Клиенты
GO

DROP TABLE Соревнования
GO

DROP TABLE Посещения
GO

DROP TABLE Оказанные_услуги
GO

DROP TABLE Услуги
GO

DROP TABLE Компьютеры
GO

DROP TABLE Залы
GO

DROP TABLE Администраторы
GO

CREATE TABLE Игры(
	Код INT IDENTITY PRIMARY KEY,
	Название VARCHAR(100) NOT NULL
)
GO

CREATE TABLE Администраторы(
	Код INT IDENTITY PRIMARY KEY,
	ФИО VARCHAR(70) NOT NULL,
	Адрес VARCHAR(60),
	Телефон VARCHAR(15)
)

CREATE TABLE Залы(
	Код INT IDENTITY PRIMARY KEY,
	Название VARCHAR(50) NOT NULL
)
GO

CREATE TABLE Услуги(
	Код INT IDENTITY PRIMARY KEY,
	Название VARCHAR(100) NOT NULL
)
GO

CREATE TABLE Команды(
	Код INT IDENTITY PRIMARY KEY,
	Название VARCHAR(40) NOT NULL,
	Рейтинг INT NOT NULL
)
GO

CREATE TABLE Соревнования(
	Код INT IDENTITY PRIMARY KEY,
	Код_команды1 INT NOT NULL,
	Код_команды2 INT NOT NULL,
	Номер_победителя INT,
	Дата_соревнования DATETIME NOT NULL,
	Код_игры INT NOT NULL
)
GO

CREATE TABLE Клиенты(
	Код INT IDENTITY PRIMARY KEY,
	ФИО VARCHAR(70) NOT NULL,
	Паспорт VARCHAR(20) NOT NULL,
	Код_команды INT
)
GO

CREATE TABLE Посещения(
	Код INT IDENTITY PRIMARY KEY,
	Код_клиента INT,
	Дата DATETIME NOT NULL,
	Код_компьютера INT NOT NULL,
	Код_администратора INT NOT NULL
)
GO

CREATE TABLE Компьютеры(
	Код INT IDENTITY PRIMARY KEY,
	Код_зала INT NOT NULL,
	Процессор VARCHAR(50) NOT NULL,
	Графический_адаптер VARCHAR(50) NOT NULL,
	Номер VARCHAR(20) NOT NULL UNIQUE
)
GO

CREATE TABLE Оказанные_услуги(
	Код INT IDENTITY PRIMARY KEY,
	Код_услуги INT NOT NULL,
	Стоимость MONEY NOT NULL,
	Код_посещения INT NOT NULL
)
GO

ALTER TABLE Оказанные_услуги
	ADD 
		CONSTRAINT FK_ОказанныеУслуги_Услуги
			FOREIGN KEY(Код_услуги)
			REFERENCES Услуги,
		CONSTRAINT FK_ОказанныеУслуги_Посещения
			FOREIGN KEY(Код_посещения)
			REFERENCES Посещения
	
GO

ALTER TABLE Компьютеры
	ADD CONSTRAINT FK_Компьютеры_Залы
		FOREIGN KEY(Код_зала)
		REFERENCES Залы
GO

ALTER TABLE Посещения
	ADD 
		CONSTRAINT FK_Посещения_Клиенты
			FOREIGN KEY(Код_клиента)
			REFERENCES Клиенты,
		CONSTRAINT FK_Посещения_Компьютеры
			FOREIGN KEY(Код_компьютера)
			REFERENCES Компьютеры,
		CONSTRAINT FK_Посещения_Администраторы
			FOREIGN KEY(Код_администратора)
			REFERENCES Администраторы
GO

ALTER TABLE Клиенты
	ADD CONSTRAINT FK_Клиенты_Команды
		FOREIGN KEY(Код_команды)
		REFERENCES Команды
GO

ALTER TABLE Соревнования
	ADD 
		CONSTRAINT FK_Соревнования_Команды1
			FOREIGN KEY(Код_команды1)
			REFERENCES Команды,
		CONSTRAINT FK_Соревнования_Команды2
			FOREIGN KEY(Код_команды2)
			REFERENCES Команды,
		CONSTRAINT FK_Соревнования_Игры
			FOREIGN KEY(Код_игры)
			REFERENCES Игры
GO

