function Login() {
  return (
    <section className="max_padd_container p-32 flexCenter flex-col">
      <div className="max-w-[555pc] h-[600px] bg-white px-14 py-10 rounded-md">
        <h3 className="h3">Sign Up</h3>
        <div className="flex flex-col gap-y-4 mt-7">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="h-14 w-full pl-4 bg-slate-900/15 outline-none rounded-xl"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full pl-4 bg-slate-900/15 outline-none rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-4 bg-slate-900/15 outline-none rounded-xl"
          />
        </div>
        <button className="btn_dark_rounded my-5 w-full !rounded-md">
          Continue
        </button>
        <p className="text-black font-bold">
          Already an account ?{" "}
          <span className="text-secondary underline cursor-pointer">Login</span>
        </p>
        <div className="flex items-center mt-6 gap-x-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree tothe terms of use & privacy policy</p>
        </div>
      </div>
    </section>
  );
}

export default Login;
