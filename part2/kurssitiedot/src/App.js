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
        <p key={part.id}>            
          <Part part={part}/>  
        </p>         
      )}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part.name} {props.part.exercises} </p>
    </div>
  )
}

export default App