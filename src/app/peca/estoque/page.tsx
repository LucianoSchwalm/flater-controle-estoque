"use client";

import Link from "next/link";

export default function EstoquePecas() {
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
                        Peça
                     </span>
                  </span>
                  <span className="w-1/4">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Quantidade
                     </span>
                  </span>
               </div>
               <Link href={"/peca/estoque/12"}>
                  <div
                     key="key"
                     className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
                  >
                     <div className="w-1/5 text-center">
                        <input type="checkbox" v-model="contact.selected" />
                     </div>
                     <div className="w-1/2">
                        <span className="capitalize text-gray-800">
                           Calça de Moletom
                        </span>
                     </div>
                     <div className="w-1/4">
                        <span className="capitalize text-gray-600 text-sm">
                           37
                        </span>
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
                     <span className="capitalize text-gray-800">
                        Blusinha Gola V
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        12
                     </span>
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
                        Calça de Helanca
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        15
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
