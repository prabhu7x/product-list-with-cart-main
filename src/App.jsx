import './features/styles/App.css'
import ItemsPages from './components/ItemsPages'
import * as motion from 'motion/react-client'

function App() {

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.3, delay: .2, ease: "linear"}}
     className='app'>
      <h1 className="title">Desserts</h1>
    <ItemsPages />
    </motion.div>
  )
}

export default App
