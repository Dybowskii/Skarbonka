import logo from '../Images/savings.png'

function Nav()
{
    return <header>
        <div className="parent-nav-left-section">
        <img src={logo} alt="Piggy bank icon"></img>
        <h1 className="parent-nav-title">SKARBONKA</h1>
        
        </div>
        <div className="parent-nav-right-section">
        <button className="bellIcon"></button>
        <button className="gearIcon"></button>
        </div>
    </header>
}
export default Nav;