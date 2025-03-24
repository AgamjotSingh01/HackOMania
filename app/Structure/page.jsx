import "./page.css";
import Image from "next/image";

export default function Structure() {
  return (
    <div className="page-container">
      <div>
        <div className="page-header">Hackathon Structure & Rounds</div>
        <div className="page-sub-header">
          Select your expertise and embark on a journey of innovation and
          excellence. 🚀
        </div>
      </div>
      <div className="domain-cards">
        {/* Phase 1 - The Kickstart */}
        <div className="domain-card">
          <div className="domain-card-heading">Phase 1 - The Kickstart</div>
          <div className="domain-card-description">
            📅 <strong>Date & Time:</strong> April 4, 2025, 9:00 AM – 8:00 PM<br />
            📍 <strong>Venue:</strong> STME, NMIMS Chandigarh
          </div>
          <div className="domain-card-points">
            <ul>
              <li>Teams will brainstorm problem statements and
              develop initial solutions.</li>
              <li>Mentors will provide guidance and feedback.</li>
              <li>Teams submit their problem statement, GitHub link,
              and approach.</li>
              <li>Judges assess feasibility, innovation, and alignment with
              the theme.</li>
            </ul>
          </div>
        </div>

        {/* Phase 2 - The Midnight Sprint */}
        <div className="domain-card">
          <div className="domain-card-heading">Phase 2 - The Midnight Sprint</div>
          <div className="domain-card-description">
            📅 <strong>Date & Time:</strong> April 4, 2025, 8:00 PM – 8:00 AM (April 5)<br />
            📍 <strong>Venue:</strong> Hostels/Residence (Remote Participation)
          </div>
          <div className="domain-card-points">
            <ul>
              <li>Participants will continue working from their hostels or homes.</li>
              <li>Each team must submit an interim deliverable before returning to campus.</li>
            </ul>
          </div>
        </div>

        {/* Phase 3 - The Grand Finale */}
        <div className="domain-card">
          <div className="domain-card-heading">Phase 3 - The Grand Finale</div>
          <div className="domain-card-description">
            📅 <strong>Date & Time:</strong> April 5, 2025, 8:00 AM – 4:00 PM<br />
            📍 <strong>Venue:</strong> STME, NMIMS Chandigarh
          </div>
          <div className="domain-card-points">
            <ul>
              <li>Teams will finalize and present their solutions.</li>
              <li>Judging and awards ceremony.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
