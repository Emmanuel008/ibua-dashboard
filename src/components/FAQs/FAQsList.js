/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

import { url } from "../../utils/API"


const FAQsList = () => {
  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        await axios.get(`${url}faqs`)
          .then((res) => {
            setData(res.data)
          })
      } catch (error) {
        toast.error(error.message, toastOptions);
      }
    }
    fetchData()
  },[])
  return (
    <div className='content-wrapper'>
      <section className='content-header'>
        <div className="container-fluid">
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>FAQs List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li className="breadcrumb-item active">FAQs List</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content h-100">
        <div className='container-fluid'>
          <div className='row d-flex justify-content-center'>
            <div className='col-md-12'>
              <div className='card card-primary'>
                <div className="card-header">
                  <h3 className="card-title">FaQs List</h3>
                </div>
                <div className="card-body">
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                        {data && data.map((d,index)=>{
                          return(
                            <tr key={index}>
                              <td>{d.faq_question}</td>
                              <td>{d.faq_answer}</td>
                              <td className='d-flex'>
                                <button className='btn btn-success'>Edit</button>
                                <button className='btn btn-danger ml-2'>Delete</button>
                              </td>
                            </tr>
                          )
                        })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                  </table>
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

export default FAQsList
