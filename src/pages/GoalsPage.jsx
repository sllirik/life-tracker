import SectionTasks from '../components/SectionTasks'

const GoalsPage = () => {
  return (
		<SectionTasks 
            storageKey="goals" 
            title="Цели на год"
            placeholder="Новая цель"
            message="Добавьте цель на год"
        />
  )
}

export default GoalsPage