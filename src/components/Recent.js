import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard';

function Recent() {
    const allContacts = useSelector(state=>state.allContacts);
    const recent = useSelector(state=>state.recent);
    const recentCalls = [];
    for(let i = recent.length-1;i>=0;i--){
        recentCalls.push(recent[i])
    }

    return (
        <div>
            {
                recentCalls.map((e)=>{
                    let currContact = {}
                    allContacts.forEach((ele)=>{
                        if(ele.id===e){
                            currContact = ele;
                        }
                    })
                    return(<ContactCard name={currContact.name} mobile={currContact.mobile} isFav={currContact.isFav} id={currContact.id}/>)
                })
                    }
        </div>
    )
}

export default Recent
