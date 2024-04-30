import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-6 text-center">
      <h1 className="mb-1 text-4xl font-bold dark:text-white md:mb-3 md:text-7xl">
        Daniel Ng
      </h1>
      <p className="mb-3 text-base font-medium md:text-xl">
        Software Engineer & Web Developer
      </p>
      <p className="mb-6 max-w-xl text-sm font-bold">
        I specialize in developing web applications that not only meet the
        functional requirements but also prioritize user experience and
        scalability. All coding projects are built from the ground up, from
        planning and designing all the way to solving real-life problems with
        code.
        <br />
      </p>
    </div>
  );
}

export default Intro;
