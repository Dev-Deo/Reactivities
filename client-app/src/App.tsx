import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Header, List } from 'semantic-ui-react';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5269/api/activities').then((response)=>{
      setActivities(response.data);
      console.log(response.data);
    })
  },[])
  return (
    <div className="App">
      <Header as="h2" icon='users' content='Reactivities'/>
      <List>
        {activities.map((activity: any)=>(
           <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>

      {/* <ul>
        {activities.map((activity:any)=>(
          <li key={activity.id}> {activity.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
