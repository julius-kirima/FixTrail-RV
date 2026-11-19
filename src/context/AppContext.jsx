
import { createContext, useEffect, useState } from 'react'
import { API_URL } from '../api'

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [reports, setReports] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchReports() {
        try {
            setLoading(true)

            const response = await fetch(API_URL)

            if (!response.ok) {
                throw new Error('Failed to fetch reports')
            }

            const data = await response.json()
            setReports(data)

        } catch (error) {
            console.error('Fetch reports error:', error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    async function addReport(report) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(report)
        })

        if (!response.ok) {
            throw new Error('Failed to submit report')
        }

        const newReport = await response.json()
        setReports((previousReports) => [...previousReports, newReport])

        return newReport
    }

    async function updateStatus(id, status) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        })

        if (!response.ok) {
            throw new Error('Failed to update report')
        }

        const updatedReport = await response.json()

        setReports((previousReports) =>
            previousReports.map((report) =>
                report.id === id ? updatedReport : report
            )
        )
    }

    async function deleteReport(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error('Failed to delete report')
        }

        setReports((previousReports) =>
            previousReports.filter((report) => report.id !== id)
        )
    }

    useEffect(() => {
        fetchReports().catch(() => {})
    }, [])

    return (
        <AppContext.Provider
            value={{
                reports,
                loading,
                fetchReports,
                addReport,
                updateStatus,
                deleteReport
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
