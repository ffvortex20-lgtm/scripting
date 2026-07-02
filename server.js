// Exemplo de como adaptar o comando IG
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/instagram', async (req, res) => {
    const { url } = req.body;
    try {
        const { data } = await axios.get(`https://systemzone.store/api/V2/instagram?apikey=SUA_KEY&url=${encodeURIComponent(url)}`);
        res.json(data);
    } catch (e) {
        res.status(500).send("Erro no servidor");
    }
});

app.listen(3000, () => console.log('Servidor rodando!'));
