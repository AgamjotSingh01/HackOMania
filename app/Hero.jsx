import Link from "next/link";
import "./Hero.css";
import Button from "@/components/Button";

export default function Hero() {
    return (
        <div className="container">
            <div className="announce">Matrix X ACM Student Chapter Presents 🏆</div>
            <div className="heading">Hack-O-Mania'25</div>
            <div className="subcontent">
                🌌 Venture beyond the horizon of creativity, where imagination meets innovation. Push the boundaries of technology, craft groundbreaking solutions, and let your ideas shine like stars in the infinite universe of possibilities.
            </div>
            <div className="prize-pool">
                🌠 A stellar <span className="prize-amount">₹23,000</span> prize pool awaits! Let your ideas shine like supernovas in this cosmic challenge. 🚀
            </div>
            <div className="alert">📢 Announcing dates soon!</div>
            <div className="theme">AI for Real-World Impact: Building Intelligent & Scalable Web Solutions</div>


            <div className="register-button">
                <Button href={'https://forms.gle/FsfTucQEL1jP3orC6'} text={'Register'} />
            </div>
            <div className="hashtag">#InnovateBeyondLimits 🚀</div>
        </div>
    );
}
