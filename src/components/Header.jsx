const Header = ({ toggleForm }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mx-auto text-white'>
      <h4 className='m-2 me-5'>CHOCOLATE FACTORY</h4>
      <button className='btn btn-danger m-2' onClick={toggleForm}>
        Add New Defect
      </button>
    </nav>
  );
};

export default Header;
