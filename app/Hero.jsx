import Link from "next/link";
import "./Hero.css";
import Button from "@/components/Button";

export default function Hero(){
    return(
        <div className="container">
            <div className="announce">Matrix X ACM Student Chapter Presents 🏆</div>
            <div className="heading">HackOMania 2025</div>
            <div className="subcontent">🌌 Venture beyond the horizon of creativity, where imagination meets innovation. Push the boundaries of technology, craft groundbreaking solutions, and let your ideas shine like stars in the infinite universe of possibilities.</div>
            <div className="alert">📢 Announcing dates soon!</div>
            <div className="theme">AI for Real-World Impact: Building Intelligent & Scalable Web Solutions</div>
            <div className="register">Register Now!!</div>
            <div className="register-button"><Button href={'/'} text={'Register'} /></div>
            <div className="hashtag">#InnovateBeyondLimits 🚀</div>
        </div>
    )
}