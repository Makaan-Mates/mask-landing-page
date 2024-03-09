const Hero = () => {
  return (
    <>
      <div className="-mt-20 flex w-full flex-col items-center justify-center pt-16 xl:pt-40 2xl:pt-60">
        <div className="z-40 mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center max-md:text-3xl text-4xl font-bold text-transparent md:text-7xl">
            Anonymously <br />
            connect with your campus.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center max-md:text-sm text-base font-normal text-neutral-300">
            Mask is the platform for authentic conversations. Connect with your
            peers, share your thoughts, and engage in meaningful discussions
            without revealing your identity.
          </p>
          <div className="mt-12 flex w-full justify-center">
            <a href="https://maskers.vercel.app">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1d1d1_0%,#161616_50%,#f1f1f1_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl max-md:text-sm">
                  Join the community
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="z-40 mt-14 md:mt-20 max-md:w-[98%] w-[70%] rounded-lg bg-[#282828] max-md:p-1 p-4">
          <img
            className="w-full rounded-lg object-cover"
            src="https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709748803/mask/maskheros.png"
            alt="hero-image"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
