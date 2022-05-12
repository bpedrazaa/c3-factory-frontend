import Card from './Card';

const Cards = ({ data }) => {
  // To render
  return (
    <div>
      <div className='row'>
        <div className='alert alert-warning m-2' role='alert'>
          CURRENT DEFECTS
        </div>

        {/* Put cards in a column (side by side) */}
        {data.map((individualData) => (
          <div className='col'>
            <Card
              individualData={individualData}
              key={individualData.defectId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
