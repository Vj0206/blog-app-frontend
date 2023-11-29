import React,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import AxiosService from '../utils/Apiservice';
function SignIn() {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")

  let handleLogin = async()=>{
    try{
      let res = await AxiosService.post(`/user/login`,{
        login,
        password
      })
      if (res.status===200)
       {
        toast.success(res.data.message)
       }
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }

  return <>
  <div className='container'>
  <Form>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onchance={(e)=>setEmail(e.targe.value)} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onchance={(e)=>setPassword(e.targe.value)} />
  </Form.Group>
  <Button variant="primary" onClick={handleLogin}>
    Submit
  </Button>
  
</Form>

  </div>
  </>
}

export default SignIn