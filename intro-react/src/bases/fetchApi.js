const api_key = "hYyTKPgCOGBA1J3CkpQQq7Xa5OgSB189";

const httpCall = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
);

httpCall
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
