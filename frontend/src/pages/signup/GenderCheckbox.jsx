const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-6">
      <label
        className="flex items-center cursor-pointer"
        style={{ color: "#3d4a55" }}
      >
        <input
          type="radio"
          name="gender"
          className="w-4 h-4 mr-2"
          style={{ accentColor: "#499fa4" }}
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
        <span className="text-sm font-medium">Male</span>
      </label>

      <label
        className="flex items-center cursor-pointer"
        style={{ color: "#3d4a55" }}
      >
        <input
          type="radio"
          name="gender"
          className="w-4 h-4 mr-2"
          style={{ accentColor: "#499fa4" }}
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
        <span className="text-sm font-medium">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckbox;
