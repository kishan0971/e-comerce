import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div>
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://image3.mouthshut.com/images/ImagesR/imageuser_l/2023/10/925640223-863697-1.jpeg?rnd=31138" alt="" />
                </div>
                <div className='ml-5 space-y-1'>

                    <p className='font-semibold'>Women Slim Mid Rise Black Saree</p>
                    <p className='opacity-70'>Size: L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Crishtalo 2fashin</p>
                    <div className="flex space-x-5 items-center  text-gray-900 pt-6">
                        <p className="font-semibold">₹119</p>
                        <p className="opacity-50 line-through">₹211</p>
                        <p className="text-green-600 font-semibold">5% off</p>
                    </div>

                </div>
            </div>
                <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        
                    </div>
                    <div>
                        <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default CartItem