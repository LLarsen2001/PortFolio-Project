import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobForm from '../components/JobForm';

function TabsDemo(props) {
  const [add, setAdd] = useState(false)
  return (
    <Tabs
      defaultActiveKey="details"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="details" title="Job Details">
        <EditJobForm props={props}/>
      </Tab>
      <Tab eventKey="notes" title="Notes">
        <p>Notes Section Goes Here</p>
      </Tab>
      <Tab eventKey="documents" title="Documents">
        <p>Documents Section Goes Here</p>
      </Tab>
    </Tabs>
  );
}

export default TabsDemo;