import Focus from "../components/Focus";
import SectionTasks from "../components/SectionTasks";

const HomePage = () => {
  return (
		<>
			<Focus title="Фокус дня"/>
			<SectionTasks 
				storageKey="goals" 
				title="Цели на год"
				placeholder="Новая цель"
				message="Добавьте цель на год"
			/>

			<SectionTasks 
				storageKey="habits" 
				title="Ежедневные привычки" 
				placeholder="Новая привычка"
				message="Добавьте ежедневную привычку"
			/>
		</>
  );
};

export default HomePage;
