const NameDesc = () => {
  return (
    <div className="text-2xl md:text-5xl text-center text-white font-sectionHeading py-4">
      I am {window.innerWidth < 768 && <br />}
      <span className="text-4xl md:text-7xl hover:text-violet-500 font-firstDescription hover:cursor-pointer">
        Akshat Garg
        <div className="inline-block animate-bounce">👋</div>
      </span>
      <p className="font-sectionDescription text-base md:text-lg text-slate-400">
        I enjoy creating websites 😌
      </p>
    </div>
  );
};

export default NameDesc;
