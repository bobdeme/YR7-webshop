create database webshop
default CHARACTER SET = utf8
default collate = utf8_hungarian_ci;


use webshop;


create table termek(
id bigint primary key auto_increment,
nev varchar(50) not null,
forgalmazo varchar (60),
stilus varchar (30) not null,
nyelv varchar (100) default 'angol',
korhatar tinyint,
hossz float,
ar int default 0 not null,
keszlet smallint default 0 not null
)
engine = innodb,
CHARACTER SET = utf8,
collate = utf8_hungarian_ci;


create table vasarlo(
id bigint primary key auto_increment,
nev varchar(150) not null,
szuletesnap date not null,
jelszo varchar (30) not null,
cim_varos varchar (50) not null,
cim_irsz varchar (50) not null,
cim_orszag varchar (100) not null default 'Magyarország',
cim_utca varchar (200) not null,
posta_varos varchar (50),
posta_irsz varchar (50) ,
posta_orszag varchar (100),
posta_utca varchar (200),
postaCimEgyezik tinyint default 1,
email varchar (60)


)
engine = innodb
CHARACTER SET = utf8,
collate = utf8_hungarian_ci;


create table fizetesmod(
id tinyint primary key auto_increment,
nev varchar (30) not null
)
engine = innodb,
CHARACTER SET = utf8,
collate = utf8_hungarian_ci;


create table rendeles(
id  bigint primary key auto_increment,
vasarloId bigint not null,
rendelesdatum date not null,
fizetesmod tinyint not null,
constraint fk_rendeles_fizetesmod foreign key (fizetesmod) references fizetesmod (id),
constraint fk_rendeles_vasarlo foreign key (vasarloId) references vasarlo (id)


)
engine = innodb,
CHARACTER SET = utf8,
collate = utf8_hungarian_ci;


create table rendelestetel(
rendelesId bigint not null,
termekId bigint not null,
db smallint not null,
constraint fk_rendelestetel_termek foreign key (termekId) references termek (id),
constraint fk_rendelestetel_rendeles foreign key (rendelesId) references rendeles (id)
)
engine = innodb,
CHARACTER SET = utf8,
collate = utf8_hungarian_ci;


insert into fizetesmod (nev) values
('bankkártya'),
('utánvét'),
('paypal'),
('bitcoin');


insert into termek (nev, forgalmazo , stilus, nyelv, korhatar, hossz, ar, keszlet) values 
('A kör', 'MOKEP', 'horror', 'magyar, angol', 18, 100, 2999, 5),
('Közönséges bűnözők', 'UNIVERSAL', 'akció', 'magyar, angol', 16, 112, 3999, 3),
('K-PAX: A Belső bolygó', 'INTERCOM', 'dráma, sci-fi', 'magyar, angol', 0, 80, 1999, 1),
('Szállító', 'MOKEP', 'akció', 'magyar, angol', 16, 111, 7000, 4),
('Remény rabjai', 'SONY', 'dráma', 'magyar, angol, német', 12, 160, 5999, 1),
('Macskajaj', 'Romanian Film', 'vígjáték', 'magyar, angol, román, lovári', 18, 90, 1999, 3),
('Mátrix', 'SONY', 'akció', 'magyar, angol', 16, 120, 2999, 5),
('Mátrix 2', 'SONY', 'akció', 'magyar, angol', 16, 123, 2999, 5),
('Gyűrűk ura', 'WARNER', 'kaland, fantasy', 'magyar, angol', 12, 174, 5123, 11),
('Hobbit', 'WARNER', 'kaland, fantasy', 'magyar, angol', 12, 130, 6000, 0);


insert into vasarlo (nev, szuletesnap, jelszo, cim_varos, cim_irsz, cim_orszag, cim_utca, posta_varos, posta_irsz, posta_orszag, posta_utca, postaCimEgyezik,
email) values ('Kovács Béla', '1965-05-13', 'valami', 'Budapest', '1045', 'Magyarország', 'Dárda utca 32.', null, null, null, null, 1, 'kbela@citromail.hu'),
('Császár Réka', '2003-11-23', 'd89wefjW', 'Tahitótfalu', '2022', 'Magyarország', 'Járási köz 12', null, null, null, null, 1, 'rekuci13&gamil.com'),
('Lukács Zoltán', '1975-02-28', '122wns7s21s', 'Budapest', '1145', 'Magyarország', 'Drávai tér 2.', null, null, null, null, 1, 'lukizoli@ymail.com'),
('Romhányi Dávid', '1986-03-31', 'sdfsdf34', 'London', 'WV-1958 CU', 'Nagy Britannia', 'Downing street 10', 'Budapest', '1223', 'Magyarország', 'Fő utca 12.', 0, 'david_romhanyi@gmail.com'),
('Hamvas Róza', '1952-09-04', 'viragszal123', 'Budapest', '1015', 'Magyarország', 'Várhegyi utca 3.', null, null, null, null, 1, 'rozsika@freemail.hu'),
('Csenevész Imola', '1964-04-06', 'sdfsdf8h8', 'Budapest', '1220', 'Magyarország', 'Csapodás Imre utca 56.', null, null, null, null, 1, 'imcse@hotmail.com'),
('Verseny Zsolt', '1990-12-06', 'sdfsids893j', 'Budapest', '1023', 'Magyarország', 'Törökvész utca 3.', 'Budapest', '1114', 'Magyarország', 'Roham tér 2.', 0, 'vezse@citromail.hu');


insert into rendeles (vasarloId, rendelesdatum, fizetesmod ) values
(2, '2018-02-02', 1),
(5, '2018-02-05', 2),
(6, '2018-02-10', 1),
(3, '2018-02-20', 2),
(2, '2018-02-25', 1),
(1, '2018-02-25', 3),
(4, '2018-03-03', 1),
(1, '2018-04-01', 1),
(5, '2018-05-02', 1);


insert into rendelestetel values
(1, 5, 1),
(1, 3, 1),
(1, 8, 2),
(2, 7, 1),
(3, 1, 1),
(3, 5, 1),
(4, 5, 1),
(5, 4, 1),
(6, 9, 1),
(7, 4, 1),
(8, 2, 1),
(9, 5, 5);
