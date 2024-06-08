import express from 'express'

import routes from './routes.js'
//Instância da importação
const app=express()

//permitido que o express leia os dados em json
app.use(express.json())
//usar routas 
app.use(routes)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views/htmls' });
  });


export default app