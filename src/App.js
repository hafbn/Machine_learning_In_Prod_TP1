
import './App.css';



function App() {
  function handleSubmit(e) {
    alert('Success');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
