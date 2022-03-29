export const coachReducer = (coach = [], action) => {
  switch (action.type) {
    case "COACH_FETCH":
      return action.payload;
    default:
      return coach;
  }
};