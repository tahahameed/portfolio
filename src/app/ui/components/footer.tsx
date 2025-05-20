import Link from "next/link";
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div id="footer">
            <div className ="container">
                <div className ="footer">
                    <p> &copy; {currentYear} <Link href="#">Taha Hameed</Link> </p>
                </div>
            </div>
        </div>
    )
}