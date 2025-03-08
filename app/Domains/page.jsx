import "./page.css";
import Image from "next/image";


export default function Domains() {
    return (
        <div className="page-container">
            <div>
                <div className="page-header">Discover the Domains</div>
                <div className="page-sub-header">Select your expertise and embark on a journey of innovation and excellence. 🚀</div>
            </div>
            <div className="domain-cards">
                {/* AI/ML Domain Card */}
                <div className="domain-card">
                    <div className="domain-card-svg">
                        <Image
                            src="/ai.svg"
                            width={500}
                            height={500}
                            alt="AI/ML"
                        />
                    </div>
                    <div className="domain-card-heading">AI/ML</div>
                    <div className="domain-card-description">
                        Artificial Intelligence and Machine Learning drive innovation by enabling systems to learn, adapt, and make decisions. Participants will develop intelligent models to solve real-world problems, leveraging deep learning, NLP, and computer vision techniques.
                    </div>
                    <div className="domain-card-points">
                        <ul>
                            <li>Computer Vision</li>
                            <li>Natural Language Processing</li>
                            <li>Predictive Analytics</li>
                            <li>Deep Learning Models</li>
                        </ul>
                    </div>
                </div>
                
                {/* Web Development Domain Card */}
                <div className="domain-card">
                    <div className="domain-card-svg">
                        <Image
                            src="/web-dev.svg"
                            width={500}
                            height={500}
                            alt="Web Development"
                        />
                    </div>
                    <div className="domain-card-heading">Web Development</div>
                    <div className="domain-card-description">
                        Full-Stack Web Development focuses on building scalable and intelligent web solutions. Participants will develop interactive web applications using modern front-end and back-end technologies, ensuring performance, security, and usability.
                    </div>
                    <div className="domain-card-points">
                        <ul>
                            <li>Full Stack Applications</li>
                            <li>Progressive Web Apps</li>
                            <li>Real-time Systems</li>
                            <li>Cloud Integration</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    );
}