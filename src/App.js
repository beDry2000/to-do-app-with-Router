import { Link, Outlet, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '3rem' }}>
      <header>
        <nav style={{ width: '50%', display: 'flex', justifyContent: 'space-around' }}>
          <Link to='/todo'>To-do list</Link>
          <Link to='/doing'>Doing tasks</Link>
          <Link to='/done'>Complete tasks</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <div style={{ position: 'absolute', bottom: '5rem' }}>
        <button onClick={() => navigate('/todo')}>Go to To do list</button>
        <button onClick={() => navigate('/doing')}>Go to Doing Tasks</button>
        <button onClick={() => navigate('/done')}>Go to Completed Tasks</button>
      </div>
    </div>
  );
}

export default App;
