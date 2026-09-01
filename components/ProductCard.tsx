import { Star, CheckCircle } from "lucide-react";

type ProductCardProps = {
    name: string;
    category: string;
    rating: number;
    badge: string;
    pros: string[];
};

export default function ProductCard({
                                        name,
                                        category,
                                        rating,
                                        badge,
                                        pros,
                                    }: ProductCardProps) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl">
            <div className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {badge}
            </div>

            {/* Temporary product image */}
            <div className="flex h-48 items-center justify-center rounded-xl bg-slate-100">
                <span className="text-sm text-gray-500">Product Image</span>
            </div>

            <p className="mt-5 text-sm font-medium text-green-600">{category}</p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">{name}</h3>

            <div className="mt-3 flex items-center gap-2">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{rating}</span>
                <span className="text-gray-500">/ 5</span>
            </div>

            <div className="mt-5 space-y-2">
                {pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{pro}</span>
                    </div>
                ))}
            </div>

            <button className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
                Check Best Price
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
                We may earn a commission from qualifying purchases.
            </p>
        </article>
    );
}