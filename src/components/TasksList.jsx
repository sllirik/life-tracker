import TaskItem from './TaskItem'

const TasksList = ({tasks, sectionClass, deleteTask, toggleTask, startEdit, saveEdit, cancelEdit}) => {

	return (
		<ul className={`section-box__list ${sectionClass}__list`}>
            {
                tasks.map(task => 
                    <TaskItem 
                        sectionClass={sectionClass} 
                        key={task.id} 
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask} 
                        onStartEdit={startEdit}
                        onSaveEdit={saveEdit}
                        onCancelEdit={cancelEdit}
                    /> )
            }
			
		</ul>
	)
}

export default TasksList