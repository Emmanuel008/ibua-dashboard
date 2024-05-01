/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./imageList.css"
import axios from 'axios'
import { url } from "../../utils/API"


const ImagesList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${url}images`)
          .then((res) => {
            setData(res.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <div className='content-wrapper'>
      <section className='content-header'>
        <div className="container-fluid">
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Hero Section Images</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                <li className="breadcrumb-item active">Images</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className='content'>
        <div className='container-fluid'>
          <div className="row">
            {data && data.map((d, index) => {
              return (
                <div className="col-md-4 col-sm-4 col-xs-12 single_portfolio_text" key={index}>
                  <img src={`${url}`+d.image_path} alt />
                </div>
              )
            })}
            
          </div>


        </div>
      </section>
    </div>
  )
}

export default ImagesList


