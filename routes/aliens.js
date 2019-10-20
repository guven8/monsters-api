const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM aliens ORDER BY id ASC', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.get('/:id', (request, response, next) => {
  const { id } = request.params;
  pool.query('SELECT * FROM aliens WHERE id=($1)', [id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

// router.get('/enemies', (request, response, next) => {
//   pool.query(
//     'SELECT * FROM aliens JOIN monsters ON aliens.enemy = enemy',
//     (err, res) => {
//       console.log(err);
//       if (err) return next(err);

//       response.json(res.rows);
//     }
//   );
// });

router.post('/', (request, response, next) => {
  const { name, planet, enemy } = request.body;
  pool.query(
    'INSERT INTO aliens(name, planet, enemy) VALUES($1, $2, $3)',
    [name, planet, enemy],
    (err, res) => {
      if (err) return next(err);

      response.redirect('/aliens');
    }
  );
});

router.put('/:id', (request, response, next) => {
  const { id } = request.params;
  const keys = ['name', 'planet', 'enemy'];
  const fields = [];

  keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE aliens SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.redirect('/aliens');
      }
    );
  });
});

router.delete('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('DELETE FROM aliens WHERE id=($1)', [id], (err, res) => {
    if (err) return next(err);

    response.redirect('/aliens');
  });
});

module.exports = router;
