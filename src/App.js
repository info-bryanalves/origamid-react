import React from 'react'

const App = () => {

  const products = [
    { name: 'Smart TV', price: 2599.00 },
    { name: 'Notebook', price: 3650.00 },
    { name: 'Relógio', price: 450.00 },
  ]

  return (
    <div>
      {products.filter(({ price }) => price > 500)
        .map(({ name, price }) => (
          <li key={name}>{name} - R$ {price}</li>
        ))}
    </div>
  )

}

export default App
