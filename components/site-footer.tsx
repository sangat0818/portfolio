import Link from "next/link";
import { navigation, profile } from "@/data/profile";

const initials = profile.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const showLinkedIn = profile.linkedIn && !profile.linkedIn.startsWith("[");

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link className="brand-mark brand-mark-light" href="/">
            <span className="brand-initial">{initials}</span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </span>
          </Link>
          <p>Thoughtful learning experiences for organisations, educators, and communities.</p>
        </div>
        <div>
          <p className="footer-label">Navigate</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label">Connect</p>
          <div className="footer-links">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            {showLinkedIn && <span>{profile.linkedIn}</span>}
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Educator • Trainer • Facilitator</span>
      </div>
    </footer>
  );
}
