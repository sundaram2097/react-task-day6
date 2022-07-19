import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function CreateStudent(props) {
    
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[mobile,setMobile]=useState("");
    let[batch,setBatch]=useState("");
    
    let navigate=useNavigate("");


    let handlesubmit=()=>{
        let data={
        name,
        email,
        mobile,
        batch
    }
    let student =[...props.data.student];
    student.push(data)
   
    props.data.setStudent(student)
    navigate ('/dashboard')
    }
   
  return <>
  
<div className='mb-6'>

    <Form>

      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="Mobile" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Batch </Form.Label>
        <Form.Control type="text" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Button variant="primary"  onClick={()=>handlesubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  </>
}

export default CreateStudent