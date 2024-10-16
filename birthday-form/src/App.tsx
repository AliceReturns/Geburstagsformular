import JSConfetti from "js-confetti";
import { useRef } from "react";

function App() {
  const date = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (date.current && name.current) {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;

      const dateValue = date.current.value;
      const nameValue = name.current.value;

      const birthDay = new Date(dateValue);
      const birthDayDate = birthDay.getDate();
      const birthDayMonth = birthDay.getMonth() + 1;

      // Überprüft, ob das eingegebene Datum mit dem aktuellen Datum übereinstimmt
      if (currentDay === birthDayDate && currentMonth === birthDayMonth) {
        alert(`Happy Birthday, ${nameValue}!`);

        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
          confettiColors: ["#FF336B", "#8DE39B", "#33D1FF"],
          confettiRadius: 6,
          confettiNumber: 300,
        });
      } else {
        alert(`Today is not your birthday, ${nameValue}.`);
      }
    }
  };

  return (
    <>
      <div className="card">
        <div className="header">
          <img
            src="../src/assets/img/happy-birthday.png"
            alt="header icon"
            width={"45px"}
            height={"45px"}
          />
          <h1>Birthdayform</h1>
        </div>
        <div className="input-div">
          <label>Name</label>
          <input type="text" ref={name} />
          <br />
          <label>Birthday</label>
          <input type="date" ref={date} />
        </div>
        <div>
          <button onClick={handleClick}>Is today my Birthday?</button>
        </div>
      </div>
    </>
  );
}

export default App;
