import Link from "next/link";
import "./Hero.css";
import Button from "@/components/Button";
import Image from "next/image";

export default function Hero() {
    return (
        <>
        <div className="container desktop-view">
            <div className="heading-group">
                <div className="announce">Matrix X ACM Student Chapter Presents</div>
                <div className="heading">Hack-O-Mania'25</div>
            </div>
        
            <div className="subcontent">
                🌌 Venture beyond the horizon of creativity, where imagination meets innovation. Push the boundaries of technology, craft groundbreaking solutions, and let your ideas shine like stars in the infinite universe of possibilities.
            </div>
            <div className="prize-pool">
                A stellar <span className="prize-amount">₹23,000</span> prize pool awaits! Let your ideas shine like supernovas in this cosmic challenge.
            </div>
            <div className="alert">📅 April 4 - April 5, 2025</div>
            <div className="theme">AI for Real-World Impact: Building Intelligent & Scalable Web Solutions</div>


            <div className="register-button">
                <Button href={'https://forms.gle/FsfTucQEL1jP3orC6'} text={'Register'} />
            </div>
            <div className="hashtag">#InnovateBeyondLimits 🚀</div>
        </div>



        <div className="container mobile-view">
            <div className="heading-group">
                <div className="heading">Hack-O-Mania'25</div>
                <div className="announce">Presented by Matrix X ACM Student Chapter</div>
            </div>
            <div className="subcontent">
                🌌 Venture beyond the horizon of creativity, where imagination meets innovation. Push the boundaries of technology, craft groundbreaking solutions, and let your ideas shine like stars in the infinite universe of possibilities.
            </div>
            <div className="prize-pool">
                A stellar <span className="prize-amount">₹23,000</span> prize pool awaits! Let your ideas shine like supernovas in this cosmic challenge.
            </div>
            <div className="alert">📅 April 4 - April 5, 2025</div>
            <div className="register-button">
                <Button href={'https://forms.gle/FsfTucQEL1jP3orC6'} text={'Register'} />
            </div>
            <div className="theme">AI for Real-World Impact: Building Intelligent & Scalable Web Solutions</div>

            <div className="hashtag">#InnovateBeyondLimits 🚀</div>

            <div className="earth-container">
                <Image src="/earth1.png" className="earth" alt="Earth" width={200} height={200} />
            </div>

        </div>
    </>
    );
}
