
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import ReportFault from '../components/ReportFault'
import TrackProgress from '../components/TrackProgress'
import WhyChooseFixTrail from '../components/WhyChooseFixTrail'
import Footer from '../components/Footer'

export default function LandingPage() {
    return (
        <div className="landing-page">
            <Header />

            <main>
                <Home />
                <About />
                <HowItWorks />
                <ReportFault />
                <TrackProgress />
                <WhyChooseFixTrail />
            </main>

            <Footer />
        </div>
    )
}
