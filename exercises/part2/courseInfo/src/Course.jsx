import Header from './Header'
import Content from './Content'

const Course = ({courses}) => {
    
    console.log(courses)
    const coursesName = courses.map(course => course.name)
    const coursesParts = courses.map(course => course.parts)

    return (
        <div>
            <Header coursesName={coursesName}/>
            <Content coursesParts={coursesParts}/> 
        </div>
    )
}

export default Course