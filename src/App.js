import { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [data, setData] = useState([]);
  const [viewForm, setViewForm] = useState(false);

  const loadData = async () => {
    const { REACT_APP_BACKEND_API } = process.env;
    const url = REACT_APP_BACKEND_API;

    const res = await fetch(url);
    const fetchedData = await res.json();

    setData([...data, ...fetchedData]);
  };

  const submitData = async ({
    defect,
    employeeId,
    levelUrgency,
    timeRepair,
    image
  }) => {
    const formData = new FormData();
    formData.append('image', image.raw);

    // await fetch("YOUR_URL", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   body: formData
    // });

    console.log('Submit Data Button Clicked');
    console.log(defect);
    console.log(employeeId);
    console.log(levelUrgency);
    console.log(timeRepair);
    console.log(image.preview);
    console.log(formData);
    console.log({ image: image.raw });
    // Make the POST request
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const toggleForm = () => {
    setViewForm(!viewForm);
  };

  return (
    <div className='App'>
      <Header toggleForm={toggleForm} />
      {viewForm && <Form submitData={submitData} />}
      <Cards data={data} />;
    </div>
  );
}

export default App;
