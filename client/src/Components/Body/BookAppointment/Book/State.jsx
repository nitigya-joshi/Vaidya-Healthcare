import SelectMenu from "../../../Reuseable/SelectMenu/SelectMenu";

const states = [
  "Andaman & Nicobar",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra & Nagar Haveli",
  "Daman & Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Pondicherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Tripura",
  "Uttar Pradesh",
  "Uttaranchal",
  "West Bengal",
];

function State(props) {
  const options = states.map((state) => ({
    id: state,
    name: props.name,
    label: state,
  }));

  function optionsHandler(selectedState) {
    props.selectedState(
      options.findIndex((option) => option.label === selectedState) + 1
    );
  }

  return (
    <SelectMenu
      options={options}
      isSearchBox={true}
      optionsHandler={optionsHandler}
      {...props}
    />
  );
}

export default State;
