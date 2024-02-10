import { useState } from 'react'
import bg from './assets/bg.webp'

const quantity = [
  {
    sets: 1,
    text: '+10% Off',
    otp: 37,
    sns: '33.30'
  },
  {
    sets: 2,
    text: 'Free Shipping! +14% Off',
    otp: 69,
    sns: '64.17' 
  },
  {
    sets: 3,
    text: 'Free Shipping! +15% Off',
    otp: 102,
    sns: '94.68' 
  },
  {
    sets: 6,
    text: 'Free Shipping! +17% Off',
    otp: 199,
    sns: '185.07'
  }
];

function App() {

  const [qidx, setQidx] = useState(0)
  const [otp, setOtp] = useState(false)

  return (
    <>
      <div className='w-full min-h-screen bg-orange-100 flex items-center'>
        <div className='w-1/2'>
          <img src={bg} alt='left hero' className='w-full h-screen object-cover'/>
        </div>
        <div className='w-1/2 p-24 flex flex-col items-center'>
          <h1 className='font-semibold text-4xl m-4'>“Drizzle” & “Sizzle”<br/><span className='underline'>Extra Virgin Olive Oil</span></h1>
          <div className='flex flex-col w-full border-2 rounded-md border-black bg-white p-4'>
            <p>Quantity</p>
            <div className='m-2 w-full flex justify-between'>
              {quantity.map((q, i) => (
                <div key={i} className={`w-[20%] p-2 border-2 border-black rounded-lg flex flex-col items-center cursor-pointer ${qidx == i ? 'bg-green-300' : ''}`} onClick={() => setQidx(i)}>
                  <p>{q.sets}</p>
                  <p>Sets</p>
                  <p className='text-sm text-gray-400 text-center'>{q.text}</p>
                </div>
              ))}
            </div>
            <div className='flex w-full justify-between border-t-2 border-t-dashed p-2'><p>One Time Purchase</p><p>${quantity[qidx].otp}</p></div>
            <div className='flex w-full justify-between border-t-2 border-t-dashed p-2'><p>Subscribe & Save</p><p>${quantity[qidx].sns}</p></div>
            <button className='rounded-lg bg-amber-200 p-2'>Subscribe - ${quantity[qidx].sns}</button>
            <p className='text-center text-gray-400'>Skip or cancel anytime</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
