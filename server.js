const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor do Scripting está rodando!');
});

// Rota de Download (TikTok, YouTube, Insta)
app.get('/download', async (req, res) => {
    const { url, platform } = req.query;
    const apiKey = 'SUA_APIKEY_AQUI'; // Coloque sua chave aqui

    let apiUrl = '';
    if (platform === 'tiktok') apiUrl = `https://systemzone.store/api/tiktok/dl?url=${encodeURIComponent(url)}&apikey=${apiKey}`;
    if (platform === 'youtube') apiUrl = `https://systemzone.store/api/youtube/dl?url=${encodeURIComponent(url)}&apikey=${apiKey}`;
    
    try {
        const { data } = await axios.get(apiUrl);
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: "Erro ao baixar mídia" });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
