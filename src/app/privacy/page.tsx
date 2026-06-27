export const metadata = {
  title: "Privacy Policy | Udaipur Companion Service"
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="shell">
        <h1 style={{ color: "#121214", fontSize: "clamp(34px, 5vw, 58px)" }}>Privacy Policy</h1>
        <p>
          Udaipur Companion Service is designed for private adult social companionship inquiries. We collect only the
          details needed to respond to availability requests, such as name, phone number, preferred area, timing,
          profile preference, and optional notes.
        </p>
        <h2>How Information Is Used</h2>
        <p>
          Inquiry details are used to respond to requests, coordinate lawful social companionship availability, improve
          support quality, and protect the platform from misuse. We do not sell personal inquiry information.
        </p>
        <h2>Confidentiality</h2>
        <p>
          Communication and booking inquiries are handled discreetly. Users should avoid sharing unnecessary sensitive
          information through the form.
        </p>
        <h2>Adult-Only Access</h2>
        <p>
          The service is strictly for adults aged 18 and above. By submitting an inquiry, users confirm they meet this
          requirement and will follow all applicable local laws.
        </p>
      </div>
    </main>
  );
}
