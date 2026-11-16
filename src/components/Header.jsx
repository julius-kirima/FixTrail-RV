
import { Link } from 'react-router'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        FixTrail
                    </Link>

                    <div className="navbar-nav ms-auto">
                        <Link to="/#home" reloadDocument className="nav-link">
                            Home
                        </Link>

                        <Link to="/#report-form" reloadDocument className="nav-link">
                            Report Fault
                        </Link>

                        <Link to="/#reports" reloadDocument className="nav-link">
                            Fault Reports
                        </Link>

                        <Link to="/admin" className="nav-link">
                            Admin Dashboard
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
