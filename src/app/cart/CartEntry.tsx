"use client";
import { CartItemWithProduct } from '../../lib/db/cart';
import Image from 'next/image';

interface CartEntryProps {
    cartItem: CartItemWithProduct,
}

export default function CartEntry({cartItem: {product, quantity}}: CartEntryProps){
    return(
        <div>
            <div className='flex flex-wrap items-center gap-3'>
                <Image
                src={product.imageUrl}
                width={200}
                height={200}
                alt={product.name}
                className='rounded-lg'
                />
            </div>
            <div className='divider'/>
        </div>
    )
}