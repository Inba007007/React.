import './Assetcss/css/mj.css';

const App=()=> {
  return (
    <div className='oiii'>
      
        <h2>Student Form</h2>
       <table className='oi'>
        <div >
       
        <td><input type="name"  placeholder="Name" className="fx1"></input></td>
       
        </div>
        <div>

       
        <input type="class"  placeholder="Class" className="fx1"></input>
       
        </div>
        <div>
      
        <input type="sex"  placeholder="Gender" className="fx1"></input>
        
        </div>
        <tr>
        <td><input type="email"  placeholder="Email" className="fx1"></input></td>
        </tr>
        <tr>
        <td><input type="password"  placeholder="Password" className="fx1"></input></td>
        </tr>
        <tr>
        <td><input type="submit" value="Submit"></input></td>
        </tr>
        
       </table>
    </div>
  )
}

export default App;