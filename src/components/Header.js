import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} color='green' text='Add' />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }
// And also add double curly brace style attribute to h1 tag

export default Header
