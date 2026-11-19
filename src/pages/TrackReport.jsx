
import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import Header from '../components/Header'
import { AppContext } from '../context/AppContext'

export default function TrackReport() {
    const { referenceNumber } = useParams()
    const { reports, loading } = useContext(AppContext)

    const [report, setReport] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        if (loading) return

        const foundReport = reports.find(
            (item) => item.referenceNumber === referenceNumber
        )

        if (foundReport) {
            setReport(foundReport)
            setError('')
        } else {
            setReport(null)
            setError('No report found with this reference number.')
        }
    }, [reports, loading, referenceNumber])

    return (
        <>
            <Header />

            <main className="container py-15" style={{ paddingTop: '100px' }}>

                <h2>Track Your Fault Report</h2>

                <p>
                    Reference Number: <strong>{referenceNumber}</strong>
                </p>

                {loading && <p>Loading report...</p>}

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                {report && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h4 className="card-title">{report.title}</h4>

                            <p><strong>Full Name:</strong> {report.fullName}</p>
                            <p><strong>Category:</strong> {report.category}</p>
                            <p><strong>Location:</strong> {report.location}</p>
                            <p><strong>Description:</strong> {report.description}</p>

                            <p>
                                <strong>Repair Status:</strong>{' '}
                                <span className="badge bg-warning text-dark">
                                    {report.status}
                                </span>
                            </p>

                            <p>
                                <strong>Submitted:</strong>{' '}
                                {new Date(report.createdAt).toLocaleString()}
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
