import { useEffect, useState } from 'react'
import { getFact } from '../services/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  function refreshFact () {
    getFact().then(newFact => setFact(newFact))
  }

  useEffect(() => refreshFact(), [])

  return { fact, refreshFact }
}
