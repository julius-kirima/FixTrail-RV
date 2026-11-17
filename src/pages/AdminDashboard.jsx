
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { API_URL } from '../api'
import { API_URL } from '../api'

export default function AdminDashboard() {
    const [reports, setReports] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    

    async function fetchReports() {
        try {
            setLoading(true)
            setError('')

            const response = await fetch(API_URL)

            if (!response.ok) {
                throw new Error('Failed to fetch reports')
            }

            const data = await response.json()
            setReports(data)

        } catch (error) {
            console.error('Fetch reports error:', error)
            setError('Unable to load fault reports. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchReports()
    }, [])

    async function updateStatus(id, status) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            })

            if (!response.ok) {
                throw new Error('Failed to update report status')
            }

            const updatedReport = await response.json()

            setReports((previousReports) =>
                previousReports.map((report) =>
                    report.id === id ? updatedReport : report
                )
            )

        } catch (error) {
            console.error('Update status error:', error)
            setError('Unable to update the report status.')
        }
    }

    async function deleteReport(id) {
        const confirmed = window.confirm(
            'Are you sure you want to delete this fault report?'
        )

        if (!confirmed) return

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Failed to delete report')
            }

            setReports((previousReports) =>
                previousReports.filter((report) => report.id !== id)
            )

        } catch (error) {
            console.error('Delete report error:', error)
            setError('Unable to delete the report.')
        }
    }

    return (
        <main className="container py-5">

            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                <div>
                    <h2>Admin Dashboard</h2>
                    <p className="text-muted">
                        Manage and monitor submitted fault reports.
                    </p>
                </div>

                <div className="d-flex gap-2">
                    <Link
                        to="/"
                        reloadDocument
                        className="btn btn-outline-primary"
                    >
                        Back to Website
                    </Link>

                    <button
                        className="btn btn-primary"
                        onClick={fetchReports}
                    >
                        Refresh Reports
                    </button>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h5>Total Fault Reports</h5>
                    <h2>{reports.length}</h2>
                </div>
            </div>

            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}

            {loading ? (
                <p>Loading reports...</p>
            ) : reports.length === 0 ? (
                <div className="alert alert-info">
                    No fault reports have been submitted yet.
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>Reference Number</th>
                                <th>Full Name</th>
                                <th>Fault Title</th>
                                <th>Category</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {reports.map((report) => (
                                <tr key={report.id}>
                                    <td>{report.referenceNumber}</td>
                                    <td>{report.fullName}</td>
                                    <td>{report.title}</td>
                                    <td>{report.category}</td>
                                    <td>{report.location}</td>

                                    <td>
                                        <select
                                            className="form-select"
                                            value={report.status}
                                            onChange={(event) =>
                                                updateStatus(
                                                    report.id,
                                                    event.target.value
                                                )
                                            }
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Resolved">Resolved</option>
                                        </select>
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteReport(report.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </main>
    )
}
