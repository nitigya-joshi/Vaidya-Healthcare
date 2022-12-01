import SelectMenu from "../../../Reuseable/SelectMenu/SelectMenu";

function PatientSex(props) {
  const options = [
    {
      id: "patientSexMale",
      name: props.name,
      label: "Male",
    },
    {
      id: "patientSexFemale",
      name: props.name,
      label: "Female",
    },
    {
      id: "patientSexOther",
      name: props.name,
      label: "Other",
    },
  ];

  function optionsHandler(selectedPatientSex) {}

  return (
    <SelectMenu
      options={options}
      isSearchBox={false}
      optionsHandler={optionsHandler}
      {...props}
    />
  );
}

export default PatientSex;
