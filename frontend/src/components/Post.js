import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
               oname: <span>{props.oname}</span>
               <br></br>
               email: <span>{props.email}</span>
            </div>


    )

}
export default Post;  