export const useDecodeLink = (encodedLink) => {
  const link = decodeURIComponent(encodedLink);
  return link;
};
