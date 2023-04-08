import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../../accessoires/Buttons/Button";
import { Images } from "../../../accessoires/immgComponent/Images";

function Products() {
  const [produit, setProduit] = useState([]);
  const [originalProduit, setOriginalProduit] = useState([]);
  const URL_Image = "http://localhost:8080/images";
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
    setOriginalProduit(get_product.data.produit);
  };

  const filterType = (category) => {
    setProduit(
      originalProduit.filter((item) => {
        return item.categorie[0].name === category;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py12">
      <h1 className="text-gray-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <Button
            onClick={() =>  setProduit(originalProduit)}
              className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
              text="All"
            />
            <Button
            onClick={() => filterType('IPhone')}
              className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
              text="Iphone"
            />
            <Button
            onClick={() => filterType('Mac')}
              className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
              text="Mac"
            />
            <Button
            onClick={() => filterType('Watch')}
              className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
              text="Watch"
            />
          </div>
        </div>
        {/* Filter Price */}
        <div className="flex justify-between max-w-[390px] w-full">
          <p className="font-bold text-gray-700">Filter Price</p>
          <Button
            className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
            text="$"
          />
          <Button
            className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
            text="$"
          />
          <Button
            className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
            text="$"
          />
          <Button
            className="m-1 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white  rounded-xl px-5 py-1"
            text="$"
          />
        </div>
      </div>
      <div>
        {/* Display Products */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {produit.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
            >
              <Images
                src={`${URL_Image}/${item.image}`}
                className="w-full h-[300px] rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.title}</p>
                {/* <p className="font-bold">{item.categorie[0].name}</p> */}
                <p className="">
                  <span className="bg-gray-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
