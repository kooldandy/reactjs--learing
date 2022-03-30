import React from "react";
import SkeletonWrapper from "../../skeleton/SkeletonWrapper";

interface IErrorMessege {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessege> = ({ message }) => {
  return (
    <div className="">
      <h5 className="text-danger">{message}</h5>
    </div>
  );
};

const ControlledForms: React.FC = (): any => {
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({
    userId: "",
    password: "",
  });

  const onSignUp = (event: Event) => {
    formValidation(event);
    event.preventDefault();
    event.stopPropagation();
    return;
    alert(`${userId} ${password}`);
  };

  //   const handleError =() => {
  //     console.log(1)
  //   }

  const formValidation = (event: Event) => {
    if (!userId) {
      setError({
        ...error,
        userId: "Enter UserID",
      });
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <SkeletonWrapper>
      <div className="border p-4">
        <h3 className="h3">Signup Form</h3>
        <form className="row g-3">
          <div className="mb-3">
            <label className="form-label">UserId </label>
            <input
              type="text"
              className="form-control"
              value={userId}
              onChange={(evt) => {
                setUserId(evt.target.value);
              }}
            ></input>
            <ErrorMessage message={error.userId}></ErrorMessage>
          </div>

          <div className="mb-3">
            <label className="form-label" data-skeletontype="text">
              Password{" "}
            </label>
            <div className="mb-3"  data-skeletontype="card">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
              />
            </div>

            {/* <ErrorMessage message="hello"></ErrorMessage> */}
          </div>
          <div className="mb-3">
            <label className="form-label" data-skeletontype="text">
              Confirm Password{" "}
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(evt: any) => {
                setPassword(evt.target.value);
              }}
            ></input>
            <ErrorMessage message={error.password}></ErrorMessage>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(evt: any) => onSignUp(evt)}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </SkeletonWrapper>
  );
};

export default ControlledForms;
