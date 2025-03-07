import "./page.css";
import Image from "next/image";

export default function Domains() {
    return (
        <div className="page-container">
            <div className="page-header">DOMAINS</div>
            <div className="domain-cards">
                <div className="domain-card">
                    <div className="domain-card-svg"><Image
                        src="/ai.svg"
                        width={500}
                        height={500}
                        alt="AI/ML"
                    /> </div>
                    <div className="domain-card-heading">AI/ML</div>
                    <div className="domain-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi placeat, velit odio laboriosam doloremque dolores optio itaque adipisci iste consequatur? Facilis ipsa distinctio et repellendus debitis assumenda corporis provident mollitia.</div>
                    <div className="domain-card-points">
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
                <div className="domain-card">
                    <div className="domain-card-svg"><Image
                        src="/ai.svg"
                        width={500}
                        height={500}
                        alt="AI/ML"
                    /> </div>
                    <div className="domain-card-heading">AI/ML</div>
                    <div className="domain-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi placeat, velit odio laboriosam doloremque dolores optio itaque adipisci iste consequatur? Facilis ipsa distinctio et repellendus debitis assumenda corporis provident mollitia.</div>
                    <div className="domain-card-points">
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}