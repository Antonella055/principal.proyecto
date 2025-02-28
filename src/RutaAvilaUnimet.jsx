import React from 'react';
import './styles.css';

const RutaAvilaUnimet = () => {
  return (
    <div className="ruta-avila-unimet">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5348b445b8290849c755cbd423621f7542ac28c0e8a19b32e88bd07ac817dfd?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
              alt="Ruta Avila Unimet Logo"
              className="logo"
            />
            <button className="login-button" aria-label="Iniciar Sesión">Inicia Sesión</button>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#about">Conócenos</a></li>
              <li><a href="#routes">Rutas</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
          <div className="search-container">
            <input
              type="search"
              placeholder="Pico Naiguatá"
              aria-label="Buscar rutas"
              className="search-input"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73afc4abb5937b0aee5b55dd4dd2711c913bc10dca457adb159e48c0a20c9679?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
              alt="Icono de búsqueda"
              className="search-icon"
            />
          </div>
          <div className="language-selector">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f60c2a700578ae079d470eab2a4bb7a1b7804f6505c728045bc8b19ab625c03?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
              alt="Icono de idioma"
              className="language-icon"
            />
            <span className="language-code">ES</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1799e57c071989a4db56078bf7a2c145b743a01174c6b7fc1376337acff9192e?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
              alt="Icono de menú desplegable"
              className="dropdown-icon"
            />
          </div>
        </div>
      </header>
      <main>
        <section className="welcome" style={{backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/4dc611f8efa883f6ae9b017deac940bf4a374a74a1b5ec134019448800958784?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0')"}}>
          <div className="welcome-content">
            <h1 className="welcome-title">Bienvenidos a Ruta Avila Unimet</h1>
            <p className="welcome-description">
              Aqui encontrarás excursiones guiadas al Parque Nacional El Avila, dirigidas exclusivamente a estudiantes de la universidad Metropolitana. Nos dedicamos a ofrecer rutas seguras y diversas, con el acompañamiento de guias experimentados, promoviendo una conexion con la naturaleza y fomentando un espiritu de comunidad entre los estudiantes.
            </p>
            <p className="welcome-invitation">
              A continuación, revisa nuestras rutas disponibles y elige tu próxima aventura
            </p>
          </div>
        </section>
        <section className="routes-section">
          <div className="routes-container">
            <div className="routes">
              <h2 className="routes-title">RUTAS</h2>
              <div className="routes-list">
                {[
                  {
                    id: 1,
                    name: "Sabas Nieves",
                    difficulty: "Moderada",
                    distance: "3,9km",
                    duration: "Est. 1h 55min",
                    stars: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0cba86d451f15bb1edac302e13c1634147a8c84ef79064ce4a11fbabb823318?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
                  },
                  {
                    id: 2,
                    name: "Humbolt",
                    difficulty: "Difícil",
                    distance: "6,4km",
                    duration: "Est. 3h 14min",
                    stars: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4f6ac85627cd5e13119e5a45c92eaae63df6e951c68ee22207adea4b01d8744?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
                  },
                  {
                    id: 3,
                    name: "Naiguatá",
                    difficulty: "Díficil",
                    distance: "16,4km",
                    duration: "Est. 9h 21min",
                    stars: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f71634940adf074ffc9c81eb2c54e2dea0f89d9d875ae7062c5c0f1901437f9?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
                  },
                  {
                    id: 4,
                    name: "Cruz de Los Palmeros",
                    difficulty: "Díficil",
                    distance: "6,4km",
                    duration: "Est. 4h 12min",
                    stars: "https://cdn.builder.io/api/v1/image/assets/TEMP/c63a707736dc474bfb16a243cdb100d28dd6f68a8f0f8787dc358fff2279778e?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0"
                  }
                ].map(route => (
                  <div key={route.id} className="route-item">
                    <h3 className="route-name">#{route.id} {route.name}</h3>
                    <p className="route-details">
                      {route.difficulty} • {route.distance} • {route.duration}
                    </p>
                    <img src={route.stars} alt={`Dificultad de la ruta ${route.name}`} className="difficulty-stars" />
                  </div>
                ))}
              </div>
              <a href="#more-routes" className="more-routes">Mas rutas...</a>
            </div>
            <div className="route-images">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f27838d49a2714bdd46f5131eea9399f538388b9f2775928d3ee9b059cb27e?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Ruta 1" className="route-image" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a02d6e49be071910da1a40d1cd2d0bf5afd27a8af560889c8d3de987ece014a4?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Ruta 2" className="route-image" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8f4dace90b427ddf8e72af666a808f3d75619981a77c1acd028fa0412f1128?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Ruta 3" className="route-image" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c12607ebf890932f81d9d6852aa4155997d84e5499c1bbb33b6bac81233ded38?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Ruta 4" className="route-image" />
              <a href="#calendar" className="view-calendar">Ver Calendario</a>
            </div>
          </div>
          <div className="map-container">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/754951f9878062243d03d50d3dce0b46d7640e5b3dfaedb800c2b00970703322?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Mapa de rutas" className="route-map" />
          </div>
        </section>
        <section className="reserve-route">
          <div className="reserve-content">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cf14de-ba5d-4e4a-80b8-f2a646b53d93?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Logo 1" className="reserve-logo" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/24a6b306c72e815a7d97258cd004f9a05d74ce584ea9ac9991b5259495876fb3?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Logo 2" className="reserve-logo" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac0a88d1104f8d733cdde5ffdf5600e460bfe919a42f3c29c33f7bbdee1da150?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Logo 3" className="reserve-logo" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/03b02a16eb7a500cd0cd5de2ab7a58caa7d5b83c67fc7097fdaf32661fe67d4e?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Logo 4" className="reserve-logo" />
          </div>
          <button className="reserve-button" aria-label="Reservar una ruta">Reserva una ruta</button>
        </section>
        <section className="mission-vision-objective">
          <div className="mission-container">
            <h2 className="section-title">MISIÓN</h2>
            <p className="section-content">
              Nuestra misión es brindar a los estudiantes de la Universidad Metropolitana una plataforma centralizada orientada a la exposición de diferentes rutas de senderismo proporcionadas por el Proyecto Ávila.
            </p>
          </div>
          <div className="vision-container">
            <h2 className="section-title">VISIÓN</h2>
            <p className="section-content">
              Promover la participación estudiantil y el desarrollo integral de los estudiantes de la Universidad Metropolitana a través de la creación de rutas de senderismo.
            </p>
          </div>
          <div className="objective-container">
            <h2 className="section-title">OBJETIVO</h2>
            <p className="section-content">
              A partir de la creación de "Ruta Ávila UNIMET" se busca proporcionar una plataforma virtual que permita a los estudiantes acceder a oportunidades de realizar rutas y conectar con el mundo natural.
            </p>
          </div>
        </section>
        <section className="contact-form">
          <h2 className="form-title">SOLICITAR MAS INFORMACION</h2>
          <p className="form-description">RELLENE LOS CAMPOS Y SE PONDRÁ EN CONTACTO CON USTED LOS ANTES POSIBLE</p>
          <form className="form">
            <div className="form-field">
              <label htmlFor="email" className="visually-hidden">E-mail</label>
              <input type="email" id="email" name="email" placeholder="E-mail" required className="form-input" />
            </div>
            <div className="form-field">
              <label htmlFor="name" className="visually-hidden">Nombre y Apellido</label>
              <input type="text" id="name" name="name" placeholder="Nombre y Apellido" required className="form-input" />
            </div>
            <div className="form-field">
              <label htmlFor="phone" className="visually-hidden">Número de teléfono</label>
              <input type="tel" id="phone" name="phone" placeholder="Número de teléfono" required className="form-input" />
            </div>
            <div className="form-field">
              <label htmlFor="request" className="visually-hidden">Solicitud</label>
              <textarea id="request" name="request" placeholder="Solicitud" required className="form-textarea"></textarea>
            </div>
            <div className="form-consent">
              <input type="checkbox" id="consent" name="consent" required className="form-checkbox" />
              <label htmlFor="consent">Consiento el tratamiento de mis datos personales para los fines y en las condiciones descritas en privacy policy</label>
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-button">Enviar solicitud</button>
              <button type="reset" className="reset-button">Para</button>
            </div>
          </form>
        </section>
        <section className="contact">
          <h2 className="contact-title">CONTACTO</h2>
          <div className="contact-info">
            <div className="contact-item">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/712f6ba9040051f70022b91d4169ab68797816aac33d8d7a0d61d845f5101785?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Icono de teléfono" className="contact-icon" />
              <div className="contact-text">
                <strong>Teléfono</strong>
                <span>+58 212 766 3050</span>
              </div>
            </div>
            <div className="contact-item">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c424a1b2631f062d33f878d3af3ea8135d292b6efcbd65cf7030625f42c6e4?placeholderIfAbsent=true&apiKey=9d59b51cf67643c49323759cacb2fdc0" alt="Icono de email" className="contact-icon" />
              <div className="contact-text">
                <strong>E-MAIL</strong>
                <span>rutaavilaunimet@unimet.com</span>
              </div>
            </div>
          </div>
          <a href="#request-info" className="request-info-link">SOLICITAR MAS INFORMACIÓN</a>
        </section>
      </main>
    </div>
  );
};

export default RutaAvilaUnimet;