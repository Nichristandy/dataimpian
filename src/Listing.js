import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Listing = () =>{

    const[data,datachange] = useState(null);
    const navigate = useNavigate();

    const LoadEdit=(id)=>{
        navigate("/data/edit/"+id)

    }

    useEffect(()=>{
        fetch("http://localhost:8000/data").then((res) =>{
            return res.json();
        }).then((resp)=>{
            datachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])

    return(
        <div className="container">
            <div className="card">
                <div className ="card-title">
                    <h2>Data List</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="data/add" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Product ID</td>
                                <td>Product Name</td>
                                <td>Amount</td>
                                <td>Customer Name</td>
                                <td>Status</td>
                                <td>Transaction Date</td>
                                <td>Created By</td>
                                <td>Created On</td>
                            </tr>
                        </thead>
                        <tbody>
                            { data && data.map(item =>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                  <td>{item.productID}</td>
                                  <td>{item.productName}</td>  
                                  <td>{item.amount}</td>  
                                  <td>{item.customerName}</td>  
                                  <td>{item.status}</td>  
                                  <td>{item.transactionDate}</td>  
                                  <td>{item.createBy}</td>  
                                  <td>{item.createOn}</td>
                                  <td><a className="btn btn-success" onClick={()=>{LoadEdit(item.id)}}>Edit</a></td>     
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
}

export default Listing;