import { useState } from 'react'
import List from './List'
import Update from './UpdateState'
import './App.css'
import UpdateState from './UpdateState'

function App() {
  const listData = [
    {id:1,name:"Bhargav"},
    {id:2,name:"Jatin"},
    {id:3,name:"Paras"},
    {id:4,name:"Tejas"}
  ]
  return (
      
    <>
         <div>
            <h1 className='text-2xl text-red-600'>List View</h1>
            {
              listData.map(({id,name})=>(
                <List key={id} firstName={name} />
              ))
            }
         </div>
         <div>
          <UpdateState />
         </div>
    </>
  )
}

export default App
