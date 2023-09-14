import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import CourseName from './Components/Course/CourseName'

function App() {
  const [courseName, setCourseName] = useState([]);

  const handleSelectBtn = card => {
    console.log(card)
  }
  return (
    <>
      <h2 className='text-4xl font-bold text-center mb-8'>Course Registration</h2>
      <div className='lg:flex md:flex'>
        <div className='w-4/5 gap-2'>
          <Cards handleSelectBtn={handleSelectBtn}></Cards>
        </div>
        <div className='w-1/4'>
          <CourseName></CourseName>
        </div>
      </div>
    </>
  )
}

export default App
