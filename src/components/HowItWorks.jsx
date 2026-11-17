
export default function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>How FixTrail Works</h2>
                    <p>Three simple steps to get facility problems resolved.</p>
                </div>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="process-card">
                            <div className="process-number">01</div>
                            <h4>Report a Fault</h4>
                            <p>
                                Submit a facility problem through our
                                simple reporting form.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="process-card">
                            <div className="process-number">02</div>
                            <h4>Receive Reference Number</h4>
                            <p>
                                Get a unique reference number to identify
                                and track your report.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="process-card">
                            <div className="process-number">03</div>
                            <h4>Track Progress</h4>
                            <p>
                                Check the repair status and follow updates
                                until the fault is resolved.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
