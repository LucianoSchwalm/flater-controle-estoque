import Link from "next/link";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-row justify-center p-24 gap-10 bg-white">
         <Link href="/cadastro">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  CADASTRO DE TECIDO
               </button>
            </div>
         </Link>
         <Link href="tecidos">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  LISTA DE TECIDOS
               </button>
            </div>
         </Link>
         <Link href="pecas">
            <div>
               <button
                  type="button"
                  className="rounded-lg px-8 py-2 text-xl border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-blue-100 duration-300"
               >
                  CORTE DE PEÇAS
               </button>
            </div>
         </Link>
         <Link href="saida">
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
