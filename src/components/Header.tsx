import {Link} from 'react-router-dom'

function Header(){
    return(
        <div>여긴 헤더입니다
            <nav className="navigation">
                <Link to="/">main</Link>
                <Link to="/post">post</Link>
                <Link to="/login">login</Link>
                <Link to="*">404</Link>
            </nav>
        </div>
    )
}

export default Header;