import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const getAllArticles = page => {
  const dir = join(process.cwd(), `src/pages/${page}/_articles`);
  const files = fs.readdirSync(dir);
  const articlesData = files.map(file => {
    const fileHandle = fs.readFileSync(join(dir, file));
    let { data } = matter(fileHandle);
    const slug = page + '/' + file.replace(/\.[^.]+$/, '');
    return {
      data,
      slug,
    };
  });
  return articlesData;
};

export const getParams = page => {
  const dir = join(process.cwd(), `src/pages/${page}/_articles`);
  const files = fs.readdirSync(dir);
  const params = files.map(file => file.replace(/\.[^.]+$/, ''));
  return params;
};

export const getArticleByFile = (page, file) => {
  const path = join(process.cwd(), `src/pages/${page}/_articles/${file}.md`);
  const fileHandle = fs.readFileSync(path);
  const { data, content } = matter(fileHandle);
  return { data, content };
};
