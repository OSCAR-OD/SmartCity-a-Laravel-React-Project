import { useEffect, useState } from "react";
import {Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from '../../api/axiosConfig';
const WorkerInfo = (props)=>{
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchWorker();
    },[]);
    const fetchWorker = () => {
        axios.get("http://127.0.0.1:8000/api/workers/workerinfo/"+id+'/edit')
        .then(resp=>{
            console.log(resp.data);
            setInputs({
                name:resp.data.name,
                email:resp.data.email,
            });
        }).catch(err=>{
            console.log(err);
        });
    }
    // const fetchUser= () =>{
    //     http.get('/users/'+id+'/edit').then((res)=>{
    //         setInputs({
    //             name:res.data.name,
    //             email:res.data.email,
    //         });
    //     });
    // }
    return (
        <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h4>Name</h4>
                        <p>{ inputs.name }</p>
                        <h4>Email</h4>
                        <p>{ inputs.email }</p>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default WorkerInfo;