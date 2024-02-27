const Steps = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-[85vw] md:mb-12"
        id="steps"
      >
        <div className="text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            How it Works
          </p>
        </div>
        <div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 text-center sm:text-4xl md:mx-auto">
            Diagonose Yourself based on your symptoms
          </h2>
          <p className="text-base text-gray-700 text-center md:text-lg">
            We help you get diagonose based on your symptoms.
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-center text-center gap-4 p-8">
            <span className="bg-[#A3D9FF] p-4 max-w-xs rounded-full text-3xl">
              01
            </span>
            <h4 className="font-bold">Input Your Symptoms</h4>
            <p>
              Start by describing your symptoms in plain language. Whether it&apos;s
              a persistent cough or a throbbing headache.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-8">
            <span className="bg-[#A3D9FF] p-4 max-w-xs rounded-full text-3xl">
              02
            </span>
            <h4 className="font-bold">Let Our AI Analyze</h4>
            <p>
              Once you&apos;ve entered your symptoms, our advanced AI takes over. It
              employs cutting-edge algorithms to analyze your information.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-8">
            <span className="bg-[#A3D9FF] p-4 max-w-xs rounded-full text-3xl">
              03
            </span>
            <h4 className="font-bold">Receive Accurate Predictions</h4>
            <p>
              Within moments, you&apos;ll receive a precise prediction about
              potential health conditions related to your symptoms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
