import { NotePencil, TrashSimple } from "phosphor-react";

export default function Table({ products }) {
    console.log(products)
    return (
        <table className="w-full text-center">
            <thead className="bg-[#F7FBFD] text-gray-400 border-b">
                <tr>
                    <th className="font-normal py-2">ID</th>
                    <th className="font-normal py-2">Nome</th>
                    <th className="font-normal py-2">Preço</th>
                    <th className="font-normal py-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <tr key={product.id} className="border-b hover:bg-gray-100 transition-all duration-300">
                            <td className="py-2">{product.id}</td>
                            <td className="py-2">{product.name}</td>
                            <td className="py-2">R$ {product.price},00</td>
                            <td>
                                <div className="flex gap-2 items-center justify-center py-2">
                                    <div
                                        className="bg-[#118DC0] rounded p-2 text-white
                                cursor-pointer hover:bg-[#426b7b] transition-all
                                duration-300"
                                    >
                                        <NotePencil size={16} />
                                    </div>
                                    <div
                                        className="bg-red-600 rounded p-2 text-white
                                cursor-pointer hover:bg-red-800 transition-all duration-300"
                                    >
                                        <TrashSimple size={16} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}