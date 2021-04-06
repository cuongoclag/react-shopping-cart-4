import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


function Details({addCart}) {
    const {id} = useParams()
    const [detail, setDetail] = useState([])
    const url = `https://606730cf98f405001728e82c.mockapi.io/products/${id}`
    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            setDetail(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])


    return (
    <section className="section product-detail">
    <div className="details container-md">
            <div className="left">
            <div className="main">
                <img src={detail.image} alt="" />
            </div>
            <div className="thumbnails">
                <div className="thumbnail">
                <img src="" alt=""/>
                </div>
            </div>
            </div>
            <div className="right">
            <h1>{detail.title}</h1>
            <h3>{detail.category}</h3>
            <div className="price">${detail.price}</div>
            <form>
                <div>
                <select>
                    <option selected disabled>Select Size</option>
                    <option value="1">1</option> 
                </select>
                <span><i className="bx bx-chevron-down" /></span>
                </div>
            </form>
            <form className="form">
                <input type="text" placeholder={1} />
                <Link to="#" className="addCart" onClick={() => addCart(detail)}>Add To Cart</Link>
            </form>
            <h3>Product Detail</h3>
            <p>{detail.description}</p>
            </div>
        </div>
        </section>
    )
}

export default Details
