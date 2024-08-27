import { useState } from "react";






const Dashboard=()=>{

    const [userData,setUserData]=useState({
        first_name:'',last_name:'',address:''
    });
    const [dataList,setDataList]=useState([]);
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value});
    };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userData.first_name && userData.last_name && userData.address){
            setDataList([...dataList,{...userData,id:dataList.length+1}]);
            setUserData({first_name:'',last_name:'',address:''});
        }
    }

    const handleDelete = (id) => {
        const updatedDataList = dataList.filter(user => user.id !== id);
        setDataList(updatedDataList);
    };

        return <>
<div className="container">
                
<h1 className='text-success text-center'>Add Users</h1>
<form onSubmit={handleSubmit}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="first_name"
            id="floatingInput"
            placeholder="First Name"
            value={userData.first_name}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">First Name</label>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="last_name"
            id="floatingInput"
            placeholder="Last Name"
            value={userData.last_name}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Last Name</label>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="address"
            id="floatingInput"
            placeholder="Address"
            value={userData.address}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Address</label>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12">
        <button className="btn btn-primary w-100" type="submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</form>

                    
                     
                
    <div className='container mt-5'>  
        <div className='row'>
                    <div className='col-6 text-success'>
                    <h1 className="text-muted">Recent Users({dataList.length})</h1>
                    </div>
                </div>
                <div class="table-responsive">
            <table class="table  table-hover">
                <thead class="table-success">
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                {dataList.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.address}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))}           
                    
                </tbody>
            </table>
        </div>
        </div>        
    </div>
</>    
}
export default Dashboard;