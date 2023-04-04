import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


function Card() {

    let [statistique, setStatistique] = useState([]);
    useEffect(() => {
      try {
        getStatistique();
      } catch (error) {
        console.log(error);
      }
    }, []);
    const getStatistique = async () => {
      const get_statistique = await axios.get(
        `http://localhost:8080/manager/statistique`
      );
      setStatistique(get_statistique.data);
    };

  const card = [
    // { name: "user", number: statistique.user, icon: AiOutlineUser },
    { name: "User", number: statistique.user, icon: "" },
    { name: "Categories", number: statistique.categorie, icon: "" },
    { name: "Product", number: statistique.produit, icon: "" },
  ];

  return (
    <div className="flex w-screen">
      <main className="w-full h-screen">
        <div className="flex flex-wrap px-5 mt-9">
          {card.map((card, i) => (
            <div
              className="w-full max-w-full px-3 mt-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
              key={i}
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                      <div className="text-xl">
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase">
                          {card.name}{" "}
                        </p>
                        <p className="mb-2 font-bold text-gray-500">
                          {card.number}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Card;
