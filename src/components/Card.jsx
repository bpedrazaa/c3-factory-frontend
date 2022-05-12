const Card = ({ individualData }) => {
  // To render
  return (
    <div className='card bg-dark text-white m-2 mb-3' style={{ width: 500 }}>
      <img
        src={individualData.image}
        className='card-img-top'
        alt='...'
        width='500'
        height='500'
      />
      <div className='card-body'>
        <h5 className='card-title'>ID: {individualData.defectId}</h5>
        <h5 className='card-title'>DEFECT: {individualData.defect}</h5>
      </div>
      <div className='m-3'>
        <p className='m-2'>
          <font color='yellow'>EMPLOYEE ID: </font> {individualData.employeeId}
        </p>
        <p className='m-2'>
          <font color='yellow'>LEVEL OF URGENCY: </font>
          {individualData.levelUrgency}
        </p>
        <p className='m-2'>
          <font color='yellow'>TIME TO REPAIR (Hr): </font>
          {individualData.timeRepair} $
        </p>
      </div>
    </div>
  );
};

export default Card;
