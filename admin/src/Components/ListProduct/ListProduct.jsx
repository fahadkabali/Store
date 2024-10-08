import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchinfo = async () =>{
    await fetch('https://backend-a13v.onrender.com/allproducts')
    .then(res => res.json())
    .then(data => {
      setAllProducts(data)
    });
  }
  useEffect(()=>{
    fetchinfo();
  },[])
  const remove_product = async (id)=>{
    await fetch('https://backend-a13v.onrender.com/removeproduct',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-TYpe':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchinfo();
  }
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <><div key={index}className="listproduct-format-main listproduct-format">
                    <img src={product.image} alt="" className="listproduct-product-img" />
                    <p>{product.name}</p>
                    <p>{product.old_price}</p>
                    <p>{product.new_price}</p>
                    <p>{product.category}</p>
                    <img onClick={()=>{remove_product(product.id)}}src={cross_icon} className='listproduct-remove-icon' alt=""/>
                  </div>
                  <hr/>
                  </>
                  

        })}
      </div>
    </div>
  )
}

export default ListProduct
