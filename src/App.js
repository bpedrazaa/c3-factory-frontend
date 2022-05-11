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
    console.log(url);

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const results = data.results;
    let totalData = [];
    // Iterate over the results
    results.forEach((result) => {
      let cleanData = null;
      cleanData = {
        imageCover: result.artworkUrl100,
        songName: result.trackName,
        artistName: result.artistName,
        albumName: result.collectionName,
        time: result.trackTimeMillis / 1000,
        price: result.trackPrice,
        previewUrl: result.previewUrl,
        trackId: result.trackId
      };
      // Create an array with the new results
      totalData.push(cleanData);
    });
    // Update the State attribute songs
    setData(totalData);
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
