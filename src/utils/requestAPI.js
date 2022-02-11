
import axios from "axios"

const YT_API_KEY = 'AIzaSyCi_vJ4gDMaKikfo0Q6iFRFEUOQQq0sKd4'

export const getRecommendations = async () => {
    try {
        const { items } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=10&key=${YT_API_KEY}`).then(res => res.data)
        return items;
    } catch (error) {
        console.log(error)
    }
}

export const getChannel = async (channelId) => {
    try {
        const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=${YT_API_KEY}`)

        return data
    } catch (error) {
        console.log(error)
    }
}