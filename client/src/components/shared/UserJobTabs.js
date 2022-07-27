import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AuthContext } from '../../providers/AuthProvider';
import { FormDataContext } from '../../providers/FormDataProvider';
import { UserJobsContext } from '../../providers/UserJobsProvider';
import DocumentUpload from './DocumentUpload';
import NoteCard from './NoteCard';
import NoteForm from './NoteForm';

function UserJobTabs(props) {
  const [notes, setNotes] = useState([])
  const { job } = useContext(FormDataContext)
  const { user } = useContext(AuthContext)
  const { userJob } = useContext(UserJobsContext)

  useEffect(()=> {
    getNotes()
  }, [])

  const getNotes = async () => {
    try {
      console.log(userJob[0].id)
      let res = await axios.get(`/api/userjobs/${userJob[0].id}/notes`)
      setNotes(res.data)
    } catch(err) {
      alert("Error occurred getting notes")
    }
  }

  const renderNotes = () => {
    return notes.map(n => {
      return (<div className='jobpage'>
        <NoteCard key={n.id} {...n} />
      </div>
      )
    })
  }
  
  return (
    <Tabs
      defaultActiveKey={props.add ? "details" : "notes" }
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="notes" title="Notes">
        <NoteForm />
        {renderNotes()}
      </Tab>
      <Tab eventKey="documents" title="Documents">
        <DocumentUpload id={userJob[0].id}/>
      </Tab>
    </Tabs>
  );
}

export default UserJobTabs;