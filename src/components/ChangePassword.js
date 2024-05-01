import React, {useState} from 'react'
import axios from "axios"

const ChangePassword = () => {
    const [values, setValues] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const handleChange = ({ currentTarget: input }) => {
        setValues({ ...values, [input.name]: input.value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { oldPassword, newPassword } = values;
            const user = await JSON.parse(localStorage.getItem("user"));
            await axios.put(`http://localhost:8085/users/changePassword/${user.user_id}`, { oldPassword, newPassword })
            .then(()=>{
                setValues({ oldPassword: "", newPassword: "" })
            })
        } catch (error) {
            console.log(error.response)
        }
    }
    return (
        <div className='content-wrapper'>
            <section className='content-header'>
                <div className="container-fluid">
                    <div className='row mb-2'>
                        <div className='col-sm-6'>
                            <h1>Change Password</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                                <li className="breadcrumb-item active">Change Password</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className='content h-100'>
                <div className='container-fluid'>
                    <div className="row d-flex justify-content-center">
                        <div class="col-md-6">
                            <div>
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Password Change</h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Old Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    placeholder="Enter Password"
                                                    name="oldPassword"
                                                    value={values.oldPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">New Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    placeholder="Enter Password" 
                                                    name="newPassword"
                                                    value={values.newPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChangePassword
