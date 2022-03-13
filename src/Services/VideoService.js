import axios from 'axios'



class VideoService {

    getAllVideos = async () => {
        try {
            const res = await axios.get('http://localhost:5001/video/getall')

            if (res.status === 200) return res
        } catch (e) {
            console.error(e.message)
            throw new Error('Не удалось получить видео!')
        }
    }

    getVideoDetails = async (id) => {
        try {
            const res = await axios.get(`http://localhost:5001/video/${id}`)

            if (res.status === 200) return res
        } catch (e) {
            console.error(e.message)
            throw new Error('Не удалось получить детали видео!')
        }
    }

    addVideoView = async (id) => {
        try {
            const res = await axios.get(`http://localhost:5001/video/${id}/addview`)

            if (res.status === 200 && res.data.success === true) return res
        } catch (e) {
            console.error(e)
            throw new Error('Не удалось добавить просмотр')
        }
    }
}

export default new VideoService()