import "./page.css";
import CustomSlider from "@/components/CustomSlider";
import Image from "next/image";

export default function Explore() {
    const commonImages = [
        "/gallery/i7.jpg",
        "/gallery/image1.jpg",
        "/gallery/image2.jpg",
        "/gallery/i10.jpg",
        "/gallery/image3.jpg",
        "/gallery/image4.jpg",
        "/gallery/i4.jpg",
        "/gallery/i5.jpg",
        "/gallery/i6.jpg",
        "/gallery/i8.jpg",
        "/gallery/i9.jpg",
        "/gallery/i11.jpg"
    ];

    const events = [
        {
            title: "InnovateX Hackathon",
            date: "March 15-16, 2024",
            time: "10:00 AM - 6:00 PM",
            venue: "STME Campus, Main Auditorium",
            description: "The InnovateX Hackathon, organized by the Matrix Technical Club and ACM Student Chapter at STME, focused on 'Tech for Social Impact.' Students worked on real-world challenges, presenting innovative solutions with guidance from industry mentors.",
            additionalText: "The hackathon featured multiple competitive rounds, fostering creativity, teamwork, and problem-solving skills. Participants showcased their projects in a grand finale, impressing judges with their ingenuity.",
            images: ["/gallery/image1.jpg", "/gallery/i8.jpg"]
        },
        {
            title: "Codefest '23 Hackathon",
            date: "September 09, 2023",
            time: "9:00 AM - 6:00 PM",
            venue: "Library, 4th Floor",
            description: "The School of Technology Management & Engineering (STME) Technical Club, MATRIX of NMIMS Chandigarh, hosted their very first Hackathon, ‘Codefest.’ The event was filled with coding, problem-solving, and teamwork as students competed for the top prize.",
            additionalText: "The day began with a lamp lighting ceremony, symbolizing knowledge and innovation. Faculty members, including the Chairperson of STME, Dr. Jyotsna Singh, and Campus Director, Dr. Jaskiran Kaur, encouraged students throughout the event.",
            images: ["/gallery/image3.jpg", "/gallery/image4.jpg"]
        }
    ];

    return (
        <div className="page-container">
            <div>
                <div className="page-header">Event Gallery</div>
                <div className="page-sub-header">
                    Relive the moments of innovation and excellence from our past events. 🌟
                </div>
            </div>
            {/* 🎯 Event Sections */}
            {events.map((event, index) => (
                <div key={index} className="event-section">
                    {/* Left Side: Text Info */}
                    <div className="event-text">
                        <h2 className="event-title">{event.title}</h2>
                        <p className="event-date"><strong>DATE:</strong> {event.date}</p>
                        <p className="event-time"><strong>TIME:</strong> {event.time}</p>
                        <p className="event-venue"><strong>VENUE:</strong> {event.venue}</p>
                        <p className="event-description">{event.description}</p>
                        <p className="event-additional">{event.additionalText}</p>
                    </div>

                    {/* Right Side: Images */}
                    <div className="event-images">
                        {event.images.map((img, imgIndex) => (
                            <div key={imgIndex} className="event-img-wrapper">
                                <Image src={img} alt="Event Image" width={400} height={250} priority />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* 🔥 Common Slider for All Events */}
            <div className="slider-container">
                <CustomSlider>
                    {commonImages.map((image, index) => (
                        <div key={index} className="slider__item">
                            <Image src={image} alt="Event Highlight" width={900} height={450} priority />
                        </div>
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
}
