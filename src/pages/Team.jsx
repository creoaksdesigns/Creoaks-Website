import React from "react";
import SEO from "../components/SEO";

const SITE_URL = "https://www.creoaks.com";
const PAGE_URL = `${SITE_URL}/team`;

const TEAM = [
  {
    slug: "kazeem-sanni",
    name: "Kazeem Sanni",
    role: "Director",
    bio: "Kazeem Sanni, our Creative Director, brings 20+ years of experience in building brands that standout and press-prefect print. He blends strategy with craft to turn business goals into clear, compelling visuals. Under Kazeem's leadership, Creoaks has executed campaigns and event branding for both private and public organizations - keeping quality high, timlines tight, and results measureable.",
    photo: "/images/team/director.webp",
  },
  {
    slug: "ejiro-ben",
    name: "Ejiro Ben",
    role: "Website Adminstrator",
    bio: "A dedicated Website Administrator responsible for managing and maintaining the company\u2019s online presence. Skilled in website design, development and updates, content management, basic troubleshooting, and ensuring a smooth and user-friendly digital experience. Works closely with the graphic design and printing team to showcase creative services, projects, and company information effectively online.",
    photo: "/images/team/webAdmin.webp",
    x: "https://x.com/Innovativeben",
    instagram: "https://www.instagram.com/innovativeben?igsi=MTlmOWg5MW9zZnpobg==",
    tiktok: "https://www.tiktok.com/@innovativeben?_r=1&_t=ZS-99OgH63M1TB",
  },
  {
    slug: "khadijah",
    name: "Khadijah",
    role: "Finance and Admin Officer",
    bio: "Manages daily administration, financial processes, and team coordination. Her role focuses on keeping  everything organized and running smoothly to support the team and deliver excellent results.",
    photo: "/images/team/financeAdminOfficer.webp",
  },
  {
    slug: "farida",
    name: "Farida",
    role: "Business Relations Manager",
    bio: "Responsible for managing client relationships, coordinating projects, and overseeing vendor and staff operations. She ensures effective communication between clients, vendors, and the team while making sure projects are delivered smoothly and efficiently.",
    photo: "/images/team/businessRelationsManager.webp",
  },
  {
    slug: "ola",
    name: "Ola",
    role: "Head of Production",
    bio: "Ola serves as the Head of Production, overseeing the planning, coordination, and execution of the company\u2019s production operations. With a strong focus on efficiency, quality, and timely delivery, Ola ensures that production processes run smoothly and consistently meet the required standards.",
    photo: "/images/team/headOfProduction.webp",
  },
  {
    slug: "muhammad-jumba",
    name: "Muhammad Jumba",
    role: "Logistics Officer",
    bio: "Muhammad Jumba is a dedicated Logistics Officer at CREOAKS, responsible for coordinating pickups, deliveries, and the movement of materials between vendors, the production site, and clients. He ensures that items are properly counted, tracked, and delivered efficiently, helping to keep operations running smoothly.",
    photo: "/images/team/logisticsOfficer.webp",
  },
  {
    slug: "jameel-abdulrahaman",
    name: "Jameel Abdulrahaman",
    role: "Vendor Relations Assistant",
    bio: "Jameel Abdulrahaman is a Vendor Relations Assistant with a strong interest in building and maintaining productive relationships with vendors and business partners. In his role, he supports vendor communication, coordination, follow-ups, and relationship management to help ensure smooth and efficient business operations.",
    photo: "/images/team/vendorRelationsAssistant.webp",
  },
  {
    slug: "abdulrahman",
    name: "Abdulrahman",
    role: "Social Media Administrator",
    bio: "Abdulrahman is a Social Media Administrator who manages the company\u2019s social media platforms and digital presence. He handles content publishing, audience engagement, and day-to-day social media activities, with a focus on maintaining a consistent brand presence and strengthening the company\u2019s connection with its online audience.",
    photo: "/images/team/socialMediaAdmin.webp",
  },
];

const SOCIAL_PLATFORMS = [
  { key: "x", label: "X", iconClass: "fa-brands fa-x-twitter" },
  { key: "instagram", label: "Instagram", iconClass: "fa-brands fa-instagram" },
  { key: "tiktok", label: "TikTok", iconClass: "fa-brands fa-tiktok" },
];

function hasLink(value) {
  return Boolean(value) && value !== "#";
}

