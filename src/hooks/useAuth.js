import { useSelector } from "react-redux"

const useAuth = () => {
    const { user } = useSelector(state => state)

    if (user === null) return user.user

    return user
}

export default useAuth