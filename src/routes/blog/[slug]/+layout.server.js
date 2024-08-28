import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function load({ params, fetch }) {
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'static/content', `${slug}.md`);

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        const { data: meta, content: markdownContent } = matter(content);
        const htmlContent = marked(markdownContent);
        return { post: { meta, htmlContent } };
    } catch (error) {
        console.error('Error reading file:', error);
        return { post: null };
    }
}