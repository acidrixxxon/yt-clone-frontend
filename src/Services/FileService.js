import axios from "axios"




class FileService {

    uploadFile = async (video) => {
        try {
            const res = axios.post('http://localhost:5001/video/uploadfile',video,{
                headers: {
                    "Content-Type": "multipart/form-data" 
                }
            })

            return res
         } catch (error) {
             console.log(error)
         }
    }
}

export default new FileService()