import kissa1 from "../images/whiskerson.png";
import kissa2 from "../images/fluffy.png";
import kissa3 from "../images/felix.png";
import kissa4 from "../images/pumpkin.png";

function Katit() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={kissa1} alt="Mr. Wiskerson" />
        <h3>Mr. Wiskerson</h3>
        <div className="info-group">
          <img src="../images/phone-icon.png" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="../images/mail-icon.png" alt="" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={kissa2} alt="Mr. Wiskerson" />
        <h3>Mr. Wiskerson</h3>
        <div className="info-group">
          <img src="../images/phone-icon.png" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="../images/mail-icon.png" alt="" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={kissa3} alt="Mr. Wiskerson" />
        <h3>Mr. Wiskerson</h3>
        <div className="info-group">
          <img src="../images/phone-icon.png" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="../images/mail-icon.png" alt="" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={kissa4} alt="Mr. Wiskerson" />
        <h3>Mr. Wiskerson</h3>
        <div className="info-group">
          <img src="../images/phone-icon.png" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="../images/mail-icon.png" alt="" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  );
}
