import myImg from "../assets/images/myPhoto.jpeg";
export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__img">
        <img src={myImg} alt="my-img" />
      </div>

      <h2 className="sidebar__contact" id="contact">
        Contact
      </h2>
      <nav>
        <ul>
          <li>Adress: Baker str.</li>
          <li>Phone: 993 300 300</li>
          <li>Email: example@gmail.com</li>
        </ul>
      </nav>
      <div className="about" id="about">
        <h2>About Me</h2>
        <p>
          I study front-end development and my main goal is to become web
          developer some day
        </p>
      </div>
    </aside>
  );
}
