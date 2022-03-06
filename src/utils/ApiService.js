import axios  from 'axios'

class ApiService {

    createVideo = async (video) => {
         try {
            const data = axios.post('http://localhost:5001/video/uploadfile',video,{
                headers: {
                    "Content-Type": "multipart/form-data" 
                }
            })
            return data
         } catch (error) {
             console.log(error)
         }
    }

    getVideos = async () => {
        try {
            const res = await axios.get('http://localhost:5001/video/getall')
           
            return res.data.videos
            
        } catch (error) {
            console.log(error)
            throw new Error(error)
            
        }
    }

    getVideoById = async (videoId) => {
        try {
            const res = await axios.get(`http://localhost:5001/video/${videoId}`)
            
            return res
        } catch (error) {
            console.log(error.message)
            alert(error)
            throw new Error(error)
        }
    }
}


export default new ApiService()