import { useState,useEffect } from "react";
import axios from '../../api/axiosConfig';
import { useNavigate, useParams } from "react-router-dom";


    
const EditWorker = (props)=>{
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const [image, setImage] = useState('');
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        axios.get("http://127.0.0.1:8000/api/editWorker/"+id)
        .then((res)=>{
            setImage({
                imgname:res.data.imgname,
            });
            setInputs({
                name:res.data.name,
                email:res.data.email,
                address:res.data.address,
                jobtitle:res.data.jobtitle,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value }))
        console.log(inputs);
    }

    const submitForm = async(e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("image", image);
        data.append("name", inputs.name);
        data.append("email", inputs.email);
        data.append("address", inputs.address);
        data.append("jobtitle", inputs.jobtitle);
       await axios.put('http://127.0.0.1:8000/api/updateWorker/'+id,data).then((res)=>{
       //console.log("success");    
        navigate('/viewworker');
        })
        .catch(err=>{
            console.log(err);
        });
    }
    return (
        <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                    <form  method="post" encType="multipart/form-data">
                            
                <label htmlFor="file">
                  Image: </label>
                <input type="file" id="imgname" name="imgname"
             onChange={(e) => setImage(e.target.files[0])}
             />
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />

                        <label>Email</label>
                        <input type="email" id="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        /> 
              <label>Address</label>
                        <input type="text" id="address" name="address" className="form-control mb-2"
                                value={inputs.address || ''}
                                onChange={handleChange}
                             />
                                           <label>Jobtitle</label>
                        <input type="text" id="jobtitle" name="jobtitle" className="form-control mb-2"
                                value={inputs.jobtitle || ''}
                                onChange={handleChange}
                             />
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                        </form >
                    </div>
                </div>
            </div>
        </div>

    )
}


export default EditWorker;