function App(){
      
    function handleClick(){
        console.log("clicked!");
    }

    return (
        <div className="app">
            <h1>Hello App</h1> 
            <p id="paragraph">Ahmet</p>
            <button id="btn" onClick={handleClick}>İsmi değiştir!</button>
        </div> 
    )
}

export default App