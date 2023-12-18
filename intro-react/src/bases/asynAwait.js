// const getImagePromise = () =>
//   new Promise((resolve) => resolve("https://www.google.com"));
// getImagePromise().then(console.log);

const getImage = async () => {
  try {
    const api_key = "hYyTKPgCOGBA1J3CkpQQq7Xa5OgSB189";
    const httpCall = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await httpCall.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};
getImage();
