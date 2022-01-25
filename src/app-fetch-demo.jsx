import { useState, useEffect } from 'react';

import './App.css';

// https://cat-fact.herokuapp.com/facts/random

const App = () => {
    const [fact, setFact] = useState({})
    const [data, setData] = useState({})

    useEffect(() => {
      handleFetch()
    }, [])

    useEffect(() => {
      console.log('The fast has changed')
    }, [fact])

    useEffect(() => {
      console.log('Component did update')
    })

    const handleFetch = async () => {
      const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
      const data = await response.json()
      console.log(data.text)
      
      setFact(data)
    }


  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleFetch}>Run the fetch request</button>
      <button onClick={() => setData('hi')}>Add data</button>
      <p>{fact.text}</p>
    </div>
  );
}

export default App;
