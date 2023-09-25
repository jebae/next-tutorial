const API_ENDPOINT = "https://api.thecatapi.com/v1";

export const getCatImages = async () => {
  const res = await fetch(
    `${API_ENDPOINT}/images/search?format=json&limit=10`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env["API_KEY"]!,
      },
    }
  );

  return await res.json();
};
