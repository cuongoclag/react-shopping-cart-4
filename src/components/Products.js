import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import Sort from './Sort';
import Pagination from './Pagination';


function Products({products, setProducts, getQuery, addCart}) {

    //State Category
    const allCategories = ['All', ...products.map(product => product.category)];
    const [categories, setCategories] = useState(allCategories);
    
    //State Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(4);



    // Kiểm tra category r thêm vào mảng sau 
    const [checkCategory, setCheckCategory] = useState(products);
    console.log(typeof checkCategory)

    //lưu lại dữ liệu product (sửa lỗi load lại trang nhưng mất dữ liệu product)
    useEffect(() => {
        setCheckCategory(products)     
    }, [products])

    //lưu lại dữ liệu category (sửa lỗi load lại trang nhưng mất dữ liệu category)
    useEffect(() => {
        const categories = JSON.parse(localStorage.getItem('categories'))
        if(categories) setCategories(categories)
      }, [])

    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(allCategories))
      }, [allCategories])


    //Kiểm tra xem Category thuộc loại nào
    const getCategoryProduct = (category) => {
        if (category == 'All') {
            setCheckCategory(products);
        } else {
            const getCategoryProduct = products.filter(product => product.category === category);
            setCheckCategory(getCategoryProduct);
        }
    }
    

    //Sort
    const [sortType, setSortType] = useState("")

    const sortedTitle = checkCategory.sort((a,b) => { 
        if(sortType === 'Titleasc'){
            const isTitle = 1;
            return isTitle * a.title.localeCompare(b.title);
        }else if(sortType === 'Titledesc'){
            const isTitle = -1;
            return isTitle * a.title.localeCompare(b.title);
        };    
    });

    const sortedPrice = checkCategory.sort((c,d) => {
        if(sortType === 'Priceasc'){
            const isPrice = 1;
            return isPrice * c.price.localeCompare(d.price);
        }else if(sortType === 'Pricedesc'){
            const isPrice = -1;
            return isPrice * c.price.localeCompare(d.price);
        };
    });

    //Pagination lay so product hien tai tren 1 trang
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = checkCategory.slice(indexOfFirstProduct, indexOfLastProduct);

    //Pagination thay doi so trang khi click
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="section all-products" id="products">
        <div className="top container">
            <h1>All Products</h1>
            <Search getQuery={getQuery}/>
            <form>
            <Sort getSortType={(s) => setSortType(s)} />
            <span><i className="bx bx-chevron-down" /></span>
            </form>
            {/* <form>
            <select onChange={(e) => setCheckCategory(e.target.value)}>
                {
                    categories.map((category, index) => (
                            <option value={() => getCategoryProduct(category)} key={index}>{category}</option> 
                    ))
                }
            </select>
            <span><i className="bx bx-chevron-down" /></span>
            </form> */}
            <div>
                {
                    categories.map((category,index) => (
                        <button type="submit" onClick={() => getCategoryProduct(category)} key={index}>{category}</button>
                    ))
                }
            </div>           

        </div>
        <div className="product-center container">
        {
            currentProduct.map(product => (
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
                        <h4 className="price">${Math.round(product.price)}</h4>
                    </div>
                </div>
            ))
        }
        </div>  
        <Pagination totalProducts={checkCategory.length} productsPerPage={productsPerPage} paginate={paginate} />
        </section>

    )
}

export default Products
