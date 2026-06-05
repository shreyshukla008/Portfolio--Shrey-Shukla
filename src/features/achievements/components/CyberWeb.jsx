import CollapsibleSection from "@/components/ui/CollapsibleSection";

const CyberWeb = () => {
  return (
    <CollapsibleSection
      title="Cyber Security And Web"
      summary="Expertise in securing digital assets and building dynamic web applications with modern tech stack"
    >
      <ul className="flex flex-col gap-4">
        <li>
          <span className="font-bold">Institution:</span> Jaypee Institute of
          Information and Technology
        </li>
        <li>
          <span className="font-bold">Grade:</span> A
        </li>
        <li className="flex flex-col gap-2">
          <p>
            Successfully completed a comprehensive program focusing on both Cyber
            Security and Web Development.
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="font-bold">Cyber Security:</span> Gained a deep
              understanding of protecting digital systems and data from threats.
              Topics included cryptography, ethical hacking, network security,
              and risk management, which provided the skills necessary to
              safeguard information and maintain secure infrastructures.
            </li>
            <li>
              <span className="font-bold">Web Development:</span> Mastered
              full-stack development using the MERN (MongoDB, Express, React,
              Node.js) tech stack alongside Bootstrap for front-end development.
              This included building dynamic, responsive, and scalable web
              applications, integrating databases, and deploying projects to
              production environments.
            </li>
          </ul>
        </li>
      </ul>
    </CollapsibleSection>
  );
};

export default CyberWeb;
