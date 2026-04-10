import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [customers, setCustomers] = useState([]);

  //await can be only done with async keyword, only when handled as async
  const fetchCustomer = async () => {
    //fetch
    //promise -> future result, obj
    const res: any = await axios.get("http://localhost:5000/api/v1/customer"); //only can await in asynchronous function
    console.log(res)
    setCustomers(res.data.data);
    // const res =  axios.get("http://localhost:5000/api/v1/customer");
    // res
    //   .then((result) => {
    //     setCustomers(result.data.data)//response eka awamai callback eka run wenne
    // })
    // .catch((err)=>{
    //   console.error(err)
    // })
  };

  //mounting
  //render
  useEffect(() => {
    fetchCustomer()
  }, []);
  return (
    <div>
      {customers.map((customer:any) => (
        <div>
          <h1>Name: {customer?.name || "N/A"}</h1>
          <p>Age: {customer?.age || "N/A"}</p>
          <p>Admin: {customer?.isAdmin}</p>
          <p>Email: {customer?.email || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
