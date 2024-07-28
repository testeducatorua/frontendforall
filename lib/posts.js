import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// npm install remark remark-html
import { remark } from 'remark';
import html from 'remark-html';


const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Отримати назви файлів у папці /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Видалити ".md" з назви файлу, щоб отримати id
        const id = fileName.replace(/\.md$/, '');

        // Прочитати файл markdown як рядок
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Використовувати gray-matter для аналізу розділу метаданих поста
        const matterResult = matter(fileContents);

        // Комбінувати дані з id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Сортувати пости за датою
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}


export async function getPostData(id) {
  // const fullPath = path.join(postsDirectory, '${id}.md');
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Використовуємо gray-matter для розбору секції метаданих поста
  const matterResult = matter(fileContents);

  // Використовуємо remark для перетворення markdown у HTML-рядок
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Об'єднуємо дані з id та contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
