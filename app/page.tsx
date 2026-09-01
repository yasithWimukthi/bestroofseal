import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
    {
        badge: "Best Overall",
        name: "Liquid Rubber Waterproof Sealant",
        category: "Flat & Rubber Roofs",
        rating: 4.9,
        pros: [
            "Excellent waterproofing",
            "UV resistant finish",
            "Easy DIY application",
        ],
    },
    {
        badge: "Best for RV",
        name: "Dicor Self-Leveling Lap Sealant",
        category: "RV Roofing",
        rating: 4.8,
        pros: [
            "Self-leveling formula",
            "Ideal for RV roofs",
            "Long-lasting flexibility",
        ],
    },
    {
        badge: "Best Metal Roof",
        name: "Geocel 2300 Sealant",
        category: "Metal Roofing",
        rating: 4.7,
        pros: [
            "Strong adhesion",
            "Weather resistant",
            "Professional-grade quality",
        ],
    },
    {
        badge: "Best Budget",
        name: "Flex Seal Liquid Rubber",
        category: "Roof Leak Repair",
        rating: 4.6,
        pros: [
            "Budget friendly",
            "Fast drying",
            "Great for small leaks",
        ],
    },
];

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
            {/* Featured Products */}

            <section className="bg-slate-100 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
        Editor's Choice
      </span>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            Best Roof Sealants of 2026
                        </h2>

                        <p className="mt-4 text-lg text-gray-600">
                            Our highest-rated products based on durability, waterproofing and
                            ease of application.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-3">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.name} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}