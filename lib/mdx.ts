import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type Frontmatter = {
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
};

export function getArticle(slug: string) {
    const fullPath = path.join(contentDir, `${slug}.mdx`);

    const source = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(source);

    return {
        frontmatter: data as Frontmatter,
        content,
    };
}

export function getAllSlugs() {
    const files = fs.readdirSync(contentDir);

    return files.map((file) => ({
        slug: file.replace(".mdx", ""),
    }));
}