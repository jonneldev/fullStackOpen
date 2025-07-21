const Header = ({coursesName}) => {

    return (
        <div>
           {coursesName.map(course => <h2 key={course}>{course}</h2>)}
        </div>
    )
}

export default Header