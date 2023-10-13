import logo from "./logo.svg";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import About from "./components/Box/about";
import { Education } from "./components/Timeline";
import Nav from "./components/Navigation";
import { Experience } from "./components/Expertise";
import { Portfolio } from "./components/Portfolio";
import { Address } from "./components/Address";
import { Feedback } from "./components/Feedback";
import Aside from "./components/Aside";
// import { User, Profile, Account } from "./components/Layout";

const AllComponents = () => {
  return (
    <main>
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Address />
      <Feedback />
    </main>
  );
};

const App = () => {
  return (
    <div className="layout">
      <Aside></Aside>
      {/* <aside>
        <Nav />
      </aside> */}

      <Routes>
        <Route path="/" element={<AllComponents />} />
        {/* <Route path="/#about" element={<about />} /> */}

        {/* <Route path="/" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
          </Route> */}
        {/* <Route path="/" element={<AllComponents />} />
        <Route path="/inner" element={<Aboutme />} />
        <Route path="/inner" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/feedbacks" element={<Feedback />} /> */}
      </Routes>
    </div>
  );
};

// const MainPage = () => {
//   return (
//     <div>
//       <div>
//         <h1>Main Page</h1>
//         <Aboutme />
//         <Education />
//         <Experience />
//         <Portfolio />
//         <Contact />
//         <Feedback />
//       </div>
//     </div>
//   );
// };

export default App;
