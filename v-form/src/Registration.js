import { useState } from 'react';
import Footer from './Footer';
import './login.css';
function Registration() {
    const [formvalue, setFormValue] = useState({
      
    });



    const handleChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setFormValue(values => ({ ...values, [id]: value }))
    }


    const handleSubmit = (event) => {
       
            event.preventDefault();
        alert(JSON.stringify(formvalue ));
        console.log(formvalue);
    }
    
    return (
        <div className='Registration'>
            <div className="formcontainer" >
                <form onSubmit={handleSubmit} className='form1' action="post">
                    <div className='form-body'>
                        <div>

                            <label className='form_lable' htmlFor="FristName">FristName: </label>
                            <input className='input1' type="text" value={formvalue.firstName} onChange={handleChange} name="fristname" id="FristName"  required={true}placeholder="Enter Frist Name" />

                        </div>

                        <div>

                            <label className='form_lable' htmlFor="LastName">LastName: </label>
                            <input className='input1' type="text" value={formvalue.lastName} onChange={handleChange} name="lastname" 
                            required={true} id="LastName" placeholder="Enter Last Name" />
                        </div>

                        <div>

                            <label className='form_lable' htmlFor="Email">Email:</label>
                            <input className='input1' type="email" value={formvalue.email} onChange={handleChange} name="email" id="Email"
                            required={true} placeholder="Enter Email" />

                        </div>

                        <div>

                            <label className='form_lable' htmlFor="Phone">Phone:</label>
                            <input className='input1' type="text" value={formvalue.phone} onChange={handleChange} name="phone" id="Phone"    
                              required={true} placeholder="Enter Number" />

                        </div>

                        <div>

                            <label className='form_lable' htmlFor="Password">Password:</label>
                            <input  className='input1' type="password" value={formvalue.password} onChange={handleChange} name='passsword' id="Password" required={true} placeholder="Enter Password" />

                        </div>
                        <div className="footersubmit">
                        
                           <button type="submit"  className="btnL"> Register</button>
                        
                        </div>
                    </div>
                </form>
            </div>
        <Footer/>
        </div>

    );

}
export default Registration
