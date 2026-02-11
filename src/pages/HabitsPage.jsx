import SectionTasks from '../components/SectionTasks';

const HabitsPage = () => {
  return (
    <SectionTasks 
        storageKey="habits" 
        title="Ежедневные привычки" 
        placeholder="Новая привычка"
        message="Добавьте ежедневную привычку"
    />
  )
}

export default HabitsPage