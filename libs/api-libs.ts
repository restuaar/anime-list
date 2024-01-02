import axios from "axios";

export async function getAnimeResponse(resource: string, query: string = "") {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await axios
    .get(`${baseUrl}/${resource}?${query}`)
    .then((data) => data.data)
    .catch((e) => console.log(e));

  return data;
}

export async function getNestedAnimeResponse(
  resource: string,
  prop: string = ""
) {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item: any) => item[prop]);
}

export function getSliceAnime(data: any, gap: number = 5) {
  let x = Math.random() * (data.length - gap);

  return {
    data: data.slice(x, x + gap),
  };
}
