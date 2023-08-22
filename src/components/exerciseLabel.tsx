const ExerciseLabel = ({
  label,
  description
}: {
  label: string;
  description?: string;
}) => (
  <>
    <h2 className="text-slate-800 font-bold text-md inline-block mt-10 mb-2">
      {label}
    </h2>
    {description && <p className="mb-4">{description}</p>}
  </>
);

export default ExerciseLabel;
