import React from "react";
import "../../Scss/About/_aboutblog.Scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faBook, faGlobe } from "@fortawesome/free-solid-svg-icons";
const AboutBlog = () => {
  const experience = [
    {icon: faPeopleGroup, title: "Experienced Team", content: 'Our Professionals with their vast experience ensures providing a holistic range of valuation services.'},
    {icon: faBook, title: "Extensive Track Records", content: 'We have experience on working on various valuation reports of listed as well as unlisted companies..'},
    {icon: faGlobe, title: "Ethical Standards", content: 'Our collaborative valuation services are aligned with globally accepted practices and ethical standards.'},
  ]
  return (
    <>
      <div className="aboutBlogSection">
        <div className="container">
          <div className="row">
            {/* our goal section */}
            <div className="col-12 mb-5">
              <h1 className="blog_title">
                Our goal is to make customers feel they’re secured
              </h1>
              <p className="blog_text">
                We are a reputable company specializing in valuation services,
                catering to a wide range of clients across various industries.
                With our extensive experience and expertise, we provide
                comprehensive and accurate assessments of the worth and
                potential of businesses, properties, assets, and investments.
              </p>
              <p className="blog_text">
                Our team of highly skilled professionals possesses deep
                knowledge of valuation methodologies and stays updated with the
                latest market trends and regulations. We employ a meticulous
                approach, utilizing robust analytical tools and industry
                benchmarks to deliver reliable and unbiased valuations.
              </p>
              <p className="blog_text">
                Our services encompass a broad spectrum, including business
                valuation for mergers and acquisitions, financial reporting,
                taxation purposes, litigation support, and strategic
                decision-making. We also offer property valuations for real
                estate transactions, portfolio management, insurance, and
                mortgage purposes.
              </p>
              <p className="blog_text">
                Client satisfaction is at the core of our business philosophy,
                and we strive to deliver timely and precise valuations that meet
                the unique requirements of each client. We understand the
                significance of our assessments in facilitating crucial
                financial decisions, and we maintain the highest standards of
                professionalism, integrity, and confidentiality throughout the
                valuation process.
              </p>
              <p className="blog_text">
                Whether you are a corporate entity, a financial institution, a
                legal firm, or an individual investor, we are committed to
                providing you with insightful and accurate valuation services
                that empower you to make informed decisions and maximize the
                value of your assets and investments.
              </p>
            </div>
            {/* our mission */}
            <div className="col-12 mb-5">
              <h1 className="blog_title1">Our Mission</h1>
              <p className="blog_text">
                1. Provide Accurate Valuation: Our mission is to deliver precise
                and reliable valuation services by employing industry-leading
                methodologies, advanced technologies, and a team of experienced
                professionals. We strive to ensure that our valuations meet the
                highest standards of accuracy and integrity.
              </p>
              <p className="blog_text">
              2. Empower Informed Decisions: We aim to empower our clients with the knowledge and insights they need to make informed decisions. By providing detailed and transparent valuation reports, we enable our clients to understand the true value of their assets, investments, or businesses, allowing them to navigate complex financial transactions and optimize their strategic choices.
              </p>
              <p className="blog_text">
              3. Foster Trust and Confidence: We are committed to building long-term relationships based on trust and confidence. Our mission is to instill trust in our clients through our expertise, professionalism, and commitment to delivering unbiased and objective valuations. We adhere to the highest ethical standards, ensuring that our clients receive impartial and reliable valuation services.
              </p>
              <p className="blog_text">
              4. Continuously Innovate: In a rapidly evolving financial landscape, we understand the importance of innovation. Our mission is to stay at the forefront of valuation practices, leveraging emerging technologies and industry trends to enhance the accuracy, efficiency, and accessibility of our services. We invest in ongoing research and professional development to provide our clients with cutting-edge solutions.
              </p>
              <p className="blog_text">
              5. Client-Centric Approach: We prioritize our clients' needs and objectives. Our mission is to understand their unique requirements, customize our valuation services accordingly, and provide exceptional client service throughout the valuation process. We aim to exceed our clients' expectations, building lasting partnerships based on responsiveness, collaboration, and mutual success.
              </p>
            </div>
             {/* our mission */}
             <div className="col-12">
              <h1 className="blog_title1">Our Vision</h1>
              <p className="blog_text">
              1. Provide Accurate Valuation: Our mission is to deliver precise and reliable valuation services by employing industry-leading methodologies, advanced technologies, and a team of experienced professionals. We strive to ensure that our valuations meet the highest standards of accuracy and integrity.
              </p>
            </div>
          </div>
          <div className="row mt-2">
          <h1 className="blog_title1">Why choose valugenius?</h1>
            {experience.map((val, index) => {
              return <div className="col-lg-4 col-12 mt-2 mb-lg-0 mb-4" key={index}>
              <div className="card text-center">
                <div className="card-body">
                <FontAwesomeIcon icon={val.icon} className="peopleIcon"/>
                  <h2 className="card-title">{val.title}</h2>
                  <p className="card-text">{val.content}</p>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBlog;
