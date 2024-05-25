import { FormEvent, useState } from 'react';
import './App.css'

import logoImg from './assets/logo.png';

/*
  Cálculo: álcool / gasolina
  E se o resultado for menor que 0.7 compensa usar o álcool.
*/

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput );
    console.log(calculo)

    if (calculo <= 0.7 ) {
      setInfo({
        title: "Compensa usar álcool!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    } else {
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    }

  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })

    return valorFormatado;
  }

  return (
    <>
      <div className='container'>
        <img src={logoImg} alt="Logo da calculadora de gasolina e etanol" />
        <h1 className='title'>Qual melhor opção?</h1>

        <form className='form' onSubmit={calcular} >
          <label htmlFor="ethanol">Álcool (preco por litro):</label>
          <input
            id='ethanol'
            className='input'
            type='number'
            placeholder='4,90'
            min="1"
            step="0.01"
            value={alcoolInput}
            onChange={ (e) => setAlcoolInput(Number(e.target.value)) }
            required
          />

          <label htmlFor="gasoline">Gasolina (preco por litro):</label>
          <input
            id='gasoline'
            className='input'
            type='number'
            placeholder='4,90'
            min="1"
            step="0.01"
            value={gasolinaInput}
            onChange={ (e) => setGasolinaInput(Number(e.target.value)) }
            required
          />

          <input
            type="submit"
            className='button'
            value="Calcular"
          />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{info?.title}</h2>

            <span>{info?.gasolina}</span>
            <span>{info?.alcool}</span>

          </section>
        )}

      </div>
      
    </>
  )
}

export default App
