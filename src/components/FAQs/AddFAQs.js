import React, {useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

import {url} from "../../utils/API"

const AddFAQs = () => {

  const toastOptions = {
        position: "top-center",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
  const [values, setValues] = useState({
    faq_question: "",
    faq_answer: ""

  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event)=>{
    event.preventDefault()
    try {
      const {faq_answer, faq_question}= values

      await axios.post(`${url}faqs`, {
        faq_question, faq_answer
      })
      .then(()=>{
        setValues({
          faq_question: "",
          faq_answer: ""
        })
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
              <h1>Add Testimony</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li className="breadcrumb-item active">Add FAQs</li>
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
                    <h3 className="card-title">Add FAQs</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Question</label>
                        <textarea 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter Question" 
                          name='faq_question'
                          value={values.faq_question}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Answer</label>
                        <textarea 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter answer"
                          name='faq_answer' 
                          value={values.faq_answer}
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

export default AddFAQs
