const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
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

export default App