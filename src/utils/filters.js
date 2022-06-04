export function filtroReais(preco) {
    // recebe um float, e retorna uma string no formato de moeda convencional
    // ex: 7.954 => R$ 7,95
    return `R$ ${parseFloat(preco).toFixed(2)}`.replace('.', ',');
}
