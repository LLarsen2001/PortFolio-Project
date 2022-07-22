import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import ImageUpload from "../shared/ImageUpload"
import Image from 'react-bootstrap/Image'

const DemoProfileImage = () => {
  const  {user} = useContext(AuthContext)
  return (
    <div>
      <Image src={user.image} width={200} height={200} roundedCircle/>
      <h6>Add A Profile Picture</h6>
      <ImageUpload />
    </div>
  )
}

export default DemoProfileImage