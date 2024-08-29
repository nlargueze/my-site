import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function load({ params, fetch }) {
    const directoryPath = path.join(process.cwd(), 'static/content');
    let posts = [];

    try {
        const files = await fs.readdir(directoryPath);

        for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const content = await fs.readFile(filePath, 'utf-8');
            const { data: meta, content: markdownContent } = matter(content);
            posts.push({ file, meta,  });
        }
    } catch (error) {
        console.error('Error reading directory:', error);
    }

    return { posts };
}