import { createServer } from 'miragejs'

export function MockAPI() {
  createServer({
    routes() {
      this.get('/api/coffeelist', () => [
        {
          id: '1',
          imgLink: 'https://i.ibb.co/n86VmLD/Coffee.png',
          name: 'Expresso Tradicional',
          description:
            'O tradicional café feito com água quente e grãos moídos',
          types: ['tradicional'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '2',
          imgLink: 'https://i.ibb.co/WWJq9X1/Image.png',
          name: 'Expresso Americano',
          description: 'Expresso diluído, menos intenso que o tradicional',
          types: ['tradicional'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '3',
          imgLink: 'https://i.ibb.co/sy9CH5W/Image-1.png',
          name: 'Expresso Cremoso',
          description: 'Café expresso tradicional com espuma cremosa',
          types: ['tradicional'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '4',
          imgLink: 'https://i.ibb.co/7VXTytc/Coffee-9.png',
          name: 'Expresso Gelado',
          description: 'Bebida preparada com café expresso e cubos de gelo',
          types: ['tradicional', 'gelado'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '5',
          imgLink: 'https://i.ibb.co/pxbXcnr/Coffee-1.png',
          name: 'Café com Leite',
          description:
            'Meio a meio de expresso tradicional com leite vaporizado',
          types: ['tradicional', 'com leite'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '6',
          imgLink: 'https://i.ibb.co/2jHkzkm/Coffee-4.png',
          name: 'Latte',
          description:
            'Uma dose de café expresso com o dobro de leite e espuma cremosa',
          types: ['tradicional', 'com leite'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '7',
          imgLink: 'https://i.ibb.co/F8SBWD1/Coffee-7.png',
          name: 'Capuccino',
          description:
            'Bebida com canela feita de doses iguais de café, leite e espuma',
          types: ['tradicional', 'com leite'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '8',
          imgLink: 'https://i.ibb.co/J297dXc/Coffee-10.png',
          name: 'Macchiato',
          description:
            'Café expresso misturado com um pouco de leite quente e espuma',
          types: ['tradicional', 'com leite'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '9',
          imgLink: 'https://i.ibb.co/52sKQw3/Coffee-2.png',
          name: 'Mocaccino',
          description:
            'Café expresso com calda de chocolate, pouco leite e espuma',
          types: ['tradicional', 'com leite'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '10',
          imgLink: 'https://i.ibb.co/r73nmRc/Coffee-5.png',
          name: 'Chocolate Quente',
          description:
            'Bebida feita com chocolate dissolvido no leite quente e café',
          types: ['especial', 'com leite'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '11',
          imgLink: 'https://i.ibb.co/Vpcq0j5/Coffee-8.png',
          name: 'Cubano',
          description:
            'Drink gelado de café expresso com rum, creme de leite e hortelã',
          types: ['especial', 'alcoólico', 'gelado'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '12',
          imgLink: 'https://i.ibb.co/KNzMwwq/Coffee-11.png',
          name: 'Havaiano',
          description: 'Bebida adocicada preparada com café e leite de coco',
          types: ['especial'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '13',
          imgLink: 'https://i.ibb.co/BBTJpjV/Coffee-3.png',
          name: 'Árabe',
          description: 'Bebida preparada com grãos de café árabe e especiarias',
          types: ['especial'],
          price: 9.9,
          quantity: 1,
        },
        {
          id: '14',
          imgLink: 'https://i.ibb.co/D8K3BD7/Coffee-6.png',
          name: 'Irlândes',
          description:
            'Bebida a base de café, uísque irlandês, açúcar e chantilly',
          types: ['especial', 'alcoólico'],
          price: 9.9,
          quantity: 1,
        },
      ])
    },
  })
}
