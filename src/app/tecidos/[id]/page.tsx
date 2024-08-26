"use client";

export default function Tecidos() {
   const toggleSelect = () => {};

   return (
      <div id="app" className="bg-gray-300 min-h-screen">
         <div className="container mx-auto">
            <div className="flex flex-row gap-52">
               <div className="py-10 text-xl uppercase text-gray-600 font-bold">
                  Viscolaycra
               </div>
               <div className="py-10 text-base text-gray-600 font-bold">
                  <label htmlFor="cor" className="px-5">
                     Cor:
                  </label>
                  <select name="cor" id="cor">
                     <option value="azul">Azul</option>
                     <option value="branco">Branco</option>
                     <option value="preto">Preto</option>
                     <option value="vermelho-sangue">Vermelho sangue</option>
                     <option value="vermelho">Vermelho</option>
                  </select>
               </div>
               <div>
                  <div className="py-8">
                     <button
                        id="colorBtnRemove"
                        name="colorBtnRemove"
                        type="button"
                        className="text-xs text-center border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
                     >
                        Procurar
                     </button>
                  </div>
               </div>
            </div>
            <div className="py">
               <div className="flex items-center px-5 py-2">
                  <span className="w-1/5 text-center">
                     <input type="checkbox" onChange={toggleSelect} />
                  </span>
                  <span className="w-1/2">
                     <span className="text-xs uppercase text-gray-600 font-bold">
                        Id Nota fiscal
                     </span>
                  </span>
                  <span className="w-1/2">
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
                  <div className="w-1/2">
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
                  <div className="w-1/2">
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
