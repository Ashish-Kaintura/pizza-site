import { useState } from 'react';
import Footer from './Footer';
import './login.css';
function Login() {
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

                            <label className='form_lable' htmlFor="FristName">userName: </label>
                            <input className='input1' type="text" value={formvalue.UserName} onChange={handleChange} name="fristname" id="UserName"  required={true}placeholder="Enter User Name" />

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
export default Login;
