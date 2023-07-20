import React, {useState, useEffect} from "react";
import axios from "axios";
//import Post from './Post';

const AllOrders = ()=>{
    
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [err, setErr] = useState('');
      
        const handleClick = async () => {
          setIsLoading(true);
          try {
            const {data} = await axios.get('http://127.0.0.1:8000/api/orders/list', {
              headers: {
                Accept: 'application/json',
              },
            });
      
            console.log('data is: ', JSON.stringify(data, null, 4));
      
            setData(data);
          } catch (err) {
            setErr(err.message);
          } finally {
            setIsLoading(false);
          }
        };
      
    //////
   
    return (
        <div>
          {err && <h2>{err}</h2>}
    
          <button onClick={handleClick}>Fetch data</button>
    
          {isLoading && <h2>Loading...</h2>}
    
          {data.map(person => {
            return (
              <div>
              <h2>Requested User name: {person.oname}</h2>
               <p>email: {person.email}</p>
               <p>phone: {person.phone}</p>
               <p>amount: {person.amount}</p>
                <br />
                </div>
            );
          })}
        </div>
      );
    

}
export default AllOrders;