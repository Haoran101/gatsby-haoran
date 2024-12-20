// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/resume.css'
import ReactTooltip from 'react-tooltip';
import ResumeFile from "../content/readme/resume/Wei Haoran Resume.pdf"

export const query = graphql`
  query ($id: String) {
    resumeYaml(id: {eq: $id}) {
      skill {
         name
         icon
         image
      }
      experience {
        company
        description
        job
        period
        year
        skills
        title
      }
      education {
        country
        degree
        period
        school
        year
      }
    }

    allFile(filter: {relativePath: {regex: "/images\\/icons\\//"}}) {
      nodes {
         relativePath
         childImageSharp {
            gatsbyImageData(height: 45, layout: FIXED)
         }
      }
   }
  }
`


const ResumePage = ({ data }) => {

   const getImageByPath = (path) => {
      const imageNode = data.allFile.nodes.find(
        (file) => file.relativePath === path
      )
      return getImage(imageNode?.childImageSharp)
    }

   return (
      <Layout>
         {/* Block of Experience and education timeline */}
         <div className="container py-3"><div className="col-md-12"><div id="content" className="content content-full-width">
            <div className="profile-content"><div className="tab-content p-0"><div className="tab-pane fade active show" id="profile-post">
               <h2 className='text-center'>Experience</h2>
               <ul className="timeline">
         {
            //Experience Blocks

            data.resumeYaml.experience.map((job) =>

               <li>
                  <div className="timeline-time d-none d-lg-block">
                     <span className="date">Experience</span>
                     <span className="time">{job.year}</span>

                  </div>

                  <div className="timeline-body text-dark text-start">
                     <div className="timeline-header">
                        <span className="username">{job.title}</span>
                        <div className="row justify-content-between lead">

                           <div className="col-6 subtitle">
                              {job.company}
                           </div>
                           <div className="col-6 text-end subtitle">
                              {job.period}
                           </div>
                        </div>


                     </div>
                     <div className="timeline-content">
                        <ul className='fw-normal timeline-content'>
                           {
                              job.job.map((line) =>
                                 <li className='experience-content'>&#8730;&nbsp;{line}</li>)
                           }
                        </ul>
                     </div>
                     <div className="timeline-footer text-start">
                        {
                           job.skills.map((skill) =>
                              <span className="badge badge-pill badge-secondary px-1 mr-1 my-1">{skill}</span>
                           )
                        }
                     </div>

                  </div>
               </li>
            )
         }

         {
            //Education Blocks

            data.resumeYaml.education.map((edu) =>

               <li>
                  <div className="timeline-time d-none d-lg-block">
                     <span className="date">Education</span>
                     <span className="time">{edu.year}</span>

                  </div>

                  <div className="timeline-body text-dark text-start">
                     <div className="timeline-header">
                        <span className="username">{edu.school}</span>
                        <div class="row justify-content-between lead">
                           <div class="col-6 subtitle">
                              {edu.country}
                           </div>
                           <div class="col-6 subtitle text-end">
                              {edu.period}
                           </div>
                        </div>


                     </div>
                     <div className="timeline-content">
                        <p className='fw-normal mb-0 mt-0'>
                           {edu.degree.map((line) => <span className='text-capitalize experience-content'>{line}<br></br></span>)}
                        </p>
                     </div>


                  </div>
               </li>
            )
         }

         </ul></div></div></div></div></div></div>
         
         <div className='container'>
            <h2 className='my-3 text-center'>Skills</h2>
            <div className="icon-row mt-3 text-center">
               {
                  
                  data.resumeYaml.skill
                     .map((skill) => {
                        if (skill.icon !== "NA") {
                           return <i className={skill.icon + " fa-3x"} data-tip={skill.name}></i>
                        } else {

                           const styleConstraint = {
                              maxHeight: "3rem",
                              verticalAlign: "bottom",
                              minHeight: "2.5rem",
                              display: "inline-block",
                              borderRadius: "10px"
                           }
                           // let classname = skill.image.startsWith('BG--') ? "bg-light" : " ";
                           const image = getImageByPath(skill.image)
                           
                           return Object.keys(image || {}).length ? <div style={styleConstraint} data-tip={skill.name}><GatsbyImage image={image} alt={skill.name}/></div>: null
                              
                        }

                     }
                     )
               }
               <ReactTooltip></ReactTooltip>
            </div>
         </div>
         <a href={ResumeFile} download class="float d-flex align-items-center justify-content-center">
         <i class="fa-solid fa-arrow-down my-float"></i>
         </a>
         <footer className="mt-auto text-light text-center footer-container">
        <a href="tel:+6585101992" className='mx-3'>
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:wei.haoran@hotmail.com" className='mx-3'>
          <i className="fa-solid fa-at"></i>
        </a>
        <a href="https://www.linkedin.com/in/haoran-wei-6b3a571a5/" className='mx-3'>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Haoran101" className='mx-3'>
        <i className="fa-brands fa-github"></i>
        </a>
      </footer>
      </Layout>
   )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Resume" />

// Step 3: Export your component
export default ResumePage