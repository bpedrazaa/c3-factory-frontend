import { useState } from 'react';

const Form = ({ submitData }) => {
  const [defect, setDefect] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [levelUrgency, setLevelUrgency] = useState('');
  const [timeRepair, setTimeRepair] = useState(0);
  const [image, setImage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!defect) {
      alert('Please add the defect found');
      return;
    }
    if (!employeeId) {
      alert('Please add the ID of the employee who found the defect');
      return;
    }
    if (!levelUrgency) {
      alert('Please select the level of urgency');
      return;
    }
    if (timeRepair < 1) {
      alert('Please specify the time of repair of the defect');
      return;
    }
    if (!image) {
      alert('Please upload the image of the defect');
      return;
    }

    setDefect('');
    setEmployeeId('');
    setLevelUrgency('');
    setTimeRepair(0);
    setImage(null);

    submitData({ defect, employeeId, levelUrgency, timeRepair, image });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
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
              <input
                className='form-control'
                id='defect'
                value={defect}
                onChange={(e) => setDefect(e.target.value)}
              ></input>
            </div>
            <div className='form-group m-1 mb-4'>
              <label>EMPLOYEE ID</label>
              <input
                className='form-control'
                id='employee-id'
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              ></input>
            </div>
            <div className='form-group m-1 mb-4'>
              <label>LEVEL OF URGENCY</label>
              <select
                className='form-control'
                id='level-urgency'
                onChange={(e) => setLevelUrgency(e.target.value)}
                value={levelUrgency}
              >
                <option></option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className='form-outline m-1 mb-4'>
              <label>TIME OF REPAIR</label>
              <input
                type='number'
                className='form-control'
                id='time-repair'
                value={timeRepair}
                onChange={(e) => setTimeRepair(e.target.value)}
              ></input>
            </div>

            <div className='form-group m-1 mb-4'>
              <label>IMAGE OF THE DEFECT</label> <br />
              <input
                type='file'
                className='form-control-file'
                id='image'
                onChange={onImageChange}
              ></input>
              <img src={image} width='300' height='300' />
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
