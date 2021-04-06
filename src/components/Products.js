import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import Sort from './Sort';


function Products({products, setProducts, getQuery, addCart}) {

    //const allCategories = ['All', 'All', ...products.map(product => product.category)];
    const [categories, setCategories] = useState(['All', 'All', ...products.map(product => product.category)]);
    //const [categories, setCategories] = useState([]);

    const getCategoryProduct = (category) => {
        return products.filter(product => product.category === category)
    }
    //Sort
    const [sortType, setSortType] = useState("")

    const sortedTitle = products.sort((a,b) => { 
        if(sortType === 'Titleasc'){
            const isTitle = 1;
            return isTitle * a.title.localeCompare(b.title);
        }else if(sortType === 'Titledesc'){
            const isTitle = -1;
            return isTitle * a.title.localeCompare(b.title);
        };    
    });

    const sortedPrice = products.sort((c,d) => {
        if(sortType === 'Priceasc'){
            const isPrice = 1;
            return isPrice * c.price.localeCompare(d.price);
        }else if(sortType === 'Pricedesc'){
            const isPrice = -1;
            return isPrice * c.price.localeCompare(d.price);
        };
    });


    //Lấy ra những category trong product
    // const filterCategory = (category) => {
    //     const filteredData = products.filter(product => product.category === category);
    //     setProducts(filteredData);
    // }

    return (
        <section className="section all-products" id="products">
        <div className="top container">
            <h1>All Products</h1>
            <Search getQuery={getQuery}/>
            <form>
            <Sort getSortType={(s) => setSortType(s)} />
            <span><i className="bx bx-chevron-down" /></span>
            </form>
            <form>
            <select onChange={(e) => setCategories(e.target.value)}>
                {
                    categories.map(category => {
                            <option value={() => getCategoryProduct(category)}>{category.category}</option> 
                        })
                }
            </select>
            <span><i className="bx bx-chevron-down" /></span>
            </form>

            {/* <button type="button" onClick={() => filterCategory('violet')}>All</button> */}

        </div>
        <div className="product-center container">
        {
            products.map(product => (
                <div className="product" key={product.id}>
                    <div className="product-header">
                        <img src={product.image} alt="" />
                        <ul className="icons">
                        <span><i className="bx bx-heart" /></span>
                        <Link to="#" onClick={() => addCart(product)}><span><i className="bx bx-shopping-bag" /></span></Link>
                        <Link to={`/product/${product.id}`}><span><i className="bx bx-search" /></span></Link>
                        </ul>
                    </div>
                    <div className="product-footer">
                        <Link to={`/product/${product.id}`}><h3>{product.title}</h3></Link>
                        <div className="rating">
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bx-star" />
                        </div>
                        <h4 className="price">${product.price}</h4>
                    </div>
                </div>
            ))
        }
        </div>
        </section>

    )
}

export default Products
