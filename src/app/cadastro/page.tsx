export default function Cadastro() {
   return (
      <main>
         <div className="grid justify-items-center shadow-md flex-shrink md:flex-shrink-0 py-20">
            <div className="w-3/5 bg-white">
               <div className="p-8">
                  <div
                     className="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center
                  hover:bg-indigo-400 rounded-full cursor-pointer hidden"
                  ></div>
                  <div className="text-2xl text-black text-center">
                     Cadastre Uma Nota Fiscal
                  </div>
                  <form>
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
                     <div className="pt-6">
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
           text-gray-700 pb-1"
                           type="text"
                           placeholder=""
                        />
                     </div>
                     <div>
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
           text-gray-700 pb-1"
                           type="text"
                           placeholder=""
                        />
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
                     <div className="pt-6">
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
            w-full mb-6 text-grey-700 pb-1"
                           type="number"
                           placeholder=""
                        />
                     </div>
                     <div className="">
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
                           className="bg-transparent border-b m-auto block border-gray-500
            w-full mb-6 text-grey-700 pb-1"
                           type="number"
                           placeholder=""
                        />
                     </div>
                     <div>
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
                     </div>
                     <div>
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
                     </div>
                     <input
                        className="shadow-lg mt-3 pt-3 pb-3 w-full text-white bg-indigo-500
                  hover:bg-indigo-400 rounded-full cursor-pointer "
                        type="submit"
                        value="Clique para cadastrar"
                     />
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
         </div>
      </main>
   );
}
