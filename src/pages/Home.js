import React from 'react';
import './styles/Home.css';
import Astronauts from '../images/astronauts.svg'
import PlatziConfLogo from '../images/platziconf-logo.svg'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render(){
        return(
            <div className="Home text-center">
                <div className="container d-flex justify-content-center w-100 h-100">
                <div className="row w-100 h-100 d-flex align-items-center">
                    <div className="col-md-4 ">
                        <img src={PlatziConfLogo} alt=""/>
                        <h3 className='fw-bolder mt-2'>Print your badge</h3>
                        <h5>The easiest way to manage your conference</h5>
                        <Link to = "/badges">
                        <button className= "btn btn-primary">
                            Start Now
                        </button>
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <img src={Astronauts} alt="" className= 'w-75'/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home