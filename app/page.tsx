import { EasterEgg } from "./components/easter-egg";

export default function Page() {
  return (
    <>
      <p className="text-sm inline text-justify">
        Hi, I work as a MERN stack developer from Abohar, Punjab, India. I
        specialize in both frontend and backend technologies. Proficient in
        JavaScript, TypeScript, React, Next.js, Redux, Node.js, Express, and
        database technologies including SharePoint and MongoDB. <EasterEgg />
      </p>
      <br />

      <br />

      <section className="technical-expertise-section">
        <h2>Technical Expertise</h2>

        <ul>
          <li>
            <strong>Languages:</strong> JavaScript, TypeScript, Java, Python
          </li>
          <li>
            <strong>Frontend:</strong> React.js, Next.js, Redux, SPFx, HTML,
            CSS, Tailwind CSS, Fluent UI
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, SharePoint
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git, GitHub, Docker, AWS
          </li>
        </ul>
      </section>
    </>
  );
}
