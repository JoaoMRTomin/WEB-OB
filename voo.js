class VooSeguro {
        // 1. Declare os atributos privados ANTES do construtor usando a hashtag!
        #codigo;
        #combustivel;
        
        constructor(codigo, origem, destino) {
        // Validação de Dados (Encontro 11)
        if (origem === destino) {
            // Isso gera um ERRO VERMELHO e paralisa a criação do objeto!
            throw new Error(`Operação Negada: O voo ${codigo} não pode ter a origem igual ao destino!`);
        }
        if (codigo === "") {
            throw new Error("Erro de Segurança: Todo voo precisa de um código.");
        }
        

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
    }

        // 2. Crie o GETTER (A janelinha que só permite LER a informação)
        get lerCombustivel() {
          return `O tanque do voo ${this.#codigo} está em ${this.#combustivel}%`;
        }

        // 3. Crie o SETTER (A porta segura que permite ALTERAR, mas com regras!)
        set abastecer(quantidade) {
          if (quantidade < 0) {
            console.log("Erro de segurança: Não é possível tirar combustível!");
          } else if (this.#combustivel + quantidade > 100) {
            console.log("Erro: O tanque vai transbordar! Limite é 100%.");
          } else {
            this.#combustivel += quantidade;
            console.log(
              `Abastecimento concluído. Novo nível: ${this.#combustivel}%`,
            );
            this.atualizarPainel();
          }
        }


        // Novo método para gastar combustível com segurança
        set gastar(quantidade) {
          if (quantidade < 0) {
            console.log("Erro: Quantidade inválida!");
            return;
          }
          if (this.#combustivel - quantidade < 0) {
            console.log("Erro: Combustível insuficiente para voar!");
          } else {
            this.#combustivel -= quantidade;
            console.log(`Combustível gasto. Novo nível: ${this.#combustivel}%`);
            this.atualizarPainel();
          }
        }

        atualizarPainel() {
          document.getElementById('painelCombustivel').textContent = `Combustível: ${this.#combustivel}%`;
        }
      }

      let vooVip = new VooSeguro("VIP-001", "Curitiba", "sim");

      
      document.getElementById('btnGastar').addEventListener('click', () => {
        vooVip.gastar = 20;  
      });

      document.getElementById('btnAbastecerSeguro').addEventListener('click', () => {
        vooVip.abastecer = 10;  
      });

      
      vooVip.atualizarPainel();
      export default VooSeguro;
      