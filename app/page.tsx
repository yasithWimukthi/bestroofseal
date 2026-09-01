import CategoryCard from "@/components/CategoryCard";

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-green-50 to-white">
                <div className="mx-auto max-w-7xl px-6 py-24">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Independent Product Reviews
          </span>

                    <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-slate-900">
                        Find the Best Roof Sealants & Leak Repair Products
                    </h1>

                    <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-600">
                        Expert buying guides, side-by-side comparisons, and honest
                        reviews to help homeowners choose roofing products that actually
                        work.
                    </p>

                    <button className="mt-8 rounded-xl bg-green-600 px-7 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
                        Browse Buying Guides
                    </button>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Popular Categories
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Start with the category that matches your roofing project.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <CategoryCard
                        title="Roof Sealants"
                        description="Best sealants for shingles, metal, RV & flat roofs."
                        href="/roof-sealants"
                    />

                    <CategoryCard
                        title="Roof Coatings"
                        description="Compare silicone, acrylic, rubber and elastomeric roof coatings."
                        href="/roof-coatings"
                    />

                    <CategoryCard
                        title="Leak Repair"
                        description="Roof patch kits, flashing sealants and emergency leak solutions."
                        href="/leak-repair"
                    />

                    <CategoryCard
                        title="Gutter Protection"
                        description="Gutter guards, drainage systems and moisture prevention products."
                        href="/gutters"
                    />
                </div>
            </section>
        </main>
    );
}