import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          We study the neurobiology of energy balance. Using cutting-edge
          approaches, we are working to understand the molecular, cellular, and
          circuit mechanisms through which the brain regulates food intake and
          energy expenditure. We are also developing novel technologies to
          better understand how the brain effects changes in behavior and
          physiology.
        </p>
      </section>
      <div className="what-we-do-image">
        <img
          src="/assets/molecule.png"
          alt="molecule"
          className="what-we-do-img"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
