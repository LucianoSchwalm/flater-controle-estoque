const Pecas = () => {
   return (
      <div className="bg-gray-300 min-h-screen">
         <div className="flex flex-col items-center justify-center">
            <div className="pt-10 pb-5 px-5 text-gray-600 font-bold text-xl">
               Insira o Tecido que Deseja Retirar do Estoque
            </div>
            <div className="grid grid-cols-2 gap-10 py-5 px-5">
               <div>
                  <label htmlFor="tecido" className="text-xs text-gray-600">
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
                     <option value="Moletom">Helanca Felpada Produção</option>
                     <option value="Moletom">Helanca Felpada Adar</option>
                     <option value="Moletom">Lanzinha</option>
                     <option value="Moletom">Soft</option>
                     <option value="Moletom">Malha Sued Lisa</option>
                     <option value="Moletom">Malha Sued Estampada</option>
                     <option value="Moletom">Malha Sued Canelada</option>
                     <option value="Moletom">Malha Canelada</option>
                     <option value="Moletom">Malha Térmica</option>
                  </select>
               </div>
               <div>
                  <label
                     htmlFor="cor"
                     id="cor"
                     className="text-xs text-gray-600"
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
            </div>
            <div className="grid grid-cols-3 gap-10 py-5 px-5">
               <div>
                  <label
                     htmlFor="quantidade"
                     id="quantidade"
                     className="text-xs text-gray-600"
                  >
                     Insira a quantidade de Rolos a ser retirado
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
                     htmlFor="unidadePeso"
                     id="unidadePeso"
                     className="text-xs text-gray-600"
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
                     className="text-xs text-gray-600"
                  >
                     Peso Unitário
                  </label>
                  <input
                     id="quantidade"
                     name="quantidade"
                     className="bg-transparent border-b m-auto block border-gray-500
                  w-full mb-6 text-grey-700 pb-2"
                     type="number"
                  />
               </div>
            </div>
            <div>
               <button
                  id="colorBtnRemove"
                  name="colorBtnRemove"
                  type="button"
                  className="text-xs text-center border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
               >
                  - Retirar do Estoque
               </button>
            </div>
         </div>
      </div>
   );
};

export default Pecas;
