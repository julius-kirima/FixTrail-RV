
import { useState } from 'react'
import { useNavigate } from 'react-router'


export default function TrackProgress() {
    const [referenceNumber, setReferenceNumber] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        if (!referenceNumber.trim()) {
            setError('Please enter your report reference number.')
            return
        }

        setError('')

        navigate(`/track/${encodeURIComponent(referenceNumber.trim())}`)
    }

    return (
        <>
           

            <section id="track-progress" className="track-progress-section">
                <div className="container">

                    <div className="text-center">
                        <h2>Track Your Repair</h2>
                        <p>
                            Enter your report reference number to check its progress.
                        </p>
                    </div>

                    <form
                        className="track-progress-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter report reference number"
                                value={referenceNumber}
                                onChange={(event) => setReferenceNumber(event.target.value)}
                                required
                            />

                            <button type="submit" className="btn btn-primary">
                                Track Report
                            </button>
                        </div>

                        {error && (
                            <p className="text-danger mt-2">{error}</p>
                        )}
                    </form>

                </div>
            </section>
        </>
    )
}
