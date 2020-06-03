const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM desarrolladores', (err, desarrolladores) => {
            if (err) {
                res.json(err);
            }
            res.render('desarrolladores', {
                data: desarrolladores
            });
        });
    });
};

controller.new = (req, res) => {
    res.render('nuevoDesarrollador')
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
 
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO desarrolladores set ?', data, (err, customer) => {
            console.log(customer)
            res.redirect('/');
        })
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;
    console.log(res)
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM desarrolladores WHERE id = ?", [id], (err, rows) => {
            res.render('editarDesarrollador', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const nuevoDesarrollador = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE desarrolladores set ? where id = ?', [nuevoDesarrollador, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM desarrolladores WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
}

module.exports = controller;