function Avatar({ member, priority }) {
  return (
    <div className="ct-avatar">
      <img
        src={member.photo}
        alt={`${member.name}, ${member.role} at Creoaks Designs & Prints`}
        width="132"
        height="132"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}

function Member({ member, priority }) {
  // Only keep the platforms this member actually has a real link for.
  const activeSocials = SOCIAL_PLATFORMS.filter((p) => hasLink(member[p.key]));

  return (
    <>
      <SEO
        title="Team"
        description="Meet the team behind Creoaks Designs & Prints, delivering branding, packaging and print for businesses across Nigeria."
        path="/team"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Creoaks Team',
          url: 'https://creoaks.com/team'
        }}
      />
  <li className="ct-member" itemScope itemType="https://schema.org/Person">
      <Avatar member={member} priority={priority} />
      <div className="ct-member-info">
        <h2 itemProp="name">{member.name}</h2>
        <span className="ct-role" itemProp="jobTitle">
          {member.role}
        </span>
        <p className="ct-bio">{member.bio}</p>
        {activeSocials.length > 0 && (
          <div className="ct-socials">
            {activeSocials.map(({ key, label, iconClass }) => (
              <a
                key={key}
                href={member[key]}
                aria-label={`${member.name} on ${label}`}
                itemProp="sameAs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={iconClass}></i>
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
    </>
  );
}

export default function TeamPage() {
  const pageDescription =
    "Meet the designers, strategists and production team behind Creoaks Designs & Prints, delivering branding, packaging and print for businesses across Nigeria.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Creoaks Designs & Prints",
    url: SITE_URL,
    employee: TEAM.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      image: m.photo,
      url: `${PAGE_URL}#${m.slug}`,
      sameAs: [m.x, m.instagram, m.tiktok].filter(hasLink),
    })),
  };

  return (
    <div className="ct-root">
      <SEO
        title="Our Team"
        description={pageDescription}
        path="/team"
        structuredData={structuredData}
      />

      <style>{`
        .ct-root{
          --ink:#15171B;
          --paper:#FAF8F3;
          --orange:#E3552B;
          --teal:#1F5F5B;
          --grey:#68645C;
          --line:#DEDACD;
          background:var(--paper);
          color:var(--ink);
          font-family:'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing:antialiased;
        }
        .ct-root *{ box-sizing:border-box; }
        .ct-root a{ color:inherit; text-decoration:none; }
        .ct-root img, .ct-root svg{ display:block; max-width:100%; }

        .ct-wrap{
          max-width:1180px;
          margin:0 auto;
          padding:0 32px;
        }

        .ct-header{
          padding:96px 0 72px;
          text-align:center;
        }
        .ct-header .ct-mark{
          display:inline-flex;
          align-items:center;
          gap:8px;
          font-size:13px;
          color:var(--orange);
          letter-spacing:0.02em;
          margin-bottom:22px;
        }
        .ct-header .ct-mark::before,
        .ct-header .ct-mark::after{
          content:"";
          width:22px;
          height:1px;
          background:var(--orange);
          opacity:0.55;
        }
        .ct-header h1{
          font-family:'Fraunces', Georgia, serif;
          font-weight:500;
          font-size:clamp(2.4rem, 5vw, 3.7rem);
          line-height:1.08;
          letter-spacing:-0.01em;
          max-width:14ch;
          margin:0 auto 22px;
        }
        .ct-header p{
          max-width:46ch;
          margin:0 auto;
          color:var(--grey);
          font-size:1.05rem;
          line-height:1.65;
        }

        .ct-roster{ padding:0 0 120px; }
        .ct-roster-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          column-gap:56px;
          row-gap:64px;
          list-style:none;
          margin:0;
          padding:0;
        }

        .ct-member{
          display:grid;
          grid-template-columns:132px 1fr;
          gap:24px;
          align-items:start;
        }

        .ct-avatar{
          width:132px;
          height:132px;
          overflow:hidden;
          background:var(--ink);
          flex-shrink:0;
        }
        .ct-avatar img{
          width:100%;
          height:100%;
          object-fit:cover;
          filter:grayscale(15%);
          transition:filter 0.25s ease;
        }
        .ct-avatar:hover img{ filter:grayscale(0%); }

        .ct-member-info{ padding-top:2px; }
        .ct-member-info h2{
          font-family:'Fraunces', Georgia, serif;
          font-weight:500;
          font-size:1.32rem;
          margin:0 0 6px;
        }
        .ct-role{
          display:inline-block;
          font-size:0.86rem;
          color:var(--orange);
          padding-bottom:12px;
          margin-bottom:14px;
          border-bottom:1px solid var(--line);
          width:100%;
        }
        .ct-bio{
          font-size:0.93rem;
          line-height:1.6;
          color:var(--grey);
          margin:0 0 16px;
          max-width:38ch;
        }

        .ct-socials{ display:flex; gap:14px; }
        .ct-socials a{
          width:30px;
          height:30px;
          display:flex;
          align-items:center;
          justify-content:center;
          border:1px solid var(--line);
          color:var(--ink);
          transition:border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
        }
        .ct-socials a:hover{
          border-color:var(--orange);
          background:var(--orange);
          color:var(--paper);
        }
        .ct-socials svg{ width:14px; height:14px; }

        @media (max-width:900px){
          .ct-header{ padding:72px 0 56px; }
          .ct-roster{ padding-bottom:96px; }
          .ct-roster-grid{ grid-template-columns:1fr; row-gap:52px; }
          .ct-wrap{ padding:0 28px; }
        }

        @media (max-width:520px){
          .ct-wrap{ padding:0 20px; }
          .ct-header{ padding:64px 0 48px; }
          .ct-header h1{ max-width:100%; }
          .ct-member{ grid-template-columns:1fr; gap:18px; }
          .ct-avatar{ width:96px; height:96px; }
          .ct-bio{ max-width:100%; }
        }
      `}</style>

      <header className="ct-header">
        <div className="ct-wrap">
          <span className="ct-mark">Our team</span>
          <h1>The people behind every print</h1>
          <p>
            From first sketch to final proof, this is the team turning
            ideas into brands, packaging and print you can hold.
          </p>
        </div>
      </header>

      <main>
        <section className="ct-roster" aria-labelledby="team-heading">
          <h2
            id="team-heading"
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
            }}
          >
            Meet the Creoaks team
          </h2>
          <div className="ct-wrap">
            <ul className="ct-roster-grid">
              {TEAM.map((member, i) => (
                <Member key={member.slug} member={member} priority={i < 2} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

