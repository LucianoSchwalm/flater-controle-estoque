"use client";

import { useState } from "react";

export default function Cadastro() {
   const [inputList, setInputList] = useState([
      {
         input: "",
         input_rank: null,
      },
   ]);

   const handleColorAdd = () => {
      setInputList([
         ...inputList,
         {
            input: "",
            input_rank: null,
         },
      ]);
   };

   const handleColorRemove = () => {
      const newList = [...inputList];
      newList.splice(newList.length - 1, 1);
      setInputList(newList);
   };

   return (
      <main className="bg-white min-h-screen">
         <div className="justify-items-left py-5 min-h-screen">
            <div className="p-8">
               <div
                  className="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center
                  hover:bg-indigo-400 rounded-full cursor-pointer hidden"
               ></div>
               <div className="text-2xl text-black text-left pb-10">
                  Cadastre Uma Nota Fiscal
               </div>
               <form>
                  <div className="min-h-72">
                     <div className="grid grid-cols-4 gap-10">
                        <div>
                           <label
                              htmlFor="tecido"
                              className="text-xs text-gray-500"
                           >
                              Tecido
                           </label>
                           <select
                              className="bg-transparent w-full py-1.5 px-3 text-gray-800 border-b border-gray-500
                                 transition duration-500 focus:outline-none focus:border-black rounded"
                           >
                              <option value="Viscolaycra">Viscolaycra</option>
                              <option value="Moletim">Moletinho</option>
                              <option value="Moletom">Moletom Felpado</option>
                              <option value="Moletom">Moletom Careca</option>
                              <option value="Moletom">
                                 Helanca Felpada Produção
                              </option>
                              <option value="Moletom">
                                 Helanca Felpada Adar
                              </option>
                              <option value="Moletom">Lanzinha</option>
                              <option value="Moletom">Soft</option>
                              <option value="Moletom">Malha Sued Lisa</option>
                              <option value="Moletom">
                                 Malha Sued Estampada
                              </option>
                              <option value="Moletom">
                                 Malha Sued Canelada
                              </option>
                              <option value="Moletom">Malha Canelada</option>
                              <option value="Moletom">Malha Térmica</option>
                           </select>
                        </div>
                        <div>
                           <label
                              htmlFor="empresa"
                              id="empresa"
                              className="text-xs text-gray-500"
                           >
                              Empresa
                           </label>
                           <input
                              id="empresa"
                              name="tipoTecido"
                              className="bg-transparent border-b m-auto block border-gray-500 w-full mb-6
                                 text-gray-700 pb-2"
                              type="text"
                              placeholder=""
                           />
                        </div>
                        <div className="col-start-3 col-end-5">
                           <label
                              htmlFor="descricao"
                              id="age"
                              className="text-xs text-gray-500"
                           >
                              Descrição
                           </label>
                           <input
                              id="descricao"
                              name="descricao"
                              className="bg-transparent border-b m-auto block border-gray-500 w-full mb-6
                                 text-gray-700 pb-2"
                              type="text"
                              placeholder=""
                           />
                        </div>
                     </div>
                     {inputList.map((input, index) => (
                        <div key={index} className="grid grid-cols-4 gap-10">
                           <div>
                              <label
                                 htmlFor="cor"
                                 id="cor"
                                 className="text-xs text-gray-500"
                              >
                                 Cor
                              </label>
                              <select
                                 className="bg-transparent w-full py-1.5 px-3 text-gray-800 border-b border-gray-500
                                    transition duration-500 focus:outline-none focus:border-black rounded"
                                 id="cor"
                                 name="cor"
                              >
                                 <option value="vermelho">Vermelho</option>
                                 <option value="azul">Azul</option>
                                 <option value="preto">Preto</option>
                                 <option value="branco">Branco</option>
                              </select>
                           </div>
                           <div>
                              <label
                                 htmlFor="unidadePeso"
                                 id="unidadePeso"
                                 className="text-xs text-gray-500"
                              >
                                 Unidade de Peso
                              </label>
                              <select
                                 className="bg-transparent w-full py-1.5 px-3 text-gray-800 border-b border-gray-500
                     transition duration-500 focus:outline-none focus:border-black rounded"
                              >
                                 <option value="kilograma">KG</option>
                                 <option value="metros">Metros</option>
                              </select>
                           </div>
                           <div>
                              <label
                                 htmlFor="quantidade"
                                 id="quantidade"
                                 className="text-xs text-gray-500"
                              >
                                 Quantidade
                              </label>
                              <input
                                 id="quantidade"
                                 name="quantidade"
                                 className="bg-transparent border-b m-auto block border-gray-500
                                    w-full mb-6 text-grey-700 pb-2"
                                 type="number"
                                 placeholder=""
                              />
                           </div>
                           <div>
                              <label
                                 htmlFor="numeroRolos"
                                 id="numeroRolos"
                                 className="text-xs text-gray-500"
                              >
                                 Numero de Rolos
                              </label>
                              <input
                                 id="numeroRolos"
                                 name="numeroRolos"
                                 className="bg-transparent border-b m-auto border-gray-500
                                    w-full mb-6 text-grey-700 pb-2"
                                 type="number"
                                 placeholder=""
                              />
                           </div>
                        </div>
                     ))}
                     <div className="grid grid-cols-4 gap-10">
                        <div className="col-start-1">
                           <button
                              id="colorBtnRemove"
                              name="colorBtnRemove"
                              type="button"
                              className="text-xs text-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-gray-500"
                              onClick={handleColorRemove}
                              disabled={inputList?.length === 1}
                           >
                              - Remova uma cor
                           </button>
                        </div>
                        <div className="col-start-4">
                           <button
                              id="colorBtnAdd"
                              name="colorBtnAdd"
                              type="button"
                              className="text-xs text-blue-500 text-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 
                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:border-blue-500
                                 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                              onClick={handleColorAdd}
                           >
                              + Adicione uma cor
                           </button>
                        </div>
                     </div>
                  </div>
                  {/* <div>
                        <label
                           htmlFor="precoUnitario"
                           id="precoUnitario"
                           className="text-xs text-gray-500"
                        >
                           Preço Unitário
                        </label>
                        <input
                           id="precoUnitario"
                           name="precoUnitario"
                           className="bg-transparent border-b m-auto block border-gray-500
            w-full mb-6 text-grey-700 pb-1"
                           type="number"
                           placeholder=""
                        />
                     </div> */}
                  {/* <div>
                        <label
                           htmlFor="precoTotal"
                           id="precoTotal"
                           className="text-xs text-gray-500"
                        >
                           Preço Total
                        </label>
                        <input
                           id="precoTotal"
                           name="precoTotal"
                           className="bg-transparent border-b m-auto block border-gray-500
            w-full mb-6 text-grey-700 pb-1"
                           type="number"
                           placeholder=""
                        />
                     </div> */}
                  <div className="w-full mx-auto flex justify-center">
                     <input
                        className="shadow-lg mt-3 pt-3 pb-3 w-1/4 text-white bg-indigo-500
                  hover:bg-indigo-400 rounded-full cursor-pointer"
                        type="submit"
                        value="Clique para cadastrar"
                     />
                  </div>
               </form>
               {/* <div className="text-center mt-4">
                     <p className="text-sm text-gray-600">
                        Already have an account?
                        <a
                           href="#"
                           className="no-underline text-indigo-500 font-bold hover:text-indigo-400"
                        >
                           Sign in
                        </a>
                     </p>
                  </div> */}
            </div>
         </div>
      </main>
   );
}
