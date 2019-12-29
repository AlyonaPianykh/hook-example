import uniqid from 'uniqid';

export const bestSellerFormatter = (data) => {
  if (!data) return [];
  const { results } = data;

  return results.map(({ title, description, author }) => ({
    id: uniqid(),
    title,
    author,
    description
  }));
};