import React from "react";
import auth from "../../Firebase/Firebaseinit";
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInErrorMessage;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (loading || loading1) {
    return <button class="btn loading">loading</button>;
  }
  if ((error, error1)) {
    signInErrorMessage = (
      <p className="text-red-500">{error?.message || error1?.message}</p>
    );
  }

  if (user1) {
    console.log(user1);
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center ">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email?</span>
              </label>
              <input
                type="email"
                placeholder="Email Here"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Please provide valid Email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />

              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}{" "}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}{" "}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password?</span>
              </label>
              <input
                type="password"
                placeholder="Password Here"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password  is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters long", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />

              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}{" "}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}{" "}
                  </span>
                )}
              </label>
            </div>
            {signInErrorMessage}
            <input className="btn w-full max-w-xs" type="submit" />
          </form>
          <p>
            New to Doctor's Portal?
            <Link className="text-primary" to="/register">
              Create a New Account?
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
