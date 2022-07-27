import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobForm from '../components/JobForm';
import Job from '../components/Pages/Job';
import DocumentUpload from '../components/shared/DocumentUpload';
import EditJobForm from '../components/shared/EditJobForm';
import NoteCard from '../components/shared/NoteCard';
import NoteForm from '../components/shared/NoteForm';
import { FormDataContext } from '../providers/FormDataProvider';

function TabsDemo(props) {
  const [notes, setNotes] = useState([])
  const { job } = useContext(FormDataContext)

  useEffect(()=> {
    getNotes()
  }, [])

  const getNotes = async () => {
    try {
      console.log(job[0].id)
      let res = await axios.get(`/api/userjobs/${job[0].id}/notes`)
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
      {props.add &&
      <Tab eventKey="details" title="Job Details">
        <JobForm />
      </Tab>}
      <Tab eventKey="notes" title="Notes">
        <NoteForm />
        {renderNotes()}
      </Tab>
      <Tab eventKey="documents" title="Documents">
        <DocumentUpload id={job[0].id}/>
      </Tab>
    </Tabs>
  );
}

export default TabsDemo;