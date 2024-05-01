/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import {url} from "../utils/API"
const Main = () => {
    const [data, setData] = useState({
        faqs: [],
        updates: [],
        testimonies: [],
        images: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const faqsResponse = await axios.get(`${url}faqs/amount`);
                const updatesResponse = await axios.get(`${url}updates/amount`);
                const testimoniesResponse = await axios.get(`${url}testimonies/amount`);
                const imagesResponse = await axios.get(`${url}images/amount`);

                setData({
                    faqs: faqsResponse.data,
                    updates: updatesResponse.data,
                    testimonies: testimoniesResponse.data,
                    images: imagesResponse.data
                });
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    console.log(data)
    
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{data.updates.data_amount}</h3>
                                    <p>Updates</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <Link to="/dashboard/updateList" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{data.images.data_amount}</h3>
                                    <p>Images</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <Link to="/dashboard/imageList" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{data.testimonies.data_amount}</h3>
                                    <p>Testimonies</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <Link to="/dashboard/view_testimonies" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{data.faqs.data_amount}</h3>
                                    <p>FAQs</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <Link to="/dashboard/faqsList" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Main
