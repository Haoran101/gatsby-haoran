// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import '../styles/resume.css'
import ReactTooltip from 'react-tooltip';

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
  }
`


const ResumePage = ({ data }) => {

   console.log(data.resumeYaml.experience)

   return (
      <Layout>
         {/* Block of Experience and education timeline */}
         <div className="container py-3">

            <div className="col-md-12">
               <div id="content" className="content content-full-width">

                  <div className="profile-content">
                     <div className="tab-content p-0">
                        <div className="tab-pane fade active show" id="profile-post">
                           <h2 className='text-center'>Experience</h2>
                           <ul className="timeline">

                              {
                                 //Experience Blocks

                                 data.resumeYaml.experience.map((job) =>

                                    <li>
                                       <div className="timeline-time">
                                          <span className="date">Experience</span>
                                          <span className="time">{job.year}</span>

                                       </div>

                                       <div className="timeline-icon">
                                          &nbsp;
                                       </div>

                                       <div className="timeline-body text-dark text-start">
                                          <div className="timeline-header">
                                             <span className="username">{job.title}</span>
                                             <div className="row justify-content-between lead">

                                                <div className="col-6">
                                                   {job.company}
                                                </div>
                                                <div className="col-5">
                                                   {job.period}
                                                </div>
                                             </div>


                                          </div>
                                          <div className="timeline-content">
                                             <ul className='fw-normal mb-0 mt-0'>
                                                {
                                                   job.job.map((line) =>
                                                      <li className='py-1'>&#8730;&nbsp;{line}</li>)
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
                                       <div className="timeline-time">
                                          <span className="date">Education</span>
                                          <span className="time">{edu.year}</span>

                                       </div>

                                       <div className="timeline-icon">
                                          &nbsp;
                                       </div>

                                       <div className="timeline-body text-dark text-start">
                                          <div className="timeline-header">
                                             <span className="username">{edu.school}</span>
                                             <div class="row justify-content-between lead">
                                                <div class="col-5">
                                                   {edu.country}
                                                </div>
                                                <div class="col-5">
                                                   {edu.period}
                                                </div>
                                             </div>


                                          </div>
                                          <div className="timeline-content">
                                             <p className='fw-normal mb-0 mt-0'>
                                                {edu.degree.map((line) => <span className='text-capitalize'>{line}<br></br></span>)}
                                             </p>
                                          </div>


                                       </div>
                                    </li>
                                 )
                              }

                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='container'>
            <h2 className='my-5 text-center'>Skills</h2>
            <div className="icon-row mt-3 text-center">
               {
                  data.resumeYaml.skill
                     .map((skill) => {
                        if (skill.icon !== "NA") {

                           return <i className={skill.icon + " fa-4x"} data-tip={skill.name}></i>


                        } else {
                           const styleConstraint = {
                              maxHeight: "3.8rem",
                              verticalAlign: "bottom",
                              minHeight: "3rem",
                              display: "inline-block",
                              borderRadius: "10px"
                           }
                           let classname = skill.image.startsWith('BG--') ? "bg-light" : " ";
                           console.log(skill.name + " " + classname);
                           return <div className={classname} style={styleConstraint} >
                              <img src={skill.image.replace("BG--", "")} style={styleConstraint}
                                 alt={skill.name} data-tip={skill.name}
                              ></img><ReactTooltip></ReactTooltip></div>
                        }

                     }
                     )
               }
               <ReactTooltip></ReactTooltip>
            </div>
         </div>
      </Layout>
   )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Resume" />

// Step 3: Export your component
export default ResumePage