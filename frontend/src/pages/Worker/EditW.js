import { useState,useEffect } from "react";
import axios from '../../api/axiosConfig';
import Modal from "../../components/Modal/Modal";
import { Link, useNavigate, useParams } from "react-router-dom";


    
const EditWorker = (props)=>{
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const [image, setImage] = useState('');
    const {id} = useParams();
  const [modalOpen, setModalOpen] = useState(false);

    useEffect(()=>{
        fetchWorker()
    },[]);

    const fetchWorker= () =>{
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

    const handleImage = (e) => {
        setImage({ imgname: e.target.files[0] });
    }
    
    const submitForm = async(e) => {
        e.preventDefault();
       // const w_id = props.match.params.id;

        const data = new FormData();
        data.append("image", image.imgname);
        data.append("name", inputs.name);
        data.append("email", inputs.email);
        data.append("address", inputs.address);
        data.append("jobtitle", inputs.jobtitle);
       await axios.post('http://127.0.0.1:8000/api/updateWorker/'+id,data).then((res)=>{
        setModalOpen(true);
       console.log("success");    
       // navigate('/viewworker');
        })
        .catch(err=>{
            setModalOpen(true);
            console.log(err);
        });
    }
    return (
        <>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
         <div className="Appk">
            <h2>Edit Worker</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                    <form onSubmit={submitForm} encType="multipart/form-data">
         <div className="imgBx"><img className="card-img-top hover-shadow" src={"http://localhost:8000/images/" + image.imgname} alt="image" style={{height:"110px"}}/> 
             </div>
        {/* <img src={ image.imgname
                  ? URL.createObjectURL(image.imgname)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt=""  /> */}
                <input type="file" id="imgname" name="imgname"
             onChange={handleImage} />
                <label>Name</label>
                   <input type="text" name="name" className="form-control mb-2"
                           value={inputs.name || ''}
                                onChange={handleChange}  />

                        <label>Email</label>
                    <input type="text" id="email" name="email" className="form-control mb-2"
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
                        <button type="submit" className="btn btn-info mt-2">Update</button>
                        </form >
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}


export default EditWorker;