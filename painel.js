import VooSeguro from './voo.js';

// Selecionando um parágrafo no HTML para avisar o usuário
let mensagemTela = document.getElementById("avisoSistema"); 

// 1. TRY: "JavaScript, TENTE fazer isso pra mim..."
try {
    console.log("Iniciando registro do voo...");
    
    // Forçando um erro intencional (Origem igual ao Destino)
    let vooRuim = new Voo("LA-777", "coritiba", "sim"); 
    
    // Se a linha acima der erro, a linha abaixo NUNCA será lida!
    mensagemTela.innerText = "Voo cadastrado com sucesso!";
    mensagemTela.style.color = "green";

} 
// 2. CATCH: "Se der erro no TRY, caia aqui, CAPTURE o erro e salve o sistema!"
catch (erro) {
    console.error("Ops, algo deu errado. A equipe de resgate foi acionada.");
    
    // Mostrando o erro na tela para o usuário (em vez de travar tudo)
    mensagemTela.innerText = erro.message; // Pega a mensagem que escrevemos lá no throw
    mensagemTela.style.color = "red";
} 
// 3. FINALLY (Opcional): Executa dando erro ou não.
finally {
    console.log("Tentativa de registro finalizada no sistema.");
}
