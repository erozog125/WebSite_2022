import React, {useState} from 'react'
import { useForm } from 'react-hook-form';


export const Form = () => {

  const { register, clearErrors, handleSubmit} = useForm();
  
  const onSubmit = data => console.log(data);

  
  const userData = {
    nameUser: "",
    lastNameUser: ""
  };

  const [data, setData] = useState(userData);

  const handleInputChange = (event) => {
    
    let captureValue = event.target.value;
    let inputName = event.target.name;
    setData({
      ...data,
      [inputName] : captureValue  
    })
  }

  const handleSendData = (event) => {
    event.preventDefault();
    console.log(data.nameUser+data.lastNameUser);
  }

  return (
    <div className='div-form'>
      <h2>Contact Us</h2>
      <label>leave us your data we call you</label>
      <form className='row' onSubmit={handleSubmit(onSubmit)} >
        <div className="data-form">
          <div className=''>
            <input
              defaultValue= "test" {...register("example")}
              placeholder='Name'
              className='form-control' 
              type="text" 
              name="nameUser"
              onChange={handleInputChange}
            />
          </div>
          <div className=''>
            <input 
              placeholder='LastName'
              className='form-control' 
              type="text" 
              name="lastNameUser"
              onChange={handleInputChange}
            />
          </div>        
          <div className=''>
            <button className='btn btn-primary' type='submit'>Send</button>
          </div>
        </div>
      </form>
      <h3>{data.nameUser} - {data.lastNameUser}</h3>
    </div>
  )
}
