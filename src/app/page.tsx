import Link from "next/link";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-row justify-center p-24 gap-10 bg-gray-300">
         <Link href="cadastro" className="h-fit">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  CADASTRO DE TECIDO
               </button>
            </div>
         </Link>
         <Link href="tecidos" className="h-fit">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  ESTOQUE DE TECIDOS
               </button>
            </div>
         </Link>
         <Link href="estoque" className="h-fit">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  SAÍDA DO ESTOQUE
               </button>
            </div>
         </Link>
         <Link href="pecas" className="h-fit">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  CORTE DE PEÇAS
               </button>
            </div>
         </Link>
         <Link href="saida" className="h-fit">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  SAÍDA DE PEÇAS
               </button>
            </div>
         </Link>
      </main>
   );
}
