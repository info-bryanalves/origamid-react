import React from 'react'

const App = () => {

  const users = [
    {
      name: "Bryan Alves",
      age: "25",
    },
    {
      name: "Ana Salles",
      age: "24",
    },
    {
      name: "Giovana Salles",
      age: "15",
    },
  ]

  const path = 'https://www.origamid.com/'

  return (
    <>
      <h1>App React</h1>
      <a href={path} target="_blank">Origamid</a>
      {
        users.map(({ name, age }) => {
          return (
            <>
              <p>Nome: {name}</p>
              <p>Idade: {age}</p>
              <p>Maioridade: {age >= 18 ? 'Maior' : 'Menor'}</p>
            </>
          )
        })}
    </>
  );
};

export default App;
