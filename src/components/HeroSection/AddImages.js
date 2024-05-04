import React, {useState} from 'react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import { url } from "../../utils/API"

const AddImages = () => {
  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    image_title: "",
    image_description: ""

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

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      var formData = new FormData();
      formData.append("image", file);
      const {image_description, image_title} = values
      formData.append("image_description", image_description);
      formData.append("image_title", image_title);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }

      await axios.post(`${url}images`, formData, config)
      .then(()=>{
        setValues({
          image_title: "",
          image_description: ""
        })
        setImagePreview(null)
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
              <h1>Add Image</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li className="breadcrumb-item active">Add Image</li>
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
                    <h3 className="card-title">Add Image</h3>
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
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter Title" 
                          value={values.image_title}
                          name='image_title'
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <textarea 
                          type="text"
                          className="form-control" 
                          placeholder="Enter Description" 
                          value={values.image_description}
                          name='image_description'
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
      <ToastContainer />
    </div>
  )
}

export default AddImages
