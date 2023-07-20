import React, {useState, useEffect} from "react";
import axiosConfig from '../api/axiosConfig';

const APIProducts = (props) =>{
    const[products, setProducts] = useState([]);

    // alert(localStorage.getItem("user"));


    useEffect(()=>{
        axiosConfig.get("/order/list")
        .then(resp=>{
        console.log(resp.data);
        setProducts(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    return(
        <div>
            <h1>All Orders</h1>
            <ul>
                {
                    products.map(p=>(
                        <>
                        <div>
                        <li key={p.id}>Name: {p.oname}</li>
                        <li key={p.id}>Email: {p.email}</li>
                        <li key={p.id}>Amount: {p.amount}</li>
                        <br/>
                        <hr/>
                        </div>
                        </>
                    ))
                }
            </ul>
        </div>
    )
}
export default APIProducts;