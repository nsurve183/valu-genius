import React from "react";
import "../../Scss/Blog/_blog.scss";
import { Link } from "react-router-dom";

const BlogHome = () => {
    const latestBlog = [
        {
        img: "../../public/blog-1.webp",
        title: "What Factors Are To Be Considered While Doing Business Valuation?",
        date: 'November 21,2023'
     },
     {
        img: "../../public/blog-2.webp",
        title: "The role of financial projections in Startup valuation",
        date: ' October 23, 2023'
     },
     {
        img: "../../public/blog-3.webp",
        title: "Valuation Guide: Types, Myths & Importance",
        date: 'September 20, 2023'
     }
]

const blogs = [
    {
        blogImg: "../../public/blog-1.webp",
        blogTitle: " What Factors Are To Be Considered While Doing Business Valuation?",
        blog_date: ' November 2021 |',
        blog_span: 'Business Valuation',
        blog_text: ' Valuation Guide: Types, Myths & Importance Business valuation is the process of determining the economic worth or value of a business or company. It is a critical financial assessment that helps stakeholders understand the value of a business for various purposes, such as selling, buying, financing, investing, or making strategic decisions. Business valuation is not [...]'
    },
    {
        blogImg: "../../public/blog-2.webp",
        blog_date: ' October 23, 2023 |',
        blog_span: 'Valuation',
        blogTitle: "The role of financial projections in Startup valuation",
        blog_text: "The role of financial projections in startup valuation Financial projections play a significant role in company valuation by providing a forward-looking view of a company's expected financial performance. These projections are crucial in assessing the potential risks and rewards associated with an investment. Here's how financial projections influence company valuation: Estimating Future Cash Flows: Financial [...]"
    },
    {
        blogImg: "../../public/blog-3.webp",
        blogTitle: "Valuation Guide: Types, Myths & Importance",
        blog_date: 'September 20, 2023 |',
        blog_span: 'Knowledge Base',
        blog_text: 'Valuation Guide: Types, Myths & Importance Business valuation is the process of determining the economic worth or value of a business or company. It is a critical financial assessment that helps stakeholders understand the value of a business for various purposes, such as selling, buying, financing, investing, or making strategic decisions. Business valuation is not [...]'
    },
]
  return (
    <>
      <div className="blogSection">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-8 col-12" >
            {blogs.map((val, index) => {
                return <div className="card mb-5" key={index}>
                  <img src={val.blogImg} alt="pic not found" />
                  <div className="card-body">
                    <h5 className="date">
                      {val.blog_date}
                      <span className="date_span ms-2">{val.blog_span}</span>
                    </h5>
                    <h1 className="blog_title">
                     {val.blogTitle}
                    </h1>
                    <p className="blog_text">
                        {val.blog_text}
                    </p>
                    <Link className="blog_link">Read More</Link>
                  </div>
                </div>
            })}
              </div>
            <div className="col-lg-4 col-12">
              <div className="row">
                <div className="col-12 mb-5">
                  <div className="searchSection">
                    <label htmlFor="" className="form-lable">
                      Search
                    </label>
                    <div className="d-flex">
                      <input type="text" className="form-control" />
                      <button className="btn">Search</button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="latestBlog">
                    <h2 className="latest_title">LATEST BLOG</h2>
                    <div className="latestblogSection">
                    {latestBlog.map((val,index) => {
                        return  <div className="row mb-5"key={index}>
                        <Link className="col-4">
                          <img
                            src={val.img}
                            className="img-fluid"
                            alt="pic not found"
                          />
                        </Link>
                        <div className="col-8">
                          <div className="blogContent">
                            <Link className="content_title">
                            {val.title}
                            </Link>
                            <p className="blog_date text-muted">
                            {val.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
