const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3001);
app.use(express.static(path.join(__dirname, 'public')));

let server = app.listen(app.get('port'), () => {
  console.log('Postalicious_App_Clone is listening on Port ' + server.address().port);
});
