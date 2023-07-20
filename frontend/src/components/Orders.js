import React, {useState, useEffect} from "react";
import axios from '../api/axiosConfig';
import Post from './Post';

const AllPosts = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/orders/list")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            {/* <table>
                <tr>
                    <th>userId</th>
                    <th>Title</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.userId}</td>
                    <td >{post.title}</td>
                </tr>
                    ))}
            </table> */}
             {
                posts.map(post=>(
                    <Post oname={post.oname} email={post.email} key={post.id}></Post>
                    ))
            }


        </div>
    )

}
export default AllPosts;