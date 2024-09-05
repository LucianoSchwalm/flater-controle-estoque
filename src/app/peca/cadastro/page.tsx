"use client";
export default function CadastroPeca() {
   return (
      <main className="min-h-screen bg-gray-300">
         <div className="text-2xl text-gray-600 px-10 pt-10">
            CORTE DE PEÇAS
         </div>
         <div className="text-gray-600 px-10 py-10">
            INSIRA AS PEÇAS FINALIZADAS
         </div>
         <form action="">
            <div className="flex flex-col">
               <div className="flex gap-24">
                  <div className="pl-10">
                     <label htmlFor="tecido" className="text-xs text-gray-500">
                        Peça
                     </label>
                     <select
                        className="bg-transparent w-full py-1.5 px-3 text-gray-800 border-b border-gray-500
                                 transition duration-500 focus:outline-none focus:border-black rounded"
                     >
                        <option value="Viscolaycra">Calça moletom</option>
                        <option value="Moletim">Blusa Gola V</option>
                     </select>
                  </div>
                  <div className="text-xl uppercase text-gray-500 flex flex-row justify-center gap-10">
                     <div className="flex flex-col">
                        <label htmlFor="p">p</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="p"
                           id="p"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="m">m</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="m"
                           id="m"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="g">g</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="g"
                           id="g"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="gg">gg</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="gg"
                           id="gg"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="xgg">xgg</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="xgg"
                           id="xgg"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="g1">g1</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="g1"
                           id="g1"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="g2">g2</label>
                        <input
                           className="max-w-8"
                           type="number"
                           name="g2"
                           id="g2"
                        />
                     </div>
                  </div>
                  <div className="pt-3">
                     <button
                        id="colorBtnAdd"
                        name="colorBtnAdd"
                        type="button"
                        className="text-xs text-blue-500 text-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 
                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:border-blue-500
                                 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                     >
                        + Adicione uma Peça
                     </button>
                  </div>
               </div>
            </div>
         </form>
      </main>
   );
}
