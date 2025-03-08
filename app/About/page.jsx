import "./page.css";

export default function About() {
    return (
        <div className="page-container">
            <div>
                <div className="page-header">About Us - Hack-O-Mania'25</div>
                <div className="page-sub-header">"Code. Create. Conquer. Unleash Innovation at Hack-O-Mania'25!" 🚀</div>
            </div>

            <div className="about-container">
                <div className="about-heading">What is Hack-O-Mania'25?</div>
                <div className="about-content">
                    Hack-O-Mania'25 is an exciting 24-hour inter-college hackathon designed for B.Tech students across India. 
                    It brings together bright minds to create impactful projects in AI/ML and Full-Stack Web Development. 
                    Compete, innovate, and win exciting prizes while pushing the boundaries of technology.
                </div>
                <div className="about-content">
                    This hackathon is more than just a competition—it’s a platform to collaborate, learn, and showcase your skills. 
                    Participants will tackle real-world challenges, use cutting-edge technologies, and receive mentorship from industry experts.
                </div>
            </div>

            <div className="about-container">
                <div className="about-heading">📌 Event Details</div>
                <div className="about-content">
                    Hack-O-Mania'25 is hosted by MATRIX, the STME Technical Club of NMIMS Chandigarh. 
                    The event will take place on-site at NMIMS Chandigarh from April 4-5, 2025, and is open to all B.Tech students.
                </div>
                <div className="about-list">
                    <ul>
                        <li>✔ <strong>Event Type:</strong> 24-Hour Inter-College Hackathon</li>
                        <li>✔ <strong>Domains:</strong> AI/ML & Full-Stack Web Development</li>
                        <li>✔ <strong>Team Size:</strong> 2-5 members per team</li>
                        <li>✔ <strong>Prizes:</strong> 1st Place - ₹10,000 | 2nd Place - ₹8,000 | 3rd Place - ₹5,000</li>
                    </ul>
                </div>
            </div>

            <div className="about-container">
                <div className="about-heading">📜 Rules & Guidelines</div>
                <div className="about-content">
                    To ensure fairness and innovation, all teams must follow these rules. Hack-O-Mania'25 fosters teamwork, originality, and technical excellence.
                </div>
                <div className="about-list">
                    <ul>
                        <li>⚡ <strong>Team Formation:</strong> Teams of 2-5 members, cross-college participation allowed.</li>
                        <li>⚡ <strong>Project Rules:</strong> Projects must be built from scratch during the hackathon.</li>
                        <li>⚡ <strong>Submission:</strong> Submit code, documentation, and a short video demo.</li>
                        <li>⚡ <strong>Judging Criteria:</strong> Innovation (30%), Technical Execution (30%), Impact (20%), and Presentation (20%).</li>
                    </ul>
                </div>
            </div>

            <div className="about-container">
                <div className="about-heading">📢 How to Register?</div>
                <div className="about-content">
                    Ready to join Hack-O-Mania'25? Follow these simple steps to secure your spot and start your hackathon journey.
                </div>
                <div className="about-list">
                    <ul>
                        <li>📌 <strong>Step 1:</strong> Form a team (2-5 members)</li>
                        <li>📌 <strong>Step 2:</strong> Pay the registration fee (₹100 per member)</li>
                        <li>📌 <strong>Step 3:</strong> Fill out the registration form (link: [Insert Here])</li>
                        <li>📌 <strong>Step 4:</strong> Receive confirmation & get ready to hack!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
