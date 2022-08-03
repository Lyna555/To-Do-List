import Button from './Button'

const Header = ({onAdd,text,showAdd}) => {
  return (
    <header className="header">
        <h1>Task Tracker</h1>
        <Button onClick={onAdd} color={showAdd ? 'red' : 'cadetblue' } text={text} />
    </header>
  )
}

export default Header