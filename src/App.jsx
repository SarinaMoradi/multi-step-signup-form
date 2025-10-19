import { Children, useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log(data);
    const newErrors = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.lastName) newErrors.lastName = "Last Name is required";

    setErrors(newErrors);

    if (!data.name || !data.lastName) return;

    if (Object.keys(newErrors).length === 0) console.log(step);
    console.log(step);
    setStep((prev) => prev + 1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 8) {
      newErrors.password = "Password should be more than 8 characters";
    }

    if (!data.dateOfBirth) newErrors.dateOfBirth = "Birth date is required";
    setErrors(newErrors);
    if (!data.password || !data.dateOfBirth) return;

    if (Object.keys(newErrors).length === 0) console.log(step);
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="container">
        <Title step={step} />
        {step === 1 && (
          <StepOne>
            <Fields>
              <Inputs data={data} handleChange={handleChange} errors={errors} />
              <Button handleNext={handleNext} />
            </Fields>
          </StepOne>
        )}

        {step === 2 && (
          <StepTwo>
            <Fields>
              <InputStepTwo
                data={data}
                handleChange={handleChange}
                errors={errors}
              />
              <ButtonStepTwo
                handlePrev={() => setStep((prev) => prev - 1)}
                handleClick={handleClick}
              />
            </Fields>
          </StepTwo>
        )}

        {step === 3 && (
          <StepThree>
            <Fields>
              <Informations data={data} />
            </Fields>
          </StepThree>
        )}
      </div>
    </>
  );
}

function Title({ step }) {
  return (
    <div className="title">
      <h2>Create An Acount</h2>
      {step < 3 ? <p>Step {step}</p> : <p>Done!</p>}
    </div>
  );
}

function StepOne({ children }) {
  return <>{children}</>;
}

function StepTwo({ children }) {
  return <>{children}</>;
}

function StepThree({ children }) {
  return <>{children}</>;
}

function Informations({ data }) {
  return (
    <div className="info" >
      <h4>Name: {data.name}</h4>
      <h4>Last Name: {data.lastName}</h4>
      {data.email && <h4>Email: {data.email}</h4>}
      {data.phoneNumber && <h4>Phone Number: {data.phoneNumber}</h4>}
      <h4>Date Of Birth: {data.dateOfBirth}</h4>
    </div>
  );
}

function Fields({ children }) {
  return <form className="fields">{children}</form>;
}

function Inputs({ data, handleChange, errors }) {
  return (
    <>
      <input
        value={data.name}
        onChange={handleChange}
        type="text"
        placeholder="First Name (Required)"
        name="name"
      />
      {errors.name && (
        <p
          style={{
            margin: "0",
            color: "red",
            fontSize: "12px",
            marginBottom: "0.5rem",
          }}
        >
          {errors.name}
        </p>
      )}
      <input
        value={data.lastName}
        onChange={handleChange}
        type="text"
        placeholder="Last Name (Required)"
        name="lastName"
      />
      {errors.lastName && (
        <p
          style={{
            margin: "0",
            color: "red",
            fontSize: "12px",
            marginBottom: "0.5rem",
          }}
        >
          {errors.lastName}
        </p>
      )}
      <input
        value={data.email}
        onChange={handleChange}
        type="email"
        placeholder="Email (Optional)"
        name="email"
      />
    </>
  );
}

function InputStepTwo({ data, handleChange, errors }) {
  return (
    <>
      <input
        value={data.phoneNumber}
        onChange={handleChange}
        type="number"
        placeholder="PhoneNumber (Optional)"
        name="phoneNumber"
      />

      <input
        value={data.password}
        onChange={handleChange}
        type="password"
        placeholder="Password (Required)"
        name="password"
      />
      {errors.password && (
        <p
          style={{
            margin: "0",
            color: "red",
            fontSize: "12px",
            marginBottom: "0.5rem",
          }}
        >
          {errors.password}
        </p>
      )}

      <input
        value={data.dateOfBirth}
        onChange={handleChange}
        type="date"
        placeholder="Birth date (Optional)"
        name="dateOfBirth"
      />

      {errors.dateOfBirth && (
        <p
          style={{
            margin: "0",
            color: "red",
            fontSize: "12px",
            marginBottom: "0.5rem",
          }}
        >
          {errors.dateOfBirth}
        </p>
      )}
    </>
  );
}

function Button({ handleNext }) {
  return (
    <div className="buttons">
      <button type="button" onClick={handleNext}>
        Next Step
      </button>
    </div>
  );
}

function ButtonStepTwo({ handlePrev, handleClick }) {
  return (
    <div className="buttons">
      <button type="button" onClick={handlePrev}>
        Previus Step
      </button>
      <button type="button" onClick={handleClick}>
        Sign Up
      </button>
    </div>
  );
}

export default App;
