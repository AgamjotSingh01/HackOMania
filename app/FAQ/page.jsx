"use client"

import { useState } from "react";
import "./page.css";

const faqs = [
    {
        question: "What are the eligibility criteria for participation?",
        answer: "Participants must be students or professionals with a valid ID. Some hackathons may have specific categories for students, working professionals, or open to all."
    },
    {
        question: "How many members can a team have?",
        answer: "A team can have 2-5 members."
    },
    {
        question: "How will the projects be judged? What are the evaluation criteria?",
        answer: "Projects are typically judged based on innovation, implementation, technical complexity, design, and impact. Some hackathons may have additional criteria like business viability or user experience."
    },
    {
        question: "When and where will the problem statements be released?",
        answer: "Problem statements will be released on the website a week before the event."
    },
    {
        question: "What are the timings of the Hackathon?",
        answer: "The Hackathon will start at 10:00 AM and end at 10:00 PM."
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