import './App.css'
import { useCatGif } from './hooks/useCatGif'
import { useCatFact } from './hooks/useCatFact'

// const API_KEY = 's9HWTg3VW4SYqbWla0q40mXIaW8Up0JQ'
// const GIF_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=s9HWTg3VW4SYqbWla0q40mXIaW8Up0JQ&q=${firstWord}&limit=1`

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imagesURL } = useCatGif({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Gifs App</h1>
      <button onClick={handleClick}>New Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imagesURL && <img src={imagesURL} alt={`Gif aleatorio traido de API Giphy segun la palabra ${fact}`} />}
      </section>
    </main>

  )
}
