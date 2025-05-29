class hero {
    constructor(nome, idade, tipo) {  
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = ' ';
        switch (this.tipo) {
            case 'Mago':
                ataque = 'Magia';
                break;
            case 'Guerreiro':
                ataque = 'Espada';
                break;
            case 'Monge':
                ataque = 'Artes Marciais';
                break;
            case 'Ninja':
                ataque = 'Shurikens';
                break;
            default:
                ataque = 'Ataque desconhecido'
                break; 

        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);

    }
}
let heroMago = new hero('Pedro', 25, 'Mago');
let heroGuerreiro = new hero('Pedro', 25, 'Guerreiro')
let heroMonge = new hero('Pedro', 25, 'Monge');
let heroNinja = new hero('Pedro', 25, 'Ninja');
let heroSorrateiro = new hero('Sombra', 100, 'Shadow')

heroMago.atacar()