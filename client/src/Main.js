import React, {useState} from "react";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";


function Main(){
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [govtid, setGOVTID] = useState("");
  const [idnumber, setIdNumber] = useState("");
  const [title, setTitle] = useState("");
  const [guardianname, setGuardianName] = useState("");
  const [emergencycontact, setEmergencyContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [religion, setReligion] = useState("");
  const [marital, setMarital] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [nationality, setNationality] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3003/register", {
      name: name,
      dob: dob,
      sex: sex,
      email: email,
      number: number,
      govtid: govtid,
      idnumber: idnumber,
      title: title,
      guardianname: guardianname,
      emergencycontact: emergencycontact,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      country: country,
      occupation: occupation,
      religion: religion,
      marital: marital,
      bloodgroup: bloodgroup,
      nationality: nationality,
      
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }
  

  return(
    <>
    <form>
        <div className='boxshadow'>
        <div>
            <h3>Personal Details</h3>
      <div className='formdata'>
            <label  className=' mt-right' class="required"> Name</label>
            <input type='name' placeholder='Enter Name' className="wd-41" name='name' onChange={(e)=>{setName(e.target.value)}} required="required"/>
            <label className=' mt-right mt-left'  > Date of Birth or Age</label>
            <input placeholder='DD/MM/YYYY or Age in Years' className="wd-42" name='age' onChange={(e)=>{setDOB(e.target.value)}}/>
            <label className=' mt-right mt-left'  >Sex</label>
            {/* <input placeholder='Enter Sex' className="wd-43"/> */}
            <select className="wd-43" aria-label="Default select example" name='sex' onChange={(e)=>{setSex(e.target.value)}}>
            <option selected>Enter Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>

            <div className='mobile'>
            <label   className=' mt-righti11'> Mobile</label>
            <input type="text" maxLength="10" pattern="\d{10}" placeholder="Please enter number" className="wd-44"   name='number' onChange={(e)=>{setNumber(e.target.value)}}/>
            <label className=' mt-right mt-left1' >Govt Issued ID</label>
            {/* <input placeholder='ID Type' className="wd-45"/> */}
            <select className="wd-45" aria-label="Default select example" name='govtid' onChange={(e)=>{setGOVTID(e.target.value)}}>
            <option selected>ID Type</option>
            <option value="Pan">Pan</option>
            <option value="Aadhar">Aadhar</option>
            <option value="DL">DL</option>
            </select>
            
            <input type="text" maxLength="12" placeholder='Enter Govt ID' className="wd-51 mt-rt" name='idnumber' pattern="/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/" onChange={(e)=>{setIdNumber(e.target.value)}}/>
            </div>
      </div>
      <h3>Contact Details</h3>
      <div className='formdata'>
           <label className=' mt-right ' > Guardian Details</label>
            {/* <input placeholder='Enter Label' className="wd-45"/> */}
            <select className="wd-45" aria-label="Default select example" name='title' onChange={(e)=>{setTitle(e.target.value)}}>
            <option selected>Enter Title</option>
            <option value="MR">Mr</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs</option>
            </select>
            <input placeholder='Enter Guardian Name' className="wd-47 mt-rt" name='guardianname' onChange={(e)=>{setGuardianName(e.target.value)}}/>
            <label className=' mt-right mt-left'  > Email</label>
            <input placeholder='Enter Email' className="wd-48" name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <label className=' mt-right mt-left '  > Emergency Contact</label>
            <input type="text" maxLength="10" pattern="\d{10}" placeholder='Enter Emergency No' className="wd-49" name='emergencycontact' onChange={(e)=>{setEmergencyContact(e.target.value)}}/>

      </div>
      <h3>Address Details</h3>
      <div className='formdata'>
            <label  className=' mt-right' > Address</label>
            <input type='name' placeholder='Enter Address' className="wd-41" name='address' onChange={(e)=>{setAddress(e.target.value)}}/>
            <label className=' mt-right mt-left'  > State</label>
            {/* <input placeholder='Enter State' className="wd-42"/> */}
            <select className="wd-42" aria-label="Default select example" name='state' onChange={(e)=>{setState(e.target.value)}}>
            <option selected>Enter State</option>
            <option value="Up">UP</option>
            <option value="Delhi">Delhi</option>
            <option value="Mp">MP</option>
            </select>
            <label className=' mt-right mt-left'  > City</label>
            {/* <input placeholder='Enter City/town/village' className="wd-42"/> */}
            <select className="wd-42" aria-label="Default select example" name='city' onChange={(e)=>{setCity(e.target.value)}}>
            <option selected>Enter City</option>
            <option value="Prayagraj">Prayagraj</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Delhi">Delhi</option>
            </select>
            <label   className=' mt-righti11'> Country</label>
            <input placeholder='Enter Country'className="wd-44" name='country' onChange={(e)=>{setCountry(e.target.value)}}/>
            <label   className=' mt-righti12'> Pincode</label>
            <input placeholder='Enter Pincode'className="wd-44" name='pincode' onChange={(e)=>{setPincode(e.target.value)}}/>
      </div>
      <h3>Other Details</h3>
      <div className='formdata'>
            <label  className=' mt-right' >Occupation</label>
            <input type='name' placeholder='Enter Occupation' className="wd-45" name='occupation' onChange={(e)=>{setOccupation(e.target.value)}}/>
            <label  className=' mt-right10' >Religion</label>
            <select className="wd-45" aria-label="Default select example" name='religion' onChange={(e)=>{setReligion(e.target.value)}}>
            <option selected>Enter Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Sikh">Sikh</option>
            </select>
            <label  className=' mt-right10' >Marital Status</label>
            <select className="wd-45" aria-label="Default select example" name='marital' onChange={(e)=>{setMarital(e.target.value)}}>
            <option selected>Enter Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Other">Other</option>
            </select>
            <label  className=' mt-right10' > Blood-Group</label>
            <select className="wd-45" aria-label="Default select example" name='bloodgroup' onChange={(e)=>{setBloodGroup(e.target.value)}}>
            <option selected>Enter Blood Group</option>
            <option value="A+">A+</option>
            <option value="Ab+">Ab+</option>
            <option value="O+">O+</option>
            </select>
            <label  className=' mt-right3' >Nationality</label>
            <input type='name' placeholder='Enter Nationality' className="wd-46" name='nationality' onChange={(e)=>{setNationality(e.target.value)}}/>
            
      </div>
      <div className='button'>
            <button className='sub'> <Link to="/UserData"> Fetch Data </Link></button>
            <button className='cancel'>CANCEL(ESC)</button>
            <button className='submit' onClick={register}>SUBMIT</button>
            
            <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
            </div>
        </div>
        </div> 
    </form>
    
    </>
  )
}


export default Main;