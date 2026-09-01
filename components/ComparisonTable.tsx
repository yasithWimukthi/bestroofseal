import { Star } from "lucide-react";

export type ComparisonProduct = {
    name: string;
    bestFor: string;
    rating: number;
};

type ComparisonTableProps = {
    title: string;
    products: ComparisonProduct[];
};

export default function ComparisonTable({
                                            title,
                                            products,
                                        }: ComparisonTableProps) {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

            <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[600px]">
                    <thead>
                    <tr className="border-b text-left">
                        <th className="pb-4 font-semibold">Product</th>
                        <th className="pb-4 font-semibold">Best For</th>
                        <th className="pb-4 font-semibold">Rating</th>
                        <th className="pb-4"></th>
                    </tr>
                    </thead>

                    <tbody>
                    {products.map((product) => (
                        <tr
                            key={product.name}
                            className="border-b last:border-none hover:bg-slate-50"
                        >
                            <td className="py-5 font-semibold">{product.name}</td>

                            <td className="py-5 text-gray-600">{product.bestFor}</td>

                            <td className="py-5">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    {product.rating}
                                </div>
                            </td>

                            <td className="py-5 text-right">
                                <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}