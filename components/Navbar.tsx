import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <Link href="/" className="text-2xl font-bold text-slate-900">
                    BestRoofSeal
                </Link>

                <nav className="hidden gap-8 md:flex">
                    <Link href="/roof-sealants" className="text-gray-600 hover:text-green-600">
                        Roof Sealants
                    </Link>

                    <Link href="/roof-coatings" className="text-gray-600 hover:text-green-600">
                        Roof Coatings
                    </Link>

                    <Link href="/leak-repair" className="text-gray-600 hover:text-green-600">
                        Leak Repair
                    </Link>

                    <Link href="/gutters" className="text-gray-600 hover:text-green-600">
                        Gutters
                    </Link>
                </nav>
            </div>
        </header>
    );
}