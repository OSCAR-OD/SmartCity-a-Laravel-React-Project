import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from '../../api/axiosConfig';
import { Link, useNavigate, useLocation } from 'react-router-dom';

//import './Registration.css';
const name_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const address_REGEX = /^[#.0-9a-zA-Z\s,-]+$/;
const jobtitle_REGEX=/^([^0-9]*)$/;

const Register = () => {
    const navigate = useNavigate();
   
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const jobtitleRef = useRef();
    const errRef = useRef();
    
    const [image, setImage] = useState('');

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [address, setAddress] = useState('');
    const [validAddress, setValidAddress] = useState(false);
    const [addressFocus, setAddressFocus] = useState(false);

    const [jobtitle, setJobtitle] = useState('');
    const [validJobtitle, setValidJobtitle] = useState(false);
    const [jobtitleFocus, setJobtitleFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(name_REGEX.test(name));
    }, [name])
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])
   
    useEffect(() => {
        // if(address!=""){
        // setValidAddress(address);
        // }
        setValidAddress(address_REGEX.test(address));
    }, [address])

    useEffect(() => {
        setValidJobtitle(jobtitle_REGEX.test(jobtitle));
    }, [jobtitle])

    useEffect(() => {
        setErrMsg('');
    }, [image, name, email, address, jobtitle])

    const handleSubmit = async(e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = name_REGEX.test(name);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = jobtitle_REGEX.test(jobtitle);
        if (!v1 || !v2|| !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        else {
            const data = new FormData();
            data.append("image", image);
            data.append("name", name);
            data.append("email", email);
            data.append("address", address);
            data.append("jobtitle", jobtitle);
            await axios.post(
                "http://127.0.0.1:8000/api/addworker", data)
                .then(
                  resp=>{
           console.log(resp);
            setSuccess('Successful');
             //clear state and controlled inputs
             setImage('');
             setName('');
             setEmail('');
             setJobtitle('');
              setAddress('');
              setErrMsg('');
         })
          .catch (err=>{
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('name Taken');
            } else {
                setErrMsg('Register Failed')
            }
            errRef.current.focus();
        });
    }
    }

    return (
        <>
        <div className="Appk">
          {success ? (
              
                <section>
                    <h1>Success!</h1>
                    <p>
                    <Link to="/dashboard">Worker Added</Link>
                    </p>
                </section>
             
             ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Worker</h1>
                    <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                 <label htmlFor="file">
                  Image: </label>
                <input type="file" id="imgname" 
                onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="name"
                            ref={nameRef}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                        />
                        <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                             </p>
                 <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        
                              </label>
                        <input
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                      <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must be a valid email adress<br />
                            </p>  

                            <label htmlFor="address">
                            Address:
                            <FontAwesomeIcon icon={faCheck} className={validAddress? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validAddress || !address ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="address"
                            ref={addressRef}
                            autoComplete="off"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            required
                            aria-invalid={validAddress ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setAddressFocus(true)}
                            onBlur={() => setAddressFocus(false)}
                        />
                      <p id="uidnote" className={addressFocus && address && !validAddress ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                           address must not be empty <br />
                           and must not contain any @,$ or any special character<br />
                            </p>  

                            <label htmlFor="jobtitle">
                            Jobtitle:
                            <FontAwesomeIcon icon={faCheck} className={validJobtitle? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validJobtitle || !jobtitle ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="jobtitle"
                            ref={jobtitleRef}
                            autoComplete="off"
                            onChange={(e) => setJobtitle(e.target.value)}
                            value={jobtitle}
                            required
                            aria-invalid={validJobtitle ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setJobtitleFocus(true)}
                            onBlur={() => setJobtitleFocus(false)}
                        />
                      <p id="uidnote" className={jobtitleFocus && jobtitle && !validJobtitle ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            jobtitle must not be be any number<br />
                            </p>  


                        <button disabled={!validName || !validEmail ||!validAddress || !validJobtitle ? true : false}>Add Worker</button>
                    </form>
                    
                </section>
            )}
            </div>
        </>
    )
}

export default Register;
