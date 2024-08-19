"use client";

export default function Tecidos() {
   const toggleSelect = () => {};

   return (
      <div id="app" className="bg-gray-300">
         <div className="container mx-auto">
            <div className="py-20">
               <div className="flex items-center px-5 py-2">
                  <span className="w-1/6 text-center">
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
                        Quantidade
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
                     <div className="ml-4">
                        <span className="capitalize text-gray-800">
                           Viscolaycra
                        </span>
                     </div>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        contact.gender
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="capitalize text-gray-600 text-sm">
                        contact.location.city
                     </span>
                  </div>
                  <div className="w-1/4">
                     <span className="text-gray-600 text-sm">
                        contact.phone
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
