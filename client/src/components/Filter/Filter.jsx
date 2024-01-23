import { useDispatch, useSelector } from "react-redux";
import { filterDrivers } from "../../redux/actions";

const Filter = ({ id, options }) => {
  const selectedValue = useSelector((state) => state.filter[id]);
  const dispatch = useDispatch();

  const onChangeSelection = (event) => {
    dispatch(filterDrivers({ who: event.target.id, data: event.target.value }));
  };

  return (
    <>
      <select
        id={id}
        onChange={onChangeSelection}
        value={selectedValue != null ? selectedValue : "-"}
      >
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </>
  );
};
export default Filter;