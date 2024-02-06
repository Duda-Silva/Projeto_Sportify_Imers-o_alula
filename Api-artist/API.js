// app.js

// Simula dados de uma "base de dados"
const artist = [
    {
        id: 1,
        name: "Foo Fighters",
        genre: "Rock",
        urlImg: "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15"
      },
      {
        id: 2,
        name: "Michael Jackson",
        genre: "Pop",
        urlImg: "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa"
      },
      {
        id: 3,
        name: "Emicida",
        genre: "Hip Hop",
        urlImg: "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068"
      },
      {
        id: 4,
        name: "Chitãozinho e Xororó",
        genre: "Sertanejo",
        urlImg: "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4"
      },
      {
        id: 5,
        name: "Mc Coringa",
        genre: "Funk",
        urlImg: "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56"
      },
      {
        id: 6,
        name: "Arlindo Cruz",
        genre: "Samba",
        urlImg: "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839"
      },
      {
        id: 7,
        name: "Caetano Veloso",
        genre: "MPB",
        urlImg: "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757"
      },
];

// Endpoint para obter todos os itens
function getAllItems(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(artist));
}

// Criar um servidor HTTP simples
const http = require('http');
const server = http.createServer((req, res) => {
    // Verificar o caminho da solicitação para determinar qual endpoint chamar
    if (req.url === '/api/items' && req.method === 'GET') {
        getAllItems(req, res);
    } else {
        // Endpoint não encontrado
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Iniciar o servidor na porta 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


