//import "./newHotel.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
//import { hotelInputs } from "../Image";
//import useFetch from "../../hooks/useFetch";
import axios from '../../api/axiosConfig';

const Image = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  
  const handleClick = async (e) => {
    e.preventDefault();
     const data = new FormData();
          data.append("image", image);
          data.append("name", name);
         await axios.post(
            "http://127.0.0.1:8000/api/uploadImg", data)
            .then(
              resp=>{
                // dispatch({ type: "LOGIN_START" });
                console.log(resp);
                setSuccess(true);
                setName('');
                setImage('');
                setErrMsg('');
              } ) .catch (err=>{
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 409) {
                    setErrMsg('namename Taken');
                } else {
                    setErrMsg(' Faileddddddd')
                }
              
            });
          }
  return (
    <div className="new">
      
      <div className="newContainer">
       
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
      
      <div className="right">
          <form method="POST" encType="multipart/form-data">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="imgname" 
                onChange={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                />
                
              </div>
              <input type="file" id="imgname" className="mb-4" onChange={(e) => setImage(e.target.files[0])} />
           
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setImage(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              <input type="text" id="name"
                onChange={(e) => setName(e.target.value)}
            value={name}  required  />

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
