import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const {dataid} = useParams();
    const navigate = useNavigate();

    const url = "http://localhost:8000/data"


    const [data, setData] = useState({
        id: "",
        productid: "",
        productname: "",
        amount: "",
        custname: "",
        status: "",
        tdate: "",
        createby: "",
        createon: ""
    })


     useEffect(() =>{
        axios.get('http://localhost:8000/data' + dataid)
        .then(({res})=>{
            setData(res.data)
        })
    },[])
     
    function submit(e){
        e.preventDefault();
        axios.put(url,{
            id: data.id,
            productID: data.productid,
            productName: data.productname,
            amount: data.amount,
            customerName: data.custname,
            status : data.status,
            transactionDate: data.tdate,
            createBy: data.createby,
            createOn: data.createon
        })
        .then(res =>{
            console.log(res.data)
            alert("Added successfully!")
            navigate('/')
        })

    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }


    return ( 
        <div>
            <div className = "row">
                <div className = "offset-lg-3 col-lg-6">
                <form className="container" onSubmit={(e)=>submit(e)}>
                    <div className="card" style={{"textAlign": "left"}}>
                        <div className="card-title">
                            <h2>Add Data</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>ID</label>
                                        <input value={data.id} id="id" disabled className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>Product ID</label>
                                        <input required value={data.productid} id="productid" onChange={(e)=>handle(e)} type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>Product Name</label>
                                        <input required value={data.productname} id="productname" onChange={(e)=>handle(e)} type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>Amount</label>
                                        <input required value={data.amount} id="amount" onChange={(e)=>handle(e)} type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>Customer Name</label>
                                        <input required value={data.custname} id="custname" onChange={(e)=>handle(e)} type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>Status</label>
                                        <input  required value={data.status} id="status" onChange={(e)=>handle(e)} type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>transaction Date</label>
                                        <input type ="datetime-local" id="tdate"  required value={data.tdate} onChange={(e)=>handle(e)}  className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>Created By</label>
                                        <input required value={data.createby} id="createby" onChange={(e)=>handle(e)} type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <label>Created On</label>
                                        <input type ="datetime-local" id="createon"  required value={data.createon} onChange={(e)=>handle(e)}  className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group"> 
                                        <button className="btn btn-success" type="submit">Edit</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    </form>
                </div>
            </div>

        </div> 
    );
}
 
export default Edit;