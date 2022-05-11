const Form = ({ submitData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    submitData();
  };

  return (
    <div>
      <div className='alert alert-info' role='alert'>
        DEFECT REPORT
      </div>

      <div className='card bg-dark text-white m-2 mb-3'>
        <div className='m-5'>
          <form>
            <div className='form-group m-1 mb-4'>
              <label>DEFECT NAME</label>
              <textarea
                className='form-control'
                id='defect'
                rows='1'
              ></textarea>
            </div>
            <div className='form-group m-1 mb-4'>
              <label>EMPLOYEE ID</label>
              <textarea
                className='form-control'
                id='employee-id'
                rows='1'
              ></textarea>
            </div>
            <div className='form-group m-1 mb-4'>
              <label>LEVEL OF URGENCY</label>
              <select className='form-control' id='level-urgency'>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className='form-group m-1 mb-4'>
              <label>IMAGE OF THE DEFECT </label> <br />
              <input
                type='file'
                className='form-control-file'
                id='exampleFormControlFile1'
              ></input>
            </div>
            <button className='btn btn-primary m-1 btn-lg' onClick={onSubmit}>
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
