import Pizza from './models/Pizza.js'
import mongoose from 'mongoose'

class Product {
  create(type) {
    let product
    switch (type) {
      case 'Margherita':
        return (product = new Pizza({
          title: 'Margherita',
          text:
            'tomato sauce, mozzarella cheese, fresh basil, extra-virgin olive oil',
          image:
            'https://beerman.ru/upload/iblock/1a0/1a071f48f8001f099a7a174b87dc773d.jpg',
          price: 6,
        }))
        break
      case 'Julienne':
        return (product = new Pizza({
          title: 'Julienne',
          text:
            'chicken breast, mozzarella cheese, mushrooms, pepper, parsley',
          image:
            'https://beerman.ru/upload/resize_cache/iblock/ce3/579_482_2/ce3985ef907d36c7106708a94113b8a2.jpg',
          price: 6,
        }))
        break
      case 'BBQ':
        return (product = new Pizza({
          title: 'BBQ',
          text: 'chicken, bacon, tomato sauce, mozzarella, onion',
          image:
            'https://beerman.ru/upload/iblock/0da/0daf067af14501dcf6923f0364011825.jpg',
          price: 9,
        }))
        break
      case 'Pepperoni':
        return (product = new Pizza({
          title: 'Pepperoni',
          text: 'spicy pepperoni, mozzarella, tomato sauce',
          image:
            'https://beerman.ru/upload/iblock/243/24330bf4e21f1ce8d420eb4c4fd6543e.jpg',
          price: 8,
        }))
        break
      case 'Cheeses':
        return (product = new Pizza({
          title: 'Cheeses',
          text:
            'mozzarella, chillegini, blue cheese, cheddar, parmegiano, oregano sauce',
          image:
            'https://beerman.ru/upload/resize_cache/iblock/347/579_482_2/3475d120631401918188c315cb25183d.jpg',
          price: 9,
        }))
        break
      case 'TomYum':
        return (product = new Pizza({
          title: 'TomYum',
          text:
            'mozzarella, shrimps, tomato sauce, coconut milk, tom yum paste, tomato, mushrooms, chili pepper, parsley',
          image:
            'https://beerman.ru/upload/resize_cache/iblock/346/579_482_2/346617ece6146d94744aa8879ef8c1d5.jpg',
          price: 9,
        }))
        break
      case 'Diavola':
        return (product = new Pizza({
          title: 'Diavola',
          text:
            'tomato sauce, mozzarella cheese, fresh basil, extra-virgin olive oil, spicy chili pepper, spicy sausage',
          image:
            'https://beerman.ru/upload/resize_cache/iblock/65b/579_482_2/65b01c76c5fde38b16bc02a7b30cdc4c.jpg',
          price: 7,
        }))
        break
      case 'RedFish':
        return (product = new Pizza({
          title: 'Red fish',
          text:
            'salmon fish, mozzarella cheese, cream cheese, tomato sauce, arugula',
          image:
            'https://beerman.ru/upload/resize_cache/iblock/237/579_482_2/237cfe816a844ff3110c8b92136200a0.jpg',
          price: 6,
        }))
        break

      case 'ItalianWithWozzarellaAndPepperoni':
        return (product = new Pizza({
          title: 'Italian with mozzarella and pepperoni',
          text:
            'tomato sauce, vegan parmesan cheese, mushrooms, red onion, fresh pepper, eggplant, squash',
          image:
            'https://beerman.ru/upload/resize_cache/iblock/c49/579_482_2/c49f8209aed66cd620ae58c517d9bba4.jpg',
          price: 5,
        }))
        break
      case 'Hawaiian':
        return (product = new Pizza({
          title: 'Hawaiian',
          text: 'pineapple, ham, tomato sauce, mozzarella cheese',
          image:
            'https://cdn.papajohns.ru/images/catalog/thumbs/full/Hawai-traditional.jpg',
          price: 7,
        }))
        break

      default:
        return null
    }
    product.type = type
  }
}

const factory = new Product()

const margherita = factory.create('Margherita')
const julienne = factory.create('Julienne')
const bbq = factory.create('BBQ')
const pepperoni = factory.create('Pepperoni')
const tomYum = factory.create('TomYum')
const cheeses = factory.create('Cheeses')
const diavola = factory.create('Diavola')
const redFish = factory.create('RedFish')
const hawaiian = factory.create('Hawaiian')

export default async function () {
  await margherita.save()
  await julienne.save()
  await bbq.save()
  await pepperoni.save()
  await cheeses.save()
  await tomYum.save()
  await diavola.save()
  await redFish.save()
  await hawaiian.save()
}
