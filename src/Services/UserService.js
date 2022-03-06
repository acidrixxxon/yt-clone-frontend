import axios from "axios"


class UserService {

    login = async (user) => {
        try {
            const data = await axios.post('http://localhost:5001/user/login',user)
            
            return data.data
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    getMe = async (token) => {
        try {
            const res = await axios.get('http://localhost:5001/user/me',{
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })

            return res.data
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    myChannel = async (token) => {
        try {
            const res = await axios.get('http://localhost:5001/channel/mychannel',{
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })

            return res.data
        } catch (e) {
            console.error(e)
            throw new Error(e)
        }
    }
}


export default new UserService()