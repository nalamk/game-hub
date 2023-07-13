import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"0f74d6fea4ac451da4089b3c07d26cb7"
    }
})