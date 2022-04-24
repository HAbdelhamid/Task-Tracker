import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Going home early',
      day: 'Feb 15th at 3:12pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'study more',
      day: 'Feb 1th at 7:12pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Going to shcool earlier',
      day: 'Feb 2th at 4:12pm',
      reminder: false,
    }
  ] )


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete=
      {deleteTask} />
    </div>
  );
}

export default App;
