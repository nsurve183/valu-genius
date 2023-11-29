

import React from 'react';
import '../../Scss/Ourteam/_ourteambanner.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const TeamBanner = () => {
  return (
    <div>
        <div className="ourTeamSection">
            <h1 className='our_title'>Our Team</h1>
            <Link to={'/'} className='our_text'>
                Home <FontAwesomeIcon icon={faAngleRight} className='teamicon'/> <span className='team_span'>Our Team</span>
            </Link>
        </div>
    </div>
  )
}

export default TeamBanner