import React from 'react'
import Card from './Card';
export default function Dashboard() {
  return (
    <div style={{display:'flex',flexGrow: '1',flexDirection:'row',flexWrap:'wrap',alignItems:"center",justifyContent:'center',paddingTop:'40px',width:'75%'}}>
        <Card job='Carpenter' username='hacksh4w'/>
        <Card job='Plumber' username='hacksh4w'/>
        <Card job='Electrician' username='hacksh4w'/>
        <Card job='Gardner' username='hacksh4w'/>
        <Card job='Nurse' username='hacksh4w'/>
        <Card job='Carpenter' username='hacksh4w'/>
    </div>
  )
}
