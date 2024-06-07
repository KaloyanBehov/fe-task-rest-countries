const BASE_URL = "https://countryapi.io/api";
const fetcher = async (url: String, opts = {}) => {
  const response = await fetch(BASE_URL + url, {
    ...opts,
    headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN} ` },
  });

  const data = await response.json();
  return data;
};

export default fetcher;
