import Link from "next/link";

export default function Home() {
   return (
      <main className="min-h-screen flex flex-col bg-gray-300">
         <div className="text-2xl text-black text-left py-10 w-full mx-auto flex pl-5 justify-center">
            TECIDOS
         </div>
         <div className="flex justify-center gap-24">
            <Link href="/tecido/cadastro">
               <div>
                  <button
                     type="button"
                     className="min-h-20 rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
                  >
                     CADASTRO DE TECIDO
                  </button>
               </div>
            </Link>
            <Link href="/tecido/estoque">
               <div>
                  <button
                     type="button"
                     className="min-h-20 rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
                  >
                     ESTOQUE DE TECIDOS
                  </button>
               </div>
            </Link>
            <Link href="/tecido/saida">
               <div>
                  <button
                     type="button"
                     className="min-h-20 rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
                  >
                     SAÍDA DE TECIDOS
                  </button>
               </div>
            </Link>
         </div>
         <div className="text-2xl text-black text-left py-10 w-full mx-auto flex justify-center pl-5">
            PEÇAS
         </div>
         <div className="flex justify-center gap-24">
            <Link href="/peca/cadastro">
               <div>
                  <button
                     type="button"
                     className="min-h-20 rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
                  >
                     CADASTRA PEÇAS
                  </button>
               </div>
            </Link>
            <Link href="/peca/estoque">
               <div>
                  <button
                     type="button"
                     className="min-h-20 rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
                  >
                     ESTOQUE DE PEÇAS
                  </button>
               </div>
            </Link>
            <Link href="/peca/saida">
               <div>
                  <button
                     type="button"
                     className="min-h-20 rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
                  >
                     SAÍDA DE PEÇAS
                  </button>
               </div>
            </Link>
         </div>
      </main>
   );
}
