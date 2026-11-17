
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import Header from '../components/Header'
import { API_URL } from '../api'

export default function TrackReport() {
    const { referenceNumber } = useParams()

    const [report, setReport] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchReport() {
            try {
                setLoading(true)
                setError('')
                setReport(null)

                const response = await fetch(
                    `${API_URL}/fault_reports?referenceNumber=${encodeURIComponent(referenceNumber)}`
                )

                if (!response.ok) {
                    throw new Error('Failed to retrieve report')
                }

                const data = await response.json()

                if (data.length === 0) {
                    setError('No report found with this reference number.')
                } else {
                    setReport(data[0])
                }

            } catch (error) {
                console.error('Report retrieval error:', error)
                setError('Unable to retrieve your report. Please try again.')
            } finally {
                setLoading(false)
            }
        }

        fetchReport()
    }, [referenceNumber])

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
