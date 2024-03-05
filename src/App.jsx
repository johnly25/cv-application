import './App.css'
import Form from './Form'
import Cv from './Cv';
import { useState } from 'react'

function App() {
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    titleOfStudy: '',
    dateOfStudy: '',
    company: '',
    position: '', 
    main: '',
    dateFrom:'',
    dateUntil:''
  });
  return (
    <div className='container'>
      <Form info={info} setInfo={setInfo} />
      <Cv {...info} />
    </div>
  )
}

export default App
