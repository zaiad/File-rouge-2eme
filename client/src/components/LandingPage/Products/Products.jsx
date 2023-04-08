import { useEffect, useState } from 'react'
import axios from 'axios'
import {Button} from '../../../accessoires/Buttons/Button'
import {Images} from '../../../accessoires/immgComponent/Images'

function Products() {
    const [produit, setProduit] = useState([]);
    const [categorie, setCategorie] = useState([]);
    const URL_Image = 'http://localhost:8080/images'
    useEffect(() => {
        try {
          getproduit();
        } catch (error) {
          console.log(error);
        }
      }, []);
    const getproduit = async () => {
        const get_product = await axios.get(
          "http://localhost:8080/manager/product"
        );
        // console.log(get_product.data.categorie);
        setProduit(get_product.data.produit);
        setCategorie(get_product.data.categorie);
      };
  return (
    <div className='max-w-[1640px] m-auto px-4 py12'>
        <h1 className='text-gray-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text="All" />
                    <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text="Iphone" />
                    <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text="Mac" />
                    <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text="Watch" />
                </div>
            </div>
            {/* Filter Price */}
            <div className='flex justify-between max-w-[390px] w-full'>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text='$' />
                <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text='$' />
                <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text='$' />
                <Button className='m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1' text='$' />
            </div>
        </div>
        <div>
            {/* Display Products */}
            <div>
                {produit.map((item) => (
                    <div>
                        <Images src={`${URL_Image}/${item.image}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products