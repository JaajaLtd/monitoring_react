import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import Rightmodal from './Rightmodal'
import Footer from './Footer'

class EscalatedEmergencyComplaints extends Component {
    render () {
        return (
            <div id='main-wrapper'>
                    <Navbar />
                    <Sidebar />
                    <div class="page-wrapper"  style={{marginBottom:'50px'}}>
                        <div class="container-fluid" style={{marginTop:'80px'}}>
                        <Breadcrumb/>
            <div className=''>
                Testing Escalated Emergency Complaints
            </div>
            
            <Rightmodal />
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}
export default EscalatedEmergencyComplaints;