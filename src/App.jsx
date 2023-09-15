import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import CourseName from './Components/Course/CourseName'

function App() {
  const [courseName, setCourseName] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSelectBtn = card => {
    const isExist = courseName.find((item) => item.id === card.id);
    let count = card.credit;
    if (isExist) {
      alert('already created this course')
    }
    else {
      courseName.forEach((card) => {
        count += card.credit;
      });
      const totalRemaining = 20 - count;

      if (count > 20) {
        return alert('kus garib aci babo');
      } else {
        setTotal(count);
        setRemaining(totalRemaining);
        setCourseName([...courseName, card]);
      }
    }
  }
  return (
    <>
      <h2 className='text-4xl font-bold text-center mb-8'>Course Registration</h2>
      <div className='lg:flex md:flex'>
        <div className='w-4/5 gap-2'>
          <Cards handleSelectBtn={handleSelectBtn}></Cards>
        </div>
        <div className='w-1/4'>
          <CourseName courseName={courseName} remaining={remaining} total={total} ></CourseName>
        </div>
      </div>
    </>
  )
}

export default App
