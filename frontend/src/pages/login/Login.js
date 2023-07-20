import { useRef, useContext, useState, useEffect } from 'react';
//import useAuth from '../hooks/useAuth';
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

const Login = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    //const { loading, error, dispatch } = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    let[token, setToken]= useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] =useState("");
    let [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const loginSubmit= (e)=>{
        e.preventDefault();
       var obj = {email:email, password: password};
      
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
           // dispatch({ type: "LOGIN_START" });
            var token = resp.data;
            console.log(token);
             var user = {email: token.email, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
           // dispatch({ type: "LOGIN_SUCCESS", payload: resp.data.email });
            console.log(localStorage.getItem('user'));
            if(token == "No user found"){
                navigate('/');
            }else{
                navigate('/dashboard');
            }
        }).catch(err=>{
          //  dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
            console.log(err);
            errRef.current.focus();
        });


    }
    return(
        <>
        <div className="Appk">
        <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={loginSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <button>Sign In</button>
            {/* <button onClick={loginSubmit}>Login</button> */}

        </form>
        <p>
            Need an Account?<br />
            <span className="line">
                <Link to="/register">Sign Up</Link>
            </span>
        </p>
    </section>
</div>
</>

                     

    )
}
export default Login;  