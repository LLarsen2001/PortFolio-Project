import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobForm from '../components/JobForm';
import EditJobForm from '../components/shared/EditJobForm';

function TabsDemo(props) {
  
  return (
    <Tabs
      defaultActiveKey="details"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="details" title="Job Details">
        {props.add ? (<JobForm />) : <EditJobForm id = {props.id}/> }
      </Tab>
      <Tab eventKey="notes" title="Notes">
        {JSON.stringify(props)}
        <p>Notes Section Goes Here</p>
      </Tab>
      <Tab eventKey="documents" title="Documents">
        <p>Documents Section Goes Here</p>
      </Tab>
    </Tabs>
  );
}

export default TabsDemo;