import { useState } from 'react'

const Data = [
  {
    number: '1879654231',
    name: 'aman'
  },
  {
    number: '4789652310',
    name: 'aayush'
  },
  {
    number: '6598745250',
    name: 'aasha'
  }
]
export default function Home() {
  const [input, setInput] = useState('');
  const [customerData, setData] = useState(Data);

  const checkHandler = (input) => {
    const filteredData = Data.filter((data) => { return data.number === input });
    // const filteredData = Data.filter((data) => { return data.number.includes(input) });
    setData(filteredData);
  }
  return (
    <>
      <div>
        <input type="text" onChange={(e) => { setInput(e.target.value) }} />
        <button onClick={() => checkHandler(input)}>Check</button>
      </div>
      <div>
        <div>
          <h2>Cusomer List</h2>
          {customerData.map((data) => {
            return (<p>
              {data.name} :
              {data.number}
            </p>)
          })}

        </div>
      </div>
    </>
  )
}
