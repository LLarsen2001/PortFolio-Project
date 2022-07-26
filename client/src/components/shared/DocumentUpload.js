import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import SingleImageUpload from "./SingleImageUpload"


const DocumentUpload = ()=>{
  const  {user, setUser} = useContext(AuthContext)
  return (
      <div>
          <SingleImageUpload id={user.id} setUser={setUser} />
      </div>
  )
}

export default DocumentUpload