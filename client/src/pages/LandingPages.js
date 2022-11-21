import React, { useEffect, useState } from 'react'
import { API } from '../config/api'

function LandingPages() {
    const [product, setProduct] = useState()
    useEffect(() => {
        const dataproducts = async () => {
            try {
                const response = await API.get("/books");
                setProduct(response.data.data)
            } catch (error) {
                console.log(error);
            }
        };
        dataproducts();
    }, [setProduct]
    )
    console.log(product);
  return (
    <div>
        tess
    </div>
  )
}

export default LandingPages