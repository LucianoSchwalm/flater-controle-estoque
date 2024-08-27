"use client";

import Link from "next/link";

export default function Tecidos() {
   const toggleSelect = () => {};

   return (
      <div id="app" className="bg-gray-300 min-h-screen">
         <div className="container mx-auto">
            <div className="py-20">
               <div className="flex items-center px-5 py-2">
                  <span className="w-1/5 text-center">
                     <input type="checkbox" onChange={toggleSelect} />
                  </span>
                  <span className="w-1/2">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Tecido
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
               <Link href={"/tecidos/12"}>
                  <div
                     key="key"
                     className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
                  >
                     <div className="w-1/5 text-center">
                        <input type="checkbox" v-model="contact.selected" />
                     </div>
                     <div className="w-1/2">
                        <span className="capitalize text-gray-800">
                           Viscolaycra
                        </span>
                     </div>
                     <div className="w-1/4">
                        <span className="capitalize text-gray-600 text-sm">
                           Empresa1
                        </span>
                     </div>
                     <div className="w-1/4">
                        <span className="capitalize text-gray-600 text-sm">
                           82
                        </span>
                     </div>
                     <div className="w-1/4">
                        <span className="text-gray-600 text-sm">31</span>
                     </div>
                  </div>
               </Link>
               <div
                  key="key"
                  className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
               >
                  <div className="w-1/5 text-center">
                     <input type="checkbox" v-model="contact.selected" />
                  </div>
                  <div className="w-1/2">
                     <span className="capitalize text-gray-800">Moletinho</span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        Empresa2
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        52
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="text-gray-600 text-sm">19</span>
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
                     <span className="capitalize text-gray-800">
                        Moletom Felpado
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        Empresa1
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        25
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="text-gray-600 text-sm">11</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
