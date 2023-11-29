

import React from 'react'
import '../../Scss/Ourteam/_teamdata.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TeamData = () => {
  const teamData = [
    {
      img: '../../public/jainam-shah.webp', 
      menubar_name: "CA Jainam Shah",
      education: 'FCA, Registered Valuer (SFA), DISA, Ind AS, ID (Q), B.Com',
      email_id: 'jainam@valugenius.in',
      dsignation: 'Founder',
      cell_no: '+91 8879195030',
      member_info: 'Jainam is an accomplished and highly regarded valuation expert with couple of years of experience in the field. With a deep understanding of valuation methodologies and a track record of delivering accurate and reliable valuation services, he assists clients in making informed financial decisions. Jainam expertise spans various industries, and he has provided valuation services for purposes such as mergers and acquisitions, financial reporting, startup valuation, fairness opinion, preferential issue of shares, Valuation of SME and listed companies.',
      member_info2: 'Jainam is a practicing Chartered Accountant having an overall post qualification experience of about 7 years. Jainam is partner of P K Chopra & Co, Chartered Accountants and is involved in Auditing and Taxation advisory practice of the firm. Before that Jainam was working with KPMG in International Taxation and Regulatory department.'
    },
    {
      img: '../../public/pulkit-agrawal.webp', 
      menubar_name: "CA Pulkit Agrawal",
      education: 'FCA, Registered Valuer (SFA), DISA, B.Com',
      designation: 'Co-Founder',
      cell_no: '+91 8698745001',
      email_id: 'pulkit@valugenius.in',
      member_info: 'Pulkit is a qualified Chartered Accountant and holds Diploma in Information Systems Audit (DISA). He is also a Registered Valuer (Securities and Financial Assets) – IBBI. Pulkit has six years of professional experience specializing in direct and indirect tax. With a strong background in accounting, financial management, and taxation, pulkit possess a deep understanding of the complexities and nuances of tax laws and regulations. Pulkit is proficient in analyzing financial data, conducting tax research, and staying up to date with the latest tax developments and amendments. Pulkit has strong analytical and problem-solving skills, which enable him to provide strategic tax advice tailored to the specific needs of clients. Pulkit is committed in delivering exceptional tax advisory and compliance services, contributing to the financial success of organizations, and fostering long-term client relationships.',
    },
    {
      img: '../../public/jimit-kothari.webp', 
      menubar_name: "CA Jimit Kothati",
      education: 'ACA, B.Com, CFA Level 2',
      designation: 'CEO',
      cell_no: '+91 9773123791',
      email_id: 'jimit@valugenius.in',
      member_info: 'Jimit is a skilled and dedicated Chartered Accountant with a passion for providing exceptional financial services and guidance to individuals and businesses. With 6 years of experience, Jimit has developed a strong expertise in various aspects of accounting, taxation, and financial management. His notable experience was with KPMG where he has spent 2.5 years assisting clients in their direct tax and international tax compliance and litigation matters. With a good understanding of financial analysis and market trends, Jimit also assist clients in making informed decisions based on the intrinsic worth of their assets.'
    }

  ]
  return (
    <div>
      <div className="teamData">
        <div className="container">
          <div className="row">
            <div className="col-12">
                <h1 className="team_title">Our Team</h1>
            </div>
          </div>
          <div className="row">
            {teamData.map((val, index) => {
              return <div className="col-12 mb-5" key={index}>
              <div className="card">
                <div className="row g-md-5">
                  <div className="col-md-3 col-12 mb-md-0 mb-5">
                      <img src={val.img} className='img-fluid' alt="" />
                  </div>
                  <div className="col-md-9 col-12">
                      <div className="card-body">
                        <h1 className="memberName">{val.menubar_name}</h1>
                        <div className='memberDesignation'>{val.designation}</div>
                        <p className='education'>{val.education}</p>
                        <div className='data d-sm-flex d-block align-item-center'>
                            <div className='number mb-sm-0 mb-4'><FontAwesomeIcon icon={faMobileScreen} className='icons'/>
                            <span className='ms-sm-3 ms-5 mobile_num'>{val.cell_no}</span>
                            </div>
                            <div className='number ms-sm-5'><FontAwesomeIcon icon={faEnvelope} className='icons'/>
                            <span className='ms-sm-3 ms-5 mobile_num'>{val.email_id}</span>
                            </div>
                        </div>
                        <p className='member_info'>{val.member_info}
                        </p>
                        <p className='member_info1'>
                          {val.member_info2}
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamData