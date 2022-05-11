const Card = ({ individualData }) => {
  // To render
  return (
    <div className='card bg-dark text-white m-2 mb-3' style={{ width: 500 }}>
      <img
        src={individualData.imageCover}
        className='card-img-top'
        alt='...'
        width='500'
        height='500'
      />
      <div className='card-body'>
        <h5 className='card-title'>{individualData.songName}</h5>
      </div>
      <div className='m-3'>
        <p className='m-2'>EMPLOYEE ID: {individualData.albumName}</p>
        <p className='m-2'>LEVEL OF URGENCY: {individualData.time} sec</p>
        <p className='m-2'>PRICE: {individualData.price} $</p>
      </div>
    </div>
  );
};

export default Card;
