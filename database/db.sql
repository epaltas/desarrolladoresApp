-- creando bdd
CREATE DATABASE db_desarrolladores;

--utilizando la bdd
use db_desarrolladores;

--creando tabla
CREATE TABLE desarrolladores (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,nombres_completos VARCHAR(150) NOT NULL,link_github VARCHAR(150) NOT NULL,tecnologias_conocidas VARCHAR(250) NOT NULL);
