import React from 'react'

const ana = {
  name: 'Ana',
  age: 27,
  shopping: [
    { name: 'Notebook', price: 'R$ 2500' },
    { name: 'Geladeira', price: 'R$ 3000' },
    { name: 'Smartphone', price: 'R$ 1500' },
  ],
  status: true,
}

const bryan = {
  name: 'Bryan',
  age: 25,
  shopping: [
    { name: 'Notebook', price: 'R$ 2500' },
    { name: 'Geladeira', price: 'R$ 3000' },
    { name: 'Smartphone', price: 'R$ 1500' },
    { name: 'Guitarra', price: 'R$ 3500' },
  ],
  status: false,
};

const App = () => {
  const { name, age, shopping, status } = ana;

  const values = shopping.map(({ price }) => {
    return Number(price.replace('R$', ''))
  })

  const total = values.reduce((accumulator, currentValue) => accumulator + currentValue)

  return (
    <div style={{ fontWeight: "500" }}>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>
        Situação:{' '}
        <span style={{color: status ? 'green' : 'red',}}>
          {status ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: {total}</p>
      {total >= 10000 &&
        <p>Você está gastando demais</p>
      }
    </div>
  );
};

export default App;
