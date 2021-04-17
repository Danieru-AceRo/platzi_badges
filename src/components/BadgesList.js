import React from 'react';
import './styles/BadgesList.css'
import twitterLogo from '../images/twitterLogo.svg';
import Gravatar from './Gravatar'
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {
    render(){
        return(
            <div className="BadgesList">
            <ul className ="list-unstyled ">
            {this.props.badges.map((badge) => {
                const twitter = badge.twitter
                return (
                    
                    <li key= {badge.id}>
                        <Link to ={`/badges/${badge.id}/edit`} className='text-reset text-decoration-none'>
                            <div className="BadgesListItem">
                                <Gravatar 
                                    email={badge.email} 
                                    alt="" 
                                    className='BadgesListItem__avatar' />
                                <div className="BadgesListItem__info row">
                                    <p className= 'col-12'>
                                    {badge.firstName} {badge.lastName}
                                    </p>
                                    <p className= 'col-12'>
                                    <img src= {twitterLogo}  alt="Twitter Logo" className= 'twitterLogo'/>
                                    <a href= {'https://twitter.com/'+twitter} target="blank">{twitter}</a>
                                    </p>
                                    <p className= 'col-12'>
                                        {badge.jobTitle}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            })}
            </ul>
            </div>
        )
    }
}

export default BadgesList