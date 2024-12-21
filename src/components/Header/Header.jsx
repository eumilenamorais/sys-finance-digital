import { Plus } from "phosphor-react";

export default function Header() {
    return (
        <header className="bg-[#f1f1f1] flex justify-between items-center p-4">
            <div>
                <h1 className="font-semibold">Detalhes dos Produtos</h1>
            </div>
            <div className="space-x-4 flex">
                <input type="text" placeholder="Pesquisar" className="border border-[#118DC0] px-6 py-1 rounded placeholder:text-[#118DC0]"/>
                <button className="bg-[#118DC0] text-white py-1 px-4 rounded hover:bg-[#426b7b] transition-all duration-300 flex items-center gap-2" > <Plus size={16} /> Novo Produto</button>
            </div>
        </header>
    )
}