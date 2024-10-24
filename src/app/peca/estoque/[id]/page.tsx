"use client";

import { InputType } from "@/dto/inputType";
import { useState } from "react";

export default function Tecidos() {
   const [inputList, setInputList] = useState<InputType[]>([
      {
         index: 0,
         isAdult: true,
      },
   ]);

   const handleGridIsAdult = (index: number) => {
      const newList = [...inputList];
      const selectedInput = newList.find((input) => input.index === index)!;
      selectedInput.isAdult = !selectedInput.isAdult;
      setInputList(newList);
   };
   const toggleSelect = () => {};

   return (
      <div id="app" className="bg-gray-300 min-h-screen">
         <div className="container mx-auto">
            <div className="flex flex-row gap-x-24">
               <div className="py-10 w-full text-xl uppercase text-gray-600 font-bold">
                  Calça de Moletom
               </div>
               {/* <div>
                  <div className="pt-10">
                     <button
                        id="colorBtnSearch"
                        name="colorBtnSearch"
                        type="button"
                        className="text-xs text-center border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
                     >
                        Procurar
                     </button>
                  </div>
               </div> */}
            </div>
            <div>
               <div className="flex items-center py-2 px-5">
                  <span className="w-1/6">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Total
                     </span>
                  </span>
                  <span className="w-1/12">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        P
                     </span>
                  </span>
                  <span className="w-1/12">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        M
                     </span>
                  </span>
                  <span className="w-1/12">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        G
                     </span>
                  </span>
                  <span className="w-1/12">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        GG
                     </span>
                  </span>
                  <span className="w-1/12">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        XGG
                     </span>
                  </span>
                  <span className="w-1/12">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        G1
                     </span>
                  </span>
                  <span className="w-1/12">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        G2
                     </span>
                  </span>
                  <span className="w-1/6">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        GRADE
                     </span>
                  </span>
               </div>
               <div
                  key="key"
                  className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
               >
                  <div className="w-1/6">
                     <span className="capitalize text-gray-800">Total</span>
                  </div>
                  <div className="w-1/12">
                     <span className="capitalize text-gray-600 text-sm">
                        10
                     </span>
                  </div>
                  <div className="w-1/12">
                     <span className="capitalize text-gray-600 text-sm">
                        10
                     </span>
                  </div>
                  <div className="w-1/12">
                     <span className="capitalize text-gray-600 text-sm">
                        12
                     </span>
                  </div>
                  <div className="w-1/12">
                     <span className="capitalize text-gray-600 text-sm">
                        10
                     </span>
                  </div>
                  <div className="w-1/12">
                     <span className="capitalize text-gray-600 text-sm">
                        10
                     </span>
                  </div>
                  <div className="w-1/12">
                     <span className="capitalize text-gray-600 text-sm">5</span>
                  </div>
                  <div className="w-1/12">
                     <span className="capitalize text-gray-600 text-sm">5</span>
                  </div>
                  <div className="w-1/6">
                     <span className="capitalize text-gray-600 text-sm">
                        Grade
                     </span>
                  </div>
               </div>
            </div>

            <div className="pb-10">
               <div className="text-gray-600 text-xl px-2 py-5 font-bold">
                  Histórico de Peças Realizadas
               </div>
               <div className="flex items-center px-5 py-2">
                  <span className="w-1/5 text-center">
                     <input type="checkbox" onChange={toggleSelect} />
                  </span>
                  <span className="w-1/2">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Id Nota fiscal
                     </span>
                  </span>
                  <span className="w-1/4">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Cor
                     </span>
                  </span>
                  <span className="w-1/4">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Empresa
                     </span>
                  </span>
                  <span className="w-1/4">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Quantidade em KG
                     </span>
                  </span>
                  <span className="w-1/4">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Número de Rolos
                     </span>
                  </span>
               </div>

               <div
                  key="key"
                  className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
               >
                  <div className="w-1/5 text-center">
                     <input type="checkbox" v-model="contact.selected" />
                  </div>
                  <div className="w-1/2">
                     <span className="capitalize text-gray-800">852</span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-800">Vermelho</span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        Empresa1
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        45
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="text-gray-600 text-sm">10</span>
                  </div>
               </div>
               <div
                  key="key"
                  className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
               >
                  <div className="w-1/5 text-center">
                     <input type="checkbox" v-model="contact.selected" />
                  </div>
                  <div className="w-1/2">
                     <span className="capitalize text-gray-800">32</span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-800">Azul</span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        Empresa1
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        20
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="text-gray-600 text-sm">21</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
