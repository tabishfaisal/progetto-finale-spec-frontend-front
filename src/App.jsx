import GlobalProvider from './Context/GlobalContext';
import Routes from './routes/Routes';
const App = () => {
  return (
    <div className="body">
      <GlobalProvider>
         <Routes />
      </GlobalProvider>
   
    </div>
  )
}

export default App

