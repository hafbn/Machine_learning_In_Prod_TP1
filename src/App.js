
import './App.css';



function App() {
  function handleSubmit(e) {
    alert('Success');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> Name: <input type="text" name="name" /> </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
