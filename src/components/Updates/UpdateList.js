/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./updateList.css"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import { url } from '../../utils/API'

const UpdateList = () => {
  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${url}updates`)
          .then((res) => {
            setData(res.data)
          })
      } catch (error) {
        toast.error(error.message, toastOptions);
      }
    }
    fetchData()
  }, [])

  console.log(data)
  return (
    <div className='content-wrapper h-100'>
      <section className='content-header'>
        <div className="container-fluid">
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Update List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                <li className="breadcrumb-item active">Update List</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            {data && data.map((d, index) => (
              <div className=" col-md-4 col-sm-6" key={index}>
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src={`${url}`+d.update_image_path} alt="explore image" className='object-fit-fill border' height={300} />
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h3><a href="#">{d.update_title}</a></h3>
                    <div className="explore-person">
                      <div className="row">
                        <div className="col-sm-12">
                          <p>
                            {d.update_description}
                          </p>
                        </div>
                        <div className='col-sm-12'>
                          <a>{d.update_link}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}

export default UpdateList
