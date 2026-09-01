import "./SectionHeading.css";

function SectionHeading({ title }) {
  return (
    <div className="section-head">
      <h2 className="section-head-title">{title}</h2>
      <span className="section-head-rule" />
    </div>
  );
}

export default SectionHeading;
