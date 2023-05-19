export default class VendingMachine {
  constructor(listPurchaseFoods, payment, newStock) {
    this.listPurchaseFoods = listPurchaseFoods
    this.payment = payment
    this.newStock = newStock
  }

  foods = [
    {
      name: 'Biskuit',
      price: 6000,
      stock: 10
    },
    {
      name: 'Chips',
      price: 8000,
      stock: 10
    },
    {
      name: 'Oreo',
      price: 10000,
      stock: 10
    },
    {
      name: 'Tango',
      price: 12000,
      stock: 10
    },
    {
      name: 'Cokelat',
      price: 15000,
      stock: 10
    }
  ]

  availableMoney = [50000, 20000, 10000, 5000, 2000]

  totalPrice = 0

  totalPayment = 0

  totalChange = []

  checkStock(item, food) {
    if (item.value > food.stock) {
      throw new Error('Stock tidak cukup!')
    }
  }

  calculateTotalPrice() {
    let total = 0

    this.listPurchaseFoods.map(item => {
      this.foods.map(food => {
        this.checkStock(item, food)
        if (food.name === item.name) {
          total += food.price * item.value
          food.stock = food.stock - item.value
        }
      })
    })

    this.totalPrice = total
  }

  calculateChange() {
    let change = this.totalPayment - this.totalPrice
    
    while (change !== 0) {
      this.availableMoney.map(item => {
        if (change >= item) {
          this.totalChange.push({
            name: item,
            value: 1
          })
          change -= item
        }
      })
    }
  }

  purchaseFoods() {
    this.calculateTotalPrice()

    this.payment.map(item => {
      if (this.availableMoney.includes(item.name)) {
        this.totalPayment += item.name * item.value
      } else {
        throw new Error('Pembayaran tidak sesuai!')
      }
    })

    if (this.totalPrice > this.totalPayment) {
      throw new Error('Pembayaran gagal, masukan jumlah yang sesuai!')
    }

    this.calculateChange()

    console.log('\nPembayaran berhasil\nKembalian')
    console.log(this.totalChange)
    return this.totalChange
  }

  updateStock() {
    this.newStock.map(item => {
      this.foods.map(food => {
        if (food.name === item.name) {
          food.stock += item.stock
        }
      })
    })

    console.log('\nUpdate stock berhasil')
    console.log(this.foods)
    return this.foods
  }
}