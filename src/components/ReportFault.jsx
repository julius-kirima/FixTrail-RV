
export default function ReportFault() {
    return (
        <section id="report-form" className="report-section">
            <div className="row g-0 align-items-stretch">

                <div className="col-md-6">
                    <img
                        src="https://images.unsplash.com/photo-1581092921461-eab62e97a780"
                        alt="Technician repairing equipment"
                        className="report-image"
                    />
                </div>

                <div className="col-md-6">
                    <div className="report-form-container">
                        <h2>Report a Fault</h2>
                        <p>Help us keep shared facilities working properly.</p>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Fault Title</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select className="form-select">
                                    <option value="">Select category</option>
                                    <option>Computer</option>
                                    <option>Keyboard</option>
                                    <option>Mouse</option>
                                    <option>Internet</option>
                                    <option>Projector</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Location or Equipment ID</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Fault Description</label>
                                <textarea className="form-control" rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Submit Report
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}
