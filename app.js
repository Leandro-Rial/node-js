const express = require('express');
const app = express();

const port = 3000;

// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {titulo : 'titulovich'})
})

app.get('/servicios', (req, res) => {
    res.render('Servicios', {tituloServicios : 'Ostrasss'})
})


app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo : '404',
        descripcion : 'errer'
    })
})

app.listen(port, () => {
    console.log('Que te has puesto una bufanda', port)
})