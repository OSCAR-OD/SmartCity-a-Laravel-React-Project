import { useState,useEffect } from "react";
import axios from '../../api/axiosConfig';

import { Link, useNavigate, useLocation } from 'react-router-dom';

const AllWorkers = ()=>{
    const navigate = useNavigate();
    const [workers, setWorkers] = useState([]);

    useEffect(()=>{
        fetchAllWorkers();
    },[]);
    const fetchAllWorkers = () => {
        axios.get("http://127.0.0.1:8000/api/workers/list")
        .then(resp=>{
            console.log(resp.data);
            setWorkers(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }

    const deleteWorker = (id) => {
        axios.delete("http://127.0.0.1:8000/api/deleteWorker/"+id)
        .then(resp=>{
            console.log(resp.data);
            fetchAllWorkers();
        }
        ).catch(err=>{
            console.log(err);
        });
    }
    return (
    <div class="recentCustomers">
    <div class="cardHeader">
        <h2>Recent Workers</h2>
        
                        <Link className="viewworker" to="/addworker">      
                      <span class="title">add Workers</span>
                                   </Link >
    </div>
       <table className="table">
              
                    <tr>
                        <th>Serial no.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>address</th>
                        <th>jobtitle</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
          
                    {workers.map((worker,index)=>(
                        <tr key={worker.id}>
                            <td>{++index}</td>
                            <td>
                            <div class="imgBx"><img class="card-img-top hover-shadow" src={"http://localhost:8000/images/" + worker.imgname} alt="image" style={{height:"110px"}}/>
                            </div>
                            </td>
                            <td>{worker.name}</td>
                            <td>{worker.email}</td>
                            <td>{worker.address}</td>
                            <td>{worker.jobtitle}</td>
                            <td>
                             <Link className="viewworker" to={{ pathname: "/editworker/" + worker.id }}>View</Link>&nbsp; 
                            </td>
                             <td>
                            <Link className="viewworker" to={{ pathname: "/editworker/" + worker.id }}>Update</Link>&nbsp; 
                                </td>
                                <td>
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{deleteWorker(worker.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    ))}
             
        </table> 
            </div>

    )
}
export default AllWorkers;