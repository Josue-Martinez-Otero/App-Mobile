//Aquí se inicializa el servidor (punto de arranque)
import app from './app.js';
import './db.js';

app.listen(app.get('port'),()=>console.log("Server listening on port 3000"));//Inicializa el servidor en lugar de app.js
 