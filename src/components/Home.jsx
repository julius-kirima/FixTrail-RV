
import { Link } from 'react-router'

export default function Home() {
    return (
        <main id="home" className="hero-section">

            {/* Highlights the main FixTrail services through rotating slides. */}
            <div
                id="fixTrailCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                            className="d-block w-100"
                            alt="Technician working on equipment"
                        />

                        <div className="carousel-caption">
                            <h1>Welcome to FixTrail</h1>
                            <h2>Report Facility Problems</h2>
                            <p>
                                A simple and reliable way to report facility faults,
                                receive reference numbers and follow repair progress
                                from submission to resolution.
                            </p>

                            <div className="hero-buttons">
                                <Link to="/#report-form" reloadDocument className="btn btn-primary">
                                    Report a Fault
                                </Link>

                                <Link to="/#track-progress" reloadDocument className="btn btn-outline-light">
                                    Track Progress
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                            className="d-block w-100"
                            alt="Modern shared workspace"
                        />

                        <div className="carousel-caption">
                            <h1>Better Facility Management</h1>
                            <h2>Keep Problems Organised</h2>
                            <p>
                                FixTrail brings facility fault reporting and
                                maintenance management into one centralised
                                platform, helping administrators organise
                                reports and manage repairs efficiently.
                            </p>

                            <div className="hero-buttons">
                                <Link to="/#report-form" reloadDocument className="btn btn-primary">
                                    Report a Fault
                                </Link>

                                <Link to="/#track-progress" reloadDocument className="btn btn-outline-light">
                                    Track Progress
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                            className="d-block w-100"
                            alt="Electronic equipment"
                        />

                        <div className="carousel-caption">
                            <h1>Stay Updated on Repairs</h1>
                            <h2>Track Every Report</h2>
                            <p>
                                Every submitted fault receives a unique
                                reference number. Use it to check the current
                                repair status and follow progress until
                                the reported problem is resolved.
                            </p>

                            <div className="hero-buttons">
                                <Link to="/#report-form" reloadDocument className="btn btn-primary">
                                    Report a Fault
                                </Link>

                                <Link to="/#track-progress" reloadDocument className="btn btn-outline-light">
                                    Track Progress
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#fixTrailCarousel"
                    data-bs-slide="prev"
                    aria-label="Previous slide"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#fixTrailCarousel"
                    data-bs-slide="next"
                    aria-label="Next slide"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>

        </main>
    )
}
