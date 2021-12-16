import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Recent from './components/Recent';
import AllContacts from './components/AllContacts';
import Favorite from './components/Favorites';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import NewContactModal from './components/NewContactModal';
import './Styles.css'

const store = createStore(allReducers)

export default function App() {
  const [value, setValue] = React.useState(1);

  return (
    <Provider store={store}>
      <div className='core'>
      <div className='Main'>
      <Box style={{ width: "100%",margin:"auto",border:"1px black solid",display:"flex",flexDirection:"column",height:"95vh"}}>
        <div className='Header'>
        {(value===0)&&(<h2>Recents</h2>)}
        {(value===1)&&(<h2>All Contacts</h2>)}
        {(value===2)&&(<h2>Favorite</h2>)}
        </div>
        
        <div className='Content'>
        {(value===0)&&(<Recent/>)}
        {(value===1)&&(<AllContacts/>)}
        {(value===2)&&(<Favorite/>)}
        </div>
        <BottomNavigation style={{width:"100%",backgroundColor:"grey",paddingLeft:"5px",paddingRight:"5px"}}
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="All Contacts" icon={<PersonIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <NewContactModal/>
        </BottomNavigation>
      </Box>
      </div>
      </div>
    </Provider>
  );
}