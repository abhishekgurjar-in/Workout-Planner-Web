// Parent component
import Exercises from "./Exercises";
import Progress from "./Progress";

const Parent = () => {
  const workoutPlanId = "6746e672959e0cfa81e33ad8"; // This would be dynamically set in a real application

  return (
    <div>
      <Exercises workoutPlanId={workoutPlanId} />
      <Progress workoutPlanId={workoutPlanId}/>
    </div>
  );
};

export default Parent;
