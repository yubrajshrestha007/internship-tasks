    'use client'
    import React from 'react'
    // import ProductCard from './ProductCard'
    import { Button } from '@/components/ui/button'


    const AddToCart = () => {
    return (
        <div>
            {/* <button className='btn btn-primary' onClick={() => console.log('Add to cart')}>
                Add to cart
            </button> */}
            <Button  onClick={()=>{
                alert('Add to cart')
            }}>Add to cart</Button>
        </div>
    )
    }

    export default AddToCart
