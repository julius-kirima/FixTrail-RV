
import { Link } from 'react-router'

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 mb-4">
                        <h4>FixTrail</h4>
                        <p>
                            A simple way to report facility problems
                            and track repair progress.
                        </p>
                    </div>

                    <div className="col-md-6 mb-4">
                        <h5>Quick Links</h5>

                        <ul className="footer-links">
                            <li>
                                <Link to="/#home" reloadDocument>Home</Link>
                            </li>

                            <li>
                                <Link to="/#about" reloadDocument>About</Link>
                            </li>

                            <li>
                                <Link to="/#how-it-works" reloadDocument>How It Works</Link>
                            </li>

                            <li>
                                <Link to="/#report-form" reloadDocument>Report a Fault</Link>
                            </li>

                            <li>
                                <Link to="/#track-progress" reloadDocument>Track Progress</Link>
                            </li>

                            <li>
                                <Link to="/#why-choose-fixtrail" reloadDocument>Why FixTrail</Link>
                            </li>

                            <li>
                                <Link to="/admin">Admin Dashboard</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr />

                <p className="text-center mb-0">
                    &copy; 2026 FixTrail. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
