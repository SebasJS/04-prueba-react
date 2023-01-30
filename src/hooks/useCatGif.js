import { useEffect, useState } from 'react'

export const useCatGif = ({ fact }) => {
  const [imagesURL, setImagesURL] = useState()

  useEffect(() => {
    if (!fact) return

    const firsWord = fact.split(' ', 1)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=s9HWTg3VW4SYqbWla0q40mXIaW8Up0JQ&q=${firsWord}&limit=1`)
      .then(res => res.json())
      .then((gif) => {
        const { url } = gif.data[0].images.downsized
        console.log(url)
        setImagesURL(url)
      })
  }, [fact])
  return { imagesURL }
}
