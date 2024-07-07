import {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext) 

    if (!user) return <div className='inline-flex w-60 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'>Please Login</div>

    return <div className='inline-flex w-60 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'>Welcome  {user.username}</div>

}

export default Profile