/* eslint-disable react/prop-types */
const Search = ({ setSearchTerm, setSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setSubmit(true);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setSubmit(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search employees"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
