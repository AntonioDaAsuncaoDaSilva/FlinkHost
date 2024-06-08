import express from 'express';
import path from 'path';
import routes from './routes.js';

// Instância da importação
const app = express();

// Permitido que o express leia os dados em JSON
app.use(express.json());

// Configurar o EJS como mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views/htmls'));

// Usar rotas
app.use(routes);

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(path.resolve(), 'views/htmls') });
});

export default app;
