import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobForm from '../components/JobForm';
import EditJobForm from '../components/shared/EditJobForm';
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
  
  return (
    <Tabs
      defaultActiveKey="details"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="details" title="Job Details">
        {props.add ? (<JobForm />) : <EditJobForm /> }
      </Tab>
      <Tab eventKey="notes" title="Notes">
        <NoteForm />
        {JSON.stringify(notes)}
      </Tab>
      <Tab eventKey="documents" title="Documents">
        <p>Documents Section Goes Here</p>
      </Tab>
    </Tabs>
  );
}

export default TabsDemo;