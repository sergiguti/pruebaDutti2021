// const port = 3000;
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const express = require('express');
//
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
//
// const jwtSecret = 'massimodutti_secret_key';
//
// app.post('/api/authenticate', (req, res) => {
//   if (req.body) {
//     let user = req.body;
//     console.log(user)
//     if (checkUser(req.body.userName, req.body.password)) {
//       let token = jwt.sign(user, jwtSecret);
//       res.status(200).send({
//         signed_user: user,
//         token: token
//       });
//     } else {
//       res.status(403).send({
//         errorMessage: 'Requiere autentificación'
//       });
//     }
//   } else {
//     res.status(403).send({
//       errorMessage: 'Por favor, introduzca nombre de usuario y contraseña'
//     });
//   }
// });
//
// app.get('/api/authenticate/used', (req, res) => {
//   res.send(checkUsedUser(req.body.username, req.body.email));
// });
//
// function checkUser(userName, password) {
//   const users = JSON.parse(localStorage.getItem('users'));
//   if (users != null) {
//     return users.find(user => user.userName === userName && user.password === password) != null
//   }
//   return false;
// }
//
// app.listen(port, () => console.log('AuthServer started on port 3000'));
