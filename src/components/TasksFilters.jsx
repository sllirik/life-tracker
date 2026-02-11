const TasksFilters = ({onFiltered, filter}) => {
    const filterButtons = [
        {id: 'all', label: 'все'},
        {id: 'active', label: 'в процессе'},
        {id: 'completed', label: 'выполненные'}
    ]


    return (
        <div className="section-box__filter-buttons">
            {filterButtons.map(button => (
                <button 
                    key={button.id} 
                    className={`section-box__filter-btn ${filter === button.id ? 'section-box__filter-btn--active' : ''}`} 
                    onClick={()=> onFiltered(button.id)}>{button.label}</button>
            ))}
        </div>
    )
}

export default TasksFilters