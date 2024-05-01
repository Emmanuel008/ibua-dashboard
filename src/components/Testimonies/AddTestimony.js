import React, { useState } from 'react'
import axios from 'axios';
import { url } from "../../utils/API"


const AddTestimony = () => {
  const [values, setValues] = useState({
    testimony_content: "",
    testimony_author: "",
    author_postion: ""
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const setimgfile = (e) => {
    setFile(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      var formData = new FormData();
      formData.append("image", file);
      const { testimony_content, testimony_author, author_postion} = values
      formData.append("testimony_content", testimony_content);
      formData.append("testimony_author", testimony_author);
      formData.append("author_postion", author_postion);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }

      await axios.post(`${url}testimonies`, formData, config)
        .then(() => {
          setValues({
            testimony_content: "",
            testimony_author: "",
            author_postion: ""
          })
          setImagePreview(null)
          setFile(null)
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='content-wrapper'>
      <section className='content-header'>
        <div className="container-fluid">
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Add Testimony</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li className="breadcrumb-item active">Add</li>
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
                    <h3 className="card-title">Add Testimony</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <div className="d-flex justify-content-center mb-4">
                          <img id="selectedImage" src={ imagePreview || "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"}
                            alt="example placeholder" style={{width: "300px"}} />
                        </div>
                        <div className="d-flex justify-content-center">
                          <div data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-rounded">
                            <label className="form-label text-white m-1" htmlFor="customFile2">Add Image</label>
                            <input type="file" className="form-control d-none" id="customFile2" onChange={setimgfile} name="image"/>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter Name"
                          value={values.testimony_author} 
                          name='testimony_author'
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Status or Postion</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter Status or Positon"
                          value={values.author_postion} 
                          name='author_postion'
                          onChange={handleChange}
                        />
                      </div>
                      <div className='form-group'>
                        <label>Testimony</label>
                        <textarea 
                          className="form-control" 
                          placeholder="Write Testimony"
                          value={values.testimony_content}
                          name="testimony_content"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* /.card-body */}
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

export default AddTestimony
