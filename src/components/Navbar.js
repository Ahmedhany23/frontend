import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
    <div className="container">
      <NavLink to="/">
        <h1>Workout Buddy</h1>
      </NavLink>
    </div>
  </header>
  )
}
