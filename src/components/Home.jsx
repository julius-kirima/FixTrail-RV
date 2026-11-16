export default function Home() {
    return (
        <main id="home" className="hero-section">

            <div
                id="fixTrailCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2000"
            >

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                            className="d-block w-100"
                            alt="Technician working on equipment"
                        />
                        <div className="carousel-caption">
                            <h2>Report Facility Problems</h2>
                            <p>Report faults and help keep shared facilities working.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                            className="d-block w-100"
                            alt="Modern shared workspace"
                        />
                        <div className="carousel-caption">
                            <h2>Manage Maintenance</h2>
                            <p>Keep track of reported facility problems.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                            className="d-block w-100"
                            alt="Electronic equipment"
                        />
                        <div className="carousel-caption">
                            <h2>Track Repair Progress</h2>
                            <p>Follow the progress of reported faults.</p>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button"
                    data-bs-target="#fixTrailCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button"
                    data-bs-target="#fixTrailCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>

        </main>
    )
}