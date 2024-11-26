import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parseISO, compareAsc, format } from 'date-fns';

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

        // Отримуємо дату без часу
        const dateWithoutTime = format(parseISO(matterResult.data.date), 'yyyy-MM-dd');

        // Комбінувати дані з id
        return {
            id,
            ...matterResult.data,
            dateWithoutTime,
        };
    });

    // Групуємо пости за датою
    const groupedPosts = allPostsData.reduce((groups, post) => {
        const group = groups.find(g => g.date === post.dateWithoutTime);
        if (group) {
            group.posts.push(post);
        } else {
            groups.push({
                date: post.dateWithoutTime,
                posts: [post]
            });
        }
        return groups;
    }, []);

    // Сортуємо пости всередині кожної групи за часом (від найдавнішого до найновішого)
    groupedPosts.forEach(group => {
        group.posts.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
    });

    // Сортуємо групи за датою (від найдавнішої до найновішої)
    return groupedPosts.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
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
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Використовуємо gray-matter для розбору секції метаданих поста
  const matterResult = matter(fileContents);

  // Використовуємо remark для перетворення markdown у HTML-рядок
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString()
    // Додаємо атрибут data-language
    .replace(/<pre><code class="language-(\w+)">/g, (match, lang) => 
      `<pre data-language="${lang}"><code class="language-${lang}">`
    )
    // Додаємо обгортку span для кожного рядка коду
    .replace(/<pre data-language="([^"]+)"><code class="[^"]+">([^<]+)<\/code><\/pre>/g, (match, lang, code) => {
      const lines = code.split('\n').map(line => 
        `<span>${line}</span>`
      ).join('\n');
      return `<pre data-language="${lang}"><code class="language-${lang}">${lines}</code></pre>`;
    });

  // Об'єднуємо дані з id та contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
