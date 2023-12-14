import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p className="text-sm text-[#f1f1f1] font-extrabold mt-10">
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
