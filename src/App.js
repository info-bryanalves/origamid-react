import React from 'react'

const App = () => {

  function handleClick(event) {
    console.log(event.target)
  }

  return (
    <div>
      <button onClick={handleClick}>Clique aqui 1</button>
      <button onClick={({target}) => console.log(target)}>Clique aqui 2</button>
    </div>
  )

}

export default App
