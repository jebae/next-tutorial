const API_ENDPOINT = "https://api.thedogapi.com/v1";

const HEADERS = {
  "Content-Type": "application/json",
  "x-api-key": process.env["API_KEY"]!,
};

export const getDogImages = async () => {
  const res = await fetch(
    `${API_ENDPOINT}/images/search?format=json&limit=10`,
    { headers: HEADERS }
  );

  return await res.json();
};

export const getDog = async (id: string) => {
  const res = await fetch(
    `${API_ENDPOINT}/images/${id}`,
    { headers: HEADERS }
  );

  return await res.json();
};
