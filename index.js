const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = 'requisicoes.txt';

// Função para salvar no arquivo
function salvarRequisicao(requisicao) {
    fs.appendFile(FILE_PATH, JSON.stringify(requisicao) + '\n', (err) => {
        if (err) console.error('Erro ao salvar:', err);
    });
}

// Rota para adicionar requisição
app.post('/add-requisicao', (req, res) => {
    const requisicao = req.body;
    salvarRequisicao(requisicao);
    res.json({ message: 'Requisição salva com sucesso!' });
});
//exportar para txt
function exportarParaTxt() {
    if (requisicoes.length === 0) {
        alert("Nenhuma requisição para exportar!");
        return;
    }

    let texto = "📋 Requisições Registradas:\n\n";
    requisicoes.forEach(req => {
        texto += `📝 N° Req: ${req.nome}\n`;
        texto += `📌 Descrição: ${req.descricao}\n`;
        texto += `⚡ Prioridade: ${req.prioridade}\n`;
        texto += `🏷️ Status: ${req.status}\n`;
        texto += "---------------------------\n";
    });

    // Criar um Blob com o texto
    const blob = new Blob([texto], { type: "text/plain" });

    // Criar um link temporário para baixar o arquivo
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "requisicoes.txt";

    // Adicionar ao corpo, simular clique e remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



// Iniciar servidor
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));