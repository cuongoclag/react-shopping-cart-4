import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({totalProducts, productsPerPage, paginate}) {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <nav aria-label="...">
            <ul className="pagination pagination-lg" style={{ justifyContent : "center"}}>
                {
                    pageNumbers.map((number,index) => (
                        <li className="page-item" style={{ padding : "10px"}}><Link onClick={() => paginate(number)} to="#" key={index}>{number}</Link></li>
                    ))
                }     
            </ul>
        </nav>
    )
}

export default Pagination
