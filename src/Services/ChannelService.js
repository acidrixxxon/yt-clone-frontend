
import axios from 'axios'

class ChannelService {

    getChannelById = async (id) => {
        try {
            const res = await axios.get(`http://localhost:5001/channel/${id}`)

            return res
        } catch (e) {
            console.log(e.message)
            throw new Error('Ошибка получения данных',e.message)
        }
    }
    
    getChannelVideos = async (id) => {
        try {
            const res = await axios.get(`http://localhost:5001/channel/${id}/videos`)

            if (res.status === 200) return res
        } catch (e) {
            console.log(e.message)
            throw new Error('Не удалось получить видео канала',e.message)
        }
    }

    subscribeOnChannel = async (id,token) => {
        try {
            const res = await axios.get(`http://localhost:5001/channel/${id}/subscribe`,{
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })

            return res
        } catch (e) {
            console.log(e.message)
            throw new Error('Не удалось отправить запрос на сервер для подписки',e.message)
        }
    }

    unsubscribeOnChannel = async (id,token) => {
        try {
            const res = await axios.get(`http://localhost:5001/channel/${id}/unsubscribe`,{
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })

            return res
        } catch (e) {
            console.log(e.message)
            throw new Error('Не удалось отправить запрос на сервер для отписки',e.message)
        }
    }
}


export default new ChannelService()