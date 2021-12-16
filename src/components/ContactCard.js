import React from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { toggle_fav } from '../actions';
import { recent } from '../actions';
import CallIcon from '@mui/icons-material/Call';
import '../../src/Styles.css'

const styles = {
    container : {
        flex:'1',
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        boxShadow:"0px 1px 0px 0px"
    },
    infoContainer : {
        flex: 1,
        paddingLeft: '8px',
        paddingRight: '8px'
    },
    mobile : {
        fontSize: '14px',
        color: 'grey'
    }
}

function stringToColor(string) {
    let hash = 0;
    let i;
  

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
  
    return color;
  }
  
function stringAvatar(name) {
    return {
        sx: {
        bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function ContactCard(props) {
    const dispatch = useDispatch();

    return (
        <div style={styles.container}>
            <div>
                <Avatar {...stringAvatar(props.name)} />
            </div>
            <div style={styles.infoContainer}>
                {props.name}
                <br/>
                <span style={styles.mobile}>+91 {props.mobile}</span>
            </div>
                <span style={{marginRight:"8px",cursor:"pointer"}} onClick={()=>{
                    dispatch(recent(props.id))
                }}>
                    <CallIcon/>
                </span>
                <Rating
                    name="simple-controlled"
                    value={props.isFav}
                    max={1}
                    onChange={(event, newValue) => {
                        dispatch(toggle_fav(props.id))
                    }}
                />
                
            
        </div>
    )
}

export default ContactCard
