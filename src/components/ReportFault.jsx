
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'

export default function ReportFault() {
    const navigate = useNavigate()
    const { addReport } = useContext(AppContext)

    const [formData, setFormData] = useState({
        fullName: '',
        title: '',
        category: '',
        location: '',
        description: ''
    })

    const [error, setError] = useState('')
    const [submitting, setSubmitting] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setError('')

        // Remove accidental spaces before saving the report.
        const cleanedData = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [
                key,
                value.trim()
            ])
        )

        if (Object.values(cleanedData).some(value => !value)) {
            setError('Please complete all fields before submitting.')
            return
        }

        if (cleanedData.description.length < 10) {
            setError('Please provide a description of at least 10 characters.')
            return
        }

        setSubmitting(true)

        const referenceNumber = `FT-${Date.now()}`

        try {
            await addReport({
                ...cleanedData,
                referenceNumber,
                status: 'Pending',
                createdAt: new Date().toISOString()
            })

            setFormData({
                fullName: '',
                title: '',
                category: '',
                location: '',
                description: ''
            })

            navigate(`/track/${referenceNumber}`)
        } catch (error) {
            console.error('Report submission error:', error)
            setError('Unable to submit your report. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

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

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    className="form-control"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Fault Title</label>
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select
                                    id="category"
                                    name="category"
                                    className="form-select"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="Computer">Computer</option>
                                    <option value="Keyboard">Keyboard</option>
                                    <option value="Mouse">Mouse</option>
                                    <option value="Internet">Internet</option>
                                    <option value="Projector">Projector</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Location or Equipment ID</label>
                                <input
                                    id="location"
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Fault Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="form-control"
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            {error && (
                                <p className="text-danger" role="alert">{error}</p>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={submitting}
                            >
                                {submitting ? 'Submitting...' : 'Submit Report'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
