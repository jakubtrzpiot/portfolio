import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getAllArticles = () => {
  const dir = join(process.cwd(), `src/pages/blog/_articles`);
  const files = fs.readdirSync(dir);
  const articlesData = files.map(file => {
    const fileHandle = fs.readFileSync(join(dir, file));
    let { data } = matter(fileHandle);
    const slug = file.replace(/\.[^.]+$/, '');
    return {
      data,
      slug,
    };
  });
  return articlesData;
};

export const getParams = () => {
  const dir = join(process.cwd(), `src/pages/blog/_articles`);
  const files = fs.readdirSync(dir);
  const params = files.map(file => file.replace(/\.[^.]+$/, ''));
  return params;
};

export const getArticleBySlug = slug => {
  const path = join(process.cwd(), `src/pages/blog/_articles/${slug}.md`);
  const fileHandle = fs.readFileSync(path);
  const { data, content } = matter(fileHandle);
  return { data, content };
};
