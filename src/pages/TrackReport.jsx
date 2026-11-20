
import { useContext } from 'react'
import { useParams, Link } from 'react-router'
import Header from '../components/Header'
import { AppContext } from '../context/AppContext'

export default function TrackReport() {
    const { referenceNumber } = useParams()
    const { reports, loading } = useContext(AppContext)

    // Match the reference number without depending on letter casing.
    const report = reports.find(
        (item) =>
            item.referenceNumber?.toLowerCase() === referenceNumber?.trim().toLowerCase()
    )

    const statusClass = report?.status === 'Resolved'
        ? 'bg-success'
        : report?.status === 'In Progress'
            ? 'bg-primary'
            : 'bg-warning text-dark'

    return (
        <>
            <Header />

            <main className="container py-5" style={{ paddingTop: '100px' }}>

                <h2>Track Your Fault Report</h2>

                <p>
                    Reference Number: <strong>{referenceNumber}</strong>
                </p>

                {loading && <p>Loading report...</p>}

                {!loading && !report && (
                    <div className="alert alert-danger">
                        No report found with this reference number.
                    </div>
                )}

                {!loading && report && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h4 className="card-title">{report.title}</h4>

                            <p><strong>Full Name:</strong> {report.fullName}</p>
                            <p><strong>Category:</strong> {report.category}</p>
                            <p><strong>Location:</strong> {report.location}</p>
                            <p><strong>Description:</strong> {report.description}</p>

                            <p>
                                <strong>Repair Status:</strong>{' '}
                                <span className={`badge ${statusClass}`}>
                                    {report.status}
                                </span>
                            </p>

                            <p>
                                <strong>Submitted:</strong>{' '}
                                {report.createdAt
                                    ? new Date(report.createdAt).toLocaleString()
                                    : 'Date unavailable'}
                            </p>
                        </div>
                    </div>
                )}

                <Link to="/" reloadDocument className="btn btn-primary mt-4">
                    Back to Website
                </Link>

            </main>
        </>
    )
}
