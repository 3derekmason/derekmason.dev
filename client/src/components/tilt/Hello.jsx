// import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      <h1
        style={{
          fontSize: "72px",
          color: "#fff",
          letterSpacing: "2px",
          fontWeight: "400",
          textShadow: "0 2px 4px #12121280",
        }}
      >
        Derek Mason
      </h1>
      <h4 style={{ color: "#efefef", textShadow: "0 1px 2px #12121280" }}>
        Software developer | Personal trainer | Lifelong learner
      </h4>
      <p style={{ color: "#fefefe", textShadow: "0 1px 2px #12121280" }}>
        Denver, Colorado
      </p>
    </div>
  );
}

const Hello = () => {
  const options = {
    scale: 1.2,
    speed: 1000,
    perspective: 500,
    max: 30,
  };

  return (
    <>
      <Tilt
        className="box"
        style={{
          width: "600px",
          height: "160px",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 5px 40px rgba(0, 0, 0, 0.2)",
          display: "grid",
          placeContent: "center",
          perspective: "800px",
          animation: "fadeIn 2s",
        }}
        options={options}
      />
    </>
  );
};
export default Hello;
