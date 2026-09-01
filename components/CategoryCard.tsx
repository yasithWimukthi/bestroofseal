import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
    title: string;
    description: string;
    href: string;
};

export default function CategoryCard({
                                         title,
                                         description,
                                         href,
                                     }: CategoryCardProps) {
    return (
        <Link href={href}>
            <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-green-600">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </article>
        </Link>
    );
}