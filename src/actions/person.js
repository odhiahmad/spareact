import * as action from "../redux/actions/person";
import person from "../assets/person";

function mockCreatePerson(person) {
  return Promise.resolve(person);
}

export const getAllPerson = () => (dispatch) => {
  person.all().then((res) => {
    dispatch({
      type: action.INIT,
      payload: res,
    });
  });
};

export const addPerson = (person) => (dispatch) => {
  mockCreatePerson(person).then((res) => {
    dispatch({
      type: action.ADD,
      payload: res,
    });
  });
};
