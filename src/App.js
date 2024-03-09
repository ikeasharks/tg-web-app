import React, {useState, useEffect} from 'react';
import './App.css';
const tg = window.Telegram.WebApp;



function App() {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('/api')
  //   .then(response => response.json())
  //   .then(response => setData(response.message))
  // }, [])

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      work
        <button onClick={onClose}>Закрыть</button>

    </div>
  );
}

export default App;
