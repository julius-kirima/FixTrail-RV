
export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h2>About FixTrail</h2>
                        <p>
                            FixTrail is a facility repair tracking system
                            designed to simplify how shared facility
                            problems are reported and managed.
                        </p>
                        <p>
                            It connects users and administrators through
                            a centralised platform where faults can be
                            reported, monitored and resolved efficiently.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780"
                            alt="Technician maintaining equipment"
                            className="about-image"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
