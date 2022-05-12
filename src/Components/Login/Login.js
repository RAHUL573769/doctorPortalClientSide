import React from "react";
import auth from "../../Firebase/Firebaseinit";
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user1) {
    console.log(user1);
  }
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center ">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email?</span>
              </label>
              <input
                type="email"
                placeholder="Email Here"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
            </div>

            <input />
            {errors.firstName?.type === "required" && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}

            <input type="submit" />
          </form>

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
