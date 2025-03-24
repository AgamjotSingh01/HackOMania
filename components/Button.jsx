import Link from "next/link";
import "./Button.css";

export default function Button({href,text}) {
    return (
        <Link href={href}>
            <button className="button-squishy">{text}</button>
        </Link>
    )
}