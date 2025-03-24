"use client"

import { useState } from "react";
import "./page.css";

const faqs = [
  {
    question: "Who is eligible to participate?",
    answer: "The hackathon is open to B.Tech students from any college and school students (Class 11th & 12th) across India.",
  },
  {
    question: "What is the team size requirement?",
    answer: "Each team must consist of 3 to 5 members.",
  },
  {
    question: "Are participants allowed to use pre-existing code?",
    answer: "No, all projects must be developed from scratch. However, open-source libraries and frameworks are permitted.",
  },
  {
    question: "Will accommodation and meals be provided?",
    answer: "Yes, night stay arrangements will be made for participants, and refreshments will be available. Meals can be purchased from the cafeteria.",
  },
  {
    question: "How will projects be evaluated?",
    answer: "Projects will be assessed based on innovation, technical implementation, problem-solving approach, user experience, and overall impact.",
  },
  {
    question: "When is the registration deadline?",
    answer: "Registrations will close on March 30, 2025.",
  },
  {
    question: "Where will the hackathon take place?",
    answer: "The event will be held at NMIMS Chandigarh Campus, Opposite Botanical Garden, Sarangpur.",
  }
];

export default function FAQ() {
    
    const [activeIndex, setActiveIndex] = useState(null);
    const [delayedIndex, setDelayedIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
            setTimeout(() => setDelayedIndex(null), 300); // Allow smooth fade-out
        } else {
            setActiveIndex(index);
            setTimeout(() => setDelayedIndex(index), 150); // Delay before making visible
        }
    };

    return (
        <div className="page-container">
            <div>
                <div className="page-header">Hackathon FAQs</div>
                <div className="page-sub-header">Find answers to all your queries about the event!</div>
            </div>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                        <div className="question">
                            {faq.question}
                            <span className={`toggle ${activeIndex === index ? "rotate" : ""}`}>+</span>
                        </div>
                        <div className={`answer ${delayedIndex === index ? "show" : ""}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}