import axios from "axios";

export default function getImgData(userRequest, page) {
  return axios.get(`https://api.unsplash.com/photos/`, {
    params: {
      client_id: "_dU7nR9DSxtNejhZ6NiT7yiZISCh5zuBZM31VTBrYcU",
      query: `${userRequest}`,
      orientation: "landscape",
      page: `${page}`,
      per_page: "15",
    },
  });
}
