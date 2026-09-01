import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getArticle(slug: string) {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);

    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
        frontmatter: data,
        content,
    };
}

export function getAllSlugs() {
    const files = fs.readdirSync(contentDirectory);

    return files.map((file) => ({
        slug: file.replace(".mdx", ""),
    }));
}