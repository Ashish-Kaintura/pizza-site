import { useState } from 'react';
import Footer from './Footer';
import './login.css';
function Contact() {
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

                        <label className='form_lable' htmlFor="Email">Email:</label>
                            <input className='input1' type="email" value={formvalue.email} onChange={handleChange} name="email" id="Email"
                            required={true} placeholder="Enter Email" />

                        </div>

                        <div>

                        <label className='form_lable' htmlFor="textarea">How can we help You</label>
                            <textarea className='input1' type="text" value={formvalue.text} onChange={handleChange} name="text" id="Text"
                                 required={true} placeholder="Tell us" />

                            </div>
                        <div className="footersubmit">
                        
                           <button type="submit"  className="btnL"> Submit</button>
                        
                        </div>
                    </div>
                </form>
            </div>
<Footer/>
        </div>

    );

}
export default Contact;
