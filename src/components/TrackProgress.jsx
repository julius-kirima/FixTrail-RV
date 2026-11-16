export default function TrackProgress() {
    return (
        <section id="track-progress" className="track-progress-section">
            <div className="container">
                <div className="text-center">
                    <h2>Track Your Repair</h2>
                    <p>Enter your report reference number to check its progress.</p>
                </div>

                <form className="track-progress-form">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter report reference number"
                        />

                        <button type="submit" className="btn btn-primary">
                            Track Report
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}