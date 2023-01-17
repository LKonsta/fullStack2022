import React from 'react'

const Course = (props) => {
    return (
      <div>
        <h1>Web development curriculum</h1>
        {props.courses.map(courses =>
          <div key={courses.id}>
            <Header name={courses.name}/>
            <Content cont={courses.parts}/>
          </div>
        )}
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <div>
        <h2> {props.name} </h2>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.cont.map(part => 
          <div key={part.id}>            
            <Part part={part}/>  
          </div>         
        )}
        <CourseTotal parts = {props.cont}/>
        </div>
    )
  }
  
  const Part = (props) => {
    return (
      <p> {props.part.name} {props.part.exercises} </p>
    )
  }
  
  const CourseTotal = (props) => {
    const exerciseArray = props.parts.map(e => e.exercises)
    const total = exerciseArray.reduce(( ini, cV ) => ini + cV)
  
  
    return (
      <h3> Total of {total} exercises </h3>
    )
  }

  export default Course