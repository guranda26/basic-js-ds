import { useState, useEffect } from "react";
import axios from "axios";
import { sendSubscribe } from "./subscribeFetch";
import { validateEmail } from "./email-validator";
import { unsubscribeUser } from "./unsubscribeFetch";

const subscribeEmail = async (email) => {
  try {
    const response = await axios.post("http://localhost:3000/subscribe", {
      email: email,
    });
    console.log("Subscription successful!", response.data);
  } catch (error) {
    console.error("Error subscribing:", error);
  }
};
const JoinUsSection = (props) => {
  const { placeholder } = props;
  const [email, setEmail] = useState(() => {
    const localEmail = localStorage.getItem("Email");
    const initialValue = localEmail;
    if (localStorage.getItem("Email") !== null) {
      return initialValue;
    } else {
      return placeholder;
    }
  });

  useEffect(() => {
    const introducedEmail = email;
    localStorage.setItem("Email", introducedEmail);
  }, [email]);
  let [isDisabled, setDisabled] = useState(false);
  let [isSubscribed, setSubscribe] = useState("Subscribe");
  let [status, setStatus] = useState(false);
  let [displayMode, setDisplay] = useState("block");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const buttonState = localStorage.getItem("Button state");
    if (buttonState) {
      setSubscribe(JSON.parse(buttonState));
    }
  }, []);

  useEffect(() => {
    const statusState = localStorage.getItem("isSubmited");
    if (statusState) {
      setStatus(JSON.parse(statusState));
    }
  }, []);

  useEffect(() => {
    const displayMode = localStorage.getItem("displayMode");
    if (displayMode) {
      setDisplay(JSON.parse(displayMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Button state", JSON.stringify(isSubscribed));
    localStorage.setItem("isSubmited", JSON.stringify(status));
    localStorage.setItem("displayMode", JSON.stringify(displayMode));
  });

  let introducedEmail = email;

  const submitClickButton = async () => {
    subscribeEmail(introducedEmail); //change the button style and set in local storage isSubscribed to true
    // sendSubscribe(introducedEmail); //send subscribe fetch to the server

    if (isDisabled) return; // do nothing if request already made
    disableBtn();
    const response = await fetchMock();
    enableBtn();

    setStatus(true);

    if (validateEmail(introducedEmail) == false) {
      setStatus(false);
    }
  };

  const fetchMock = () => {
    return new Promise((resolve) => setTimeout(() => resolve("hello"), 2000));
  };

  const disableBtn = () => {
    setOpacity(0.5);
    setDisabled(true);
  };
  const enableBtn = () => {
    setOpacity(1);
    setDisabled(false);
  };

  const undoClickButton = () => {
    unsubscribeEmail();
    setStatus(false);
  };

  const subscribe = () => {
    setSubscribe("Unsubscribe");
    localStorage.setItem("isSubscribed", "true");
    setDisplay("none");
  };

  const unsubscribe = () => {
    setSubscribe("Subscribe");
    localStorage.setItem("isSubscribed", "false");
    setDisplay("block");
  };
  const changeButtonState = () => {
    status ? undoClickButton() : submitClickButton();
  };

  const unsubscribeEmail = () => {
    unsubscribe();
    unsubscribeUser();
    setEmail("");
    localStorage.removeItem("Email");
  };

  return (
    <>
      <main id="app-container">
        <section
          className="app-section app-section--image-program"
          id="programContainer"
        >
          <h2 className="program-title">Join Our Program</h2>
          <h3 className="program-subtitle">
            Sed do eiusmod tempor incididunt
            <br />
            ut labore et dolore magna aliqua
          </h3>
          <form className="submitFieldWrapper" id="form">
            <div
              className="form-wrapper"
              id="emailForm"
              style={{
                display: displayMode,
              }}
            >
              <input
                className="form-input"
                id="submit-info"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <input
              id="subscribeButton"
              className="app-section__button submit-btn"
              type="button"
              value={isSubscribed}
              style={{
                opacity,
              }}
              onClick={() => {
                changeButtonState();
              }}
              disabled={isDisabled}
            ></input>
          </form>
        </section>
      </main>
    </>
  );
};

export default JoinUsSection;
