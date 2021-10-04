const path = require('path')

module.exports = path.dirname(require.main.filename)
// path.dirname devuelve los directorios de una ruta de archivo,
// require.main.file es esa ruta dinamica
//Crea una ruta a nuestro directorio raiz para poder servir la carpeta views