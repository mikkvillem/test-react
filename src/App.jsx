import './App.css';
// import useCount from './hooks/useCount';
function App() {
    return (
        <>
            <div>
                <h1>Count: 0</h1>
            </div>
            <button onClick={() => {}}>increment</button>
            <button onClick={() => {}}>decrement</button>
            <button onClick={() => {}}>incement by 3</button>
            <button onClick={() => {}}>incement debounced</button> {/* increment by num of clicks only 300ms after latest click */}
        </>
    );
}
// Change the background color of count each time the count changes.

export default App;
