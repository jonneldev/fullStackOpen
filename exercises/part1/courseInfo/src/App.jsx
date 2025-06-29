const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  )
}
const Content = ({part, exercises}) => {
  return (
    <div>
      <Part part={part[0]} exercises={exercises[0]} />
      <Part part={part[1]} exercises={exercises[1]} />
      <Part part={part[2]} exercises={exercises[2]} />
    </div>
  )
}

const Total = ({exercises}) => {
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const part = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]
  return (
    <div>
      <Header course={course} />
      <Content part={part} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App