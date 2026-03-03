import { MessageCircle, GraduationCap, ClipboardCheck, Leaf } from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose">
      <div className="why-content">
        <h2>Why Choose Therapy With Us</h2>

        <h3>A Safe, Supportive, Non-Judgemental Space</h3>

        <p className="why-intro">
          Whether you’re dealing with stress, career decisions, emotional
          challenges, or clarity about your next steps in life — I’m here to
          help you explore, understand, and grow.
        </p>
      </div>

      {/* FULL-WIDTH AUTO SCROLL STRIP */}
      <div className="why-marquee">
        <div className="why-track">
          <div className="why-pill">
            <MessageCircle className="why-icon" />
            Empathetic
          </div>

          <div className="why-pill">
            <GraduationCap className="why-icon" />
            Client-centred counselling
          </div>

          <div className="why-pill">
            <ClipboardCheck className="why-icon" />
            Evidence-based tools 
          </div>
          <div className="why-pill">
            <Leaf className="why-icon" />
            Reflective guidance
          </div>

          <div className="why-pill">
            <MessageCircle className="why-icon" />
            Psychometric assessments 
          </div>

          <div className="why-pill">
            <GraduationCap className="why-icon" />
            Confidential
          </div>

          <div className="why-pill">
            <ClipboardCheck className="why-icon" />
            Judgment-free support
          </div>

          {/* duplicate for seamless loop */}
          <div className="why-pill">
            <MessageCircle className="why-icon" />
            Empathetic
          </div>

          <div className="why-pill">
            <GraduationCap className="why-icon" />
            Client-centred counselling
          </div>

          <div className="why-pill">
            <ClipboardCheck className="why-icon" />
            Evidence-based tools 
          </div>
          <div className="why-pill">
            <Leaf className="why-icon" />
            Reflective guidance
          </div>

          <div className="why-pill">
            <MessageCircle className="why-icon" />
            Psychometric assessments 
          </div>

          <div className="why-pill">
            <GraduationCap className="why-icon" />
            Confidential
          </div>

          <div className="why-pill">
            <ClipboardCheck className="why-icon" />
            Judgment-free support
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
