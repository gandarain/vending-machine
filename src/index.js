import VendingMachine from './VendingMachine.js'

const listPurchaseFoods = [
  {
    name: 'Oreo',
    value: 5
  }
]

const payment = [
  {
    name: 50000,
    value: 2
  }
]

const newStock = [
  {
    name: 'Oreo',
    stock: 5
  },
  {
    name: 'Chips',
    stock: 5
  }
]

const newVendingMachine = new VendingMachine(listPurchaseFoods, payment, newStock)
newVendingMachine.purchaseFoods()
newVendingMachine.updateStock()