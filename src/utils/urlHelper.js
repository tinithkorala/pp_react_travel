const createdUrl = (...segments) => {
  return [import.meta.env.VITE_SERVER_BASE_URL, ...segments].join('/');
}

export const urlAPIHelper = (urlString) => {
  return [import.meta.env.VITE_SERVER_API_PATH, ...urlString].join('/');
};

export const urlImageHelper = (urlString, image) => {
  return createdUrl(
    import.meta.env.VITE_SERVER_IMAGE_PATH,
    urlString,
    image
  );
}
