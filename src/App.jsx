import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length, setLength] = useState(8)
 const [numberallowed, setNumberallowed] = useState(false)
const [charallowed, setCharallowed] = useState(false)
const [password, setPassword] = useState('')
const passwordRef=useRef(null)

const GeneratorPassword=useCallback(()=>{
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberallowed) str+='0123456789'
  if(charallowed) str+='!@#$%^&*()_+'
  for(let i=1;i<length;i++){
    pass+=str.charAt(Math.floor(Math.random()*str.length))
  }
  setPassword(pass)

},[length,numberallowed,charallowed])
const copypass=()=>{
  window.navigator.clipboard.writeText(password)  
  passwordRef.current?.select()
 // passwordRef.current?.setSelectionRange(0,9999)
}
useEffect(()=>{GeneratorPassword()},[length,numberallowed,charallowed])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
      <h1 className='text-white text-cneter my-3'>Password Generator.</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
       <input type="text" 
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='Password'
       readOnly
       ref={passwordRef}
       />
       <button onClick={copypass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
  </div> 
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>setLength(e.target.value)}
      />
      <label htmlFor='length'>Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
     <input type="checkbox" 
     name=''
     id=''
     defaultChecked={numberallowed}
     onChange={()=>{
        setNumberallowed((prev)=>!prev)
     }}/>
     <label htmlFor="number">Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
     <input type="checkbox" 
     name=''
     id=''
     defaultChecked={charallowed}
     onChange={()=>{
        setCharallowed((prev)=>!prev)
     }}/>
     <label htmlFor="character">character</label>
    </div>


    </div>     
</div>
    </>
  )}


export default App
