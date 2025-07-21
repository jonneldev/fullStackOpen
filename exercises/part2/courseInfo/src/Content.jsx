const Part = ({parts}) => {

    return (
        <div>
            {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
            <h4>
                total of {parts.reduce((totalExercises, part) => totalExercises + part.exercises, 0)} exercises
            </h4>
        </div>
    )
}

const Content = ({coursesParts}) => {
   console.log(coursesParts)
    return (
        <div>
            {coursesParts.map(course => <Part key={course} parts={course}/>)}
        </div>
    )
}

export default Content

