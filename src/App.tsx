import './App.css'

import logoImg from './assets/logo.png';

function App() {
  return (
    <>
      <div className='container'>
        <img src={logoImg} alt="Logo da calculadora de gasolina e etanol" />
        <h1 className='title'>Qual melhor opção?</h1>

        <form className='form'>
          <label htmlFor="ethanol">Álcool (preco por litro):</label>
          <input
            id='ethanol'
            className='input'
            type='number'
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />

          <label htmlFor="gasoline">Álcool (preco por litro):</label>
          <input
            id='gasoline'
            className='input'
            type='number'
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />

          <input type="submit" className='button' value="Calcular" />
        </form>
      </div>
      
    </>
  )
}

export default App
