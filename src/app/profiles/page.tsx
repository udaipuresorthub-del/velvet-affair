import Image from "next/image";
import Link from "next/link";
import { profileImages } from "@/lib/site";

export const metadata = {
  title: "Reviewed Companion Profiles | Udaipur Companion Service",
  description:
    "Browse reviewed adult social companion profile previews for private, lawful, and respectful inquiries in Udaipur."
};

export default function ProfilesPage() {
  return (
    <main className="section">
      <div className="shell">
        <div className="eyebrow">Reviewed profile previews</div>
        <h1 style={{ color: "#121214", fontSize: "clamp(36px, 6vw, 64px)" }}>Companion Profiles</h1>
        <p className="lead">
          These previews help adults choose a suitable social companionship category before making a discreet
          availability inquiry. Final availability depends on location, timing, and platform guidelines.
        </p>
        <div className="profile-grid" style={{ marginTop: 30 }}>
          {profileImages.map((image, index) => (
            <Image key={image} src={image} alt={`Reviewed companion profile ${index + 1}`} width={420} height={540} />
          ))}
        </div>
        <div className="actions">
          <Link href="/#contact" className="button gold">
            Check availability
          </Link>
          <Link href="/" className="button">
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
