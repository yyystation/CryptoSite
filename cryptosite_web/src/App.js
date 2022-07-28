import React, { useState, useEffect, useRef } from 'react'
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([])
  let getData = () => {
    axios({
      url: 'http://127.0.0.1:3001/crypto',
      method: 'GET'
    }).then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getData()
    let timerId = window.setInterval(() => {
      getData()
    }, 1000 * 30)

    return () => {
      window.clearInterval(timerId)
    }
  }, [])

  return (
    <div className="App">
      <div>
        <h2>Cryptocurrency Realtime Price</h2>
      </div>
      <div className='content'>
        {data.map((value) => {
          return <div className='crypot-box'>
            <div className='inner-box'>
              <div className='crypot-name'>{value.name}</div>
              <div className='crypot-price'>${value.price}</div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
