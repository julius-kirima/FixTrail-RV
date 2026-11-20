
import { Link } from 'react-router'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">

                    <Link to="/" reloadDocument className="navbar-brand fw-bold">
                        FixTrail
                    </Link>

                    {/* Bootstrap handles the mobile navigation menu. */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fixTrailNavbar"
                        aria-controls="fixTrailNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="fixTrailNavbar">
                        <div className="navbar-nav ms-auto">

                            <Link to="/#home" reloadDocument className="nav-link">
                                Home
                            </Link>

                            <Link to="/#about" reloadDocument className="nav-link">
                                About
                            </Link>

                            <Link to="/#how-it-works" reloadDocument className="nav-link">
                                How It Works
                            </Link>

                            <Link to="/#report-form" reloadDocument className="nav-link">
                                Report Fault
                            </Link>

                            <Link to="/#track-progress" reloadDocument className="nav-link">
                                Track Progress
                            </Link>

                            <Link to="/#why-choose-fixtrail" reloadDocument className="nav-link">
                                Why FixTrail
                            </Link>

                            <Link to="/admin" className="nav-link">
                                Admin Dashboard
                            </Link>

                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}
