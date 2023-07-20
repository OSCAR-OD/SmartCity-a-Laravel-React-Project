import { useState,useEffect } from "react";
import axios from '../../api/axiosConfig';
import { Link, useNavigate, useParams } from "react-router-dom";

    
const EditWorker = (props)=>{
    const navigate = useNavigate();
   const [image, setImage] = useState('');
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [address, setAddress] = useState('');
     const [jobtitle, setJobtitle] = useState('');
    
    const {id} = useParams();

    useEffect(()=>{
        fetchWorker()
    },[]);

    
    const fetchWorker = () => {
      axios.get("http://127.0.0.1:8000/api/editWorker/"+id)
        .then(resp=>{
            console.log(resp.data);
            setImage(resp.data.imgname);
            setName(resp.data.name);
            setEmail(resp.data.email);
            setAddress(resp.data.address);
            setJobtitle(resp.data.jobtitle);
          }).catch(err=>{
            console.log(err);
        });
    }


    const handleChange = (event) => {
        setImage(event.target.files[0]);
            setName(event.target.name);
            setEmail(event.target.email);
            setAddress(event.target.address);
            setJobtitle(event.target.jobtitle);
         }

    const submitForm =async(e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("image", image);
        data.append("name", name);
        data.append("email", email);
        data.append("address", address);
        data.append("jobtitle", jobtitle);
        await axios.put('http://127.0.0.1:8000/api/updateWorker/'+id,data)
        .then((res)=>{
            navigate('/');
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
                        <label>Name</label>
                        <input type="text" id ="name"  className="form-control mb-2"
                                onChange={handleChange}
                                value={name.name}  />
                        <label>imgname</label>
                        <input type="file" id="imgname" className="mb-4" 
                         value={image|| ''}
                          onChange={handleChange} />
           
                      

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditWorker;