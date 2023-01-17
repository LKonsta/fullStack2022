const App = () => {
  const course = {
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
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header name = {props.course.name} />
      <Content parts = {props.course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => 
        <div key={part.id}>            
          <Part part={part}/>  
        </div>         
      )}
      <CourseTotal parts = {props.parts}/>
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

  console.log(total)
  return (
    <h3> Total of {total} exercises </h3>
  )
}

export default App