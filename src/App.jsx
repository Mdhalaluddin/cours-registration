import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import CourseName from './Components/Course/CourseName'

function App() {
  const [courseName, setCourseName] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const handleSelectBtn = card => {
    const isExist = courseName.find((item)=> item.id === card.id);
    let sum = card.credit;
    if(isExist){
      return alert ('already created this course')
    }
    else{
      const newCourseName = [...courseName, card];
      setCourseName(newCourseName)
    }
    courseName.forEach((item)=>{
      sum = sum + item.credit;
    });
    const totalRemaining = 20 - credit;
    courseName(sum);
    setRemaining(totalRemaining);
    setCourseName([...setCourseName, card]);
    
  }
  return (
    <>
      <h2 className='text-4xl font-bold text-center mb-8'>Course Registration</h2>
      <div className='lg:flex md:flex'>
        <div className='w-4/5 gap-2'>
          <Cards handleSelectBtn={handleSelectBtn}></Cards>
        </div>
        <div className='w-1/4'>
          <CourseName courseName={courseName} remaining={remaining}></CourseName>
        </div>
      </div>
    </>
  )
}

export default App
