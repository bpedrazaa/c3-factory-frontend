import { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [data, setData] = useState([]);
  const [viewForm, setViewForm] = useState(false);

  const { REACT_APP_BACKEND_API } = process.env;
  const url = REACT_APP_BACKEND_API;

  const loadData = async () => {
    const res = await fetch(url);
    const fetchedData = await res.json();

    setData(fetchedData);
  };

  const submitData = async ({
    defect,
    employeeId,
    levelUrgency,
    timeRepair,
    image
  }) => {
    const defectData = {
      defect: defect,
      employeeId: employeeId,
      levelUrgency: levelUrgency,
      timeRepair: timeRepair,
      image: image
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(defectData),
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      return response.json();
    });
  };

  useEffect(() => {
    loadData();
  }, [data]);

  const toggleForm = (e) => {
    e.preventDefault();
    setViewForm(true);
  };

  const hideForm = (e) => {
    e.preventDefault();
    setViewForm(false);
  };

  return (
    <div className='App'>
      <Header toggleForm={toggleForm} />
      {viewForm && <Form submitData={submitData} hideForm={hideForm} />}
      <Cards data={data} />;
    </div>
  );
}

export default App;
