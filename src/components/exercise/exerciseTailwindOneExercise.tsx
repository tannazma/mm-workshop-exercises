const steps = [
  { id: "01", name: "Job details", status: "complete" },
  { id: "02", name: "Application form", status: "current" },
  { id: "03", name: "Preview", status: "upcoming" }
] as const;

const ExerciseTailwindOneExercise = () => {
  return (
    <nav>
      <ul className="">
        {steps.map((step, stepIdx) => (
          <Step key={step.id} step={step} stepIdx={stepIdx} />
        ))}
      </ul>
    </nav>
  );
};

interface StepProps {
  step: {
    id: string;
    name: string;
    status: "complete" | "current" | "upcoming";
  };
  stepIdx: number;
}

const Step = ({ step, stepIdx }: StepProps) => {
  return (
    <li key={step.name} className="">
      {step.status === "complete" ? (
        <span className="">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
          <span className="">{step.name}</span>
        </span>
      ) : step.status === "current" ? (
        <div className="">
          <span className="">
            <span className="">{step.id}</span>
          </span>
          <span className="">{step.name}</span>
        </div>
      ) : (
        <div className="">
          <span className="">
            <span className="">
              <span className="">{step.id}</span>
            </span>
            <span className="">{step.name}</span>
          </span>
        </div>
      )}

      {/* Separator */}
      {stepIdx !== steps.length - 1 ? (
        <>
          <div className="" />
        </>
      ) : null}
    </li>
  );
};

export default ExerciseTailwindOneExercise;
