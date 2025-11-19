const Contact = () => {
  return (
    <section className="contact-container">
      
      <div className="contact-form">
        <h2 className="contact-title">Stuur een bericht naar ons</h2>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Naam</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>

          <div className="form-group">
            <label>Onderwerp</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Bericht</label>
            <textarea rows="4"></textarea>
          </div>

          <button type="submit" className="send-btn">
            Versturen
          </button>
        </form>
      </div>

      <div className="contact-right">
        <div className="socials">
          <img src="./img/whatsapp.png" className="icon" alt="whatsapp" />
          <img src="./img/instagram.png" className="icon" alt="instagram" />
          <img src="./img/facebook.png" className="icon" alt="facebook" />
        </div>

        <div className="cv-btn">
          <a href="/cv.pdf" download>
            CV<br />Downloaden
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contact;
