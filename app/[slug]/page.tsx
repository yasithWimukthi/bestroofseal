import { getArticle, getAllSlugs } from "@/lib/mdx";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return getAllSlugs();
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;

    const article = getArticle(slug);

    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            <p className="text-green-600 font-semibold">
                {article.frontmatter.category}
            </p>

            <h1 className="mt-4 text-5xl font-bold">
                {article.frontmatter.title}
            </h1>

            <p className="mt-6 text-lg text-gray-600">
                {article.frontmatter.description}
            </p>

            <hr className="my-10" />

            <article className="prose prose-slate max-w-none">
                <pre>{article.content}</pre>
            </article>
        </main>
    );
}