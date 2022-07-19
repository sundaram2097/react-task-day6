import './App.css';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateStudent from './Components/CreateStudent';
import { useState } from 'react';
import EditStudent from './Components/EditStudent';



function App() {
  let data = {
    monthly: "Rs 40,000",
    annual: "Rs 4,80,000",
    task: 50,
    pending: 18,
  }

  let [student, setStudent] = useState([
    {
      name: 'meenakshi',
      email: 'meenakshi@gmail.com',
      mobile: '1234567890',
      batch: 'b36wd',

    },
    {
      name: 'sam',
      email: 'sam@gmail.com',
      mobile: '6789054321',
      batch: 'b36wd',

    }, {
      name: 'meena',
      email: 'meena@gmail.com',
      mobile: '123890654',
      batch: 'b36wd',

    },
  ]);
  return <>
    <div className='wrapper'>

      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='dashboard' element={<Dashboard data={{data,student, setStudent}} />} />
          <Route path='createstudent' element={<CreateStudent data={{data,student, setStudent}} />} />

          <Route path='editstudent/:id' element={<EditStudent data={{data,student, setStudent}}/>} />
          <Route path="*" element={<Dashboard data={{data,student,setStudent}} />} />
        </Routes>
      </BrowserRouter>

    </div>


  </>
}

export default App;
