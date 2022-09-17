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
          types: {
            tradicional: true,
          },
          price: 9.9,
        },
        {
          id: '2',
          imgLink: 'https://i.ibb.co/WWJq9X1/Image.png',
          name: 'Expresso Americano',
          description: 'Expresso diluído, menos intenso que o tradicional',
          types: {
            tradicional: true,
          },
          price: 9.9,
        },
      ])
    },
  })
}
