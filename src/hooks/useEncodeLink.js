export const useEncodeLink = (link) => {
  const encodedLink = encodeURIComponent(link);
  return encodedLink;
};
