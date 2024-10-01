import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup(){
 Promise.all([uploadPhoto, createUser])
    .then((res) => console.log(`${res[0]}`))
    .catch((err) => console.log('Signup system offline'))
}
