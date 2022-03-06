
import axios from 'axios'

class ChannelService {

    getChannelById = async (id) => {
        try {
            const res = await axios.get(`http://localhost:5001/channel/${id}`)

            return res
        } catch (e) {
            console.log(e)
            throw new Error('Ошибка получения данных',e)
        }
    }
}


export default new ChannelService()