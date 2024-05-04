import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { url } from "../../utils/API"

const AddUpdate = () => {
  // const [rooms, setRooms] = useState(0);

  // const linkFields = () => {
  //   setRooms(prevRooms => prevRooms + 1);
  // };

  // const removeLinkFields = (rid) => {
  //   setRooms(prevRooms => prevRooms - 1);
  // };
  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    update_title: "",
    update_description: "",
    update_link: ""
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [file, setFile] = useState(null)
  // const [imagePreview, setImagePreview] = useState(null);

  const setimgfile = (e) => {
    setFile(e.target.files[0])
    console.log(file)
    // setImagePreview(URL.createObjectURL(e.target.files[0]));
  }

  console.log(file)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      var formData = new FormData();
      formData.append("image", file);
      const { update_title, update_description, update_link } = values
      formData.append("update_link", update_link);
      formData.append("update_description", update_description);
      formData.append("update_title", update_title);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }

      await axios.post(`${url}updates`, formData, config)
        .then(() => {
          setValues({
            update_title: "",
            update_description: "",
            update_link: ""
          })
          // setImagePreview(null)
          setFile(null)
          toast.success("Successfull upload", toastOptions)
        })
    } catch (error) {
      toast.error(error.message, toastOptions);
    }
  }
  return (
    <div className='content-wrapper'>
      <section className='content-header'>
        <div className="container-fluid">
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Add Update</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li className="breadcrumb-item active">Add Update</li>
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
                    <h3 className="card-title">Add Update</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Titile</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="exampleInputEmail1" 
                          placeholder="Enter Title" 
                          value={values.update_title}
                          name='update_title'
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea 
                          className="form-control" 
                          placeholder="Write Testimony"
                          value={values.update_description}
                          name='update_description'
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">Image input</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" onChange={setimgfile} />
                            <label className="custom-file-label" htmlFor="exampleInputFile">{file ?  file.name : "Choose file"}</label>
                          </div>
                        </div>
                      </div>
                      {/* {
                        [...Array(rooms)].map((_, index) =>(
                          <div key={index}  className="form-group">
                            <label htmlFor="exampleInputPassword1">Link</label>
                            <div className='row'>
                              <div className='col-md-10'>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="link" />
                              </div>
                              <div className="input-group-btn col-md-2">
                                <button className="btn btn-danger" type="button" onClick={() => removeLinkFields(index)}> <span class="fa fa-minus" aria-hidden="true"></span> </button>
                              </div>
                            </div>
                          </div>
                        ))
                      } */}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Link</label>
                        <div className='row'>
                          <div className='col-md-12'>
                            <input 
                              type="text"
                              className="form-control" 
                              id="exampleInputPassword1" 
                              placeholder="link" 
                              value={values.update_link}
                              name='update_link'
                              onChange={handleChange}
                            />
                          </div>
                          {/* <div className="input-group-btn col-md-2">
                            <button className="btn btn-success" type="button" onClick={linkFields}> <span class="fa fa-plus" aria-hidden="true"></span> </button>
                          </div> */}
                        </div>
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
      <ToastContainer />
    </div>
  )
}

export default AddUpdate
