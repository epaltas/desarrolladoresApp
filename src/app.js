const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const conn = require('express-myconnection');

const app = express();

// Importar rutas
const desarrolladorRoutes = require('./routes/desarrollador');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(conn(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'erika',
    port: 3306,
    database: 'db_desarrolladores'
}, 'single'))

// Routes
app.use('/', desarrolladorRoutes);

// Static
app.use(express.static(path.join(__dirname, 'public')));

// 404 handler
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
})

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}/`);
});

module.exports = app;