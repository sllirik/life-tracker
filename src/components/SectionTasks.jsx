import { useState, useEffect } from "react";
import SectionTasksHeader from "./TasksHeader";
import TasksFilters from "./TasksFilters";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";

const SectionTasks = ({ storageKey, title, placeholder, message }) => {
    // Задачи из массива или localStorage
	const [tasks, setTasks] = useState(()=> {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : [];
    });

    const [filter, setFilter] = useState('all');

    
    
    // Сохранение в localStorage
    useEffect (() => {
        localStorage.setItem(storageKey, JSON.stringify(tasks));
    }, [tasks, storageKey]);


	// Фильтрация
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });


	// Добавление задачи
    const addTask = (text) => {
        setTasks((prev) => [...prev, 
            {
                id: Date.now(),
                name: text,
                completed: false,
                isEditing: false
            }
        ]);
    };

	// Переключение чекбокса 
    const toggleTask = (id) => {
        setTasks(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

	// Удаление задачи
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    
    // Редактирование задачи
    const startEdit = (id) => {
        setTasks(prev => prev.map(task => ({...task, isEditing: task.id === id})));
    };

    // Сохранение редактирования задачи
    const saveEdit = (id, newName) => {
        setTasks(prev => prev.map(task => task.id === id ? {...task, name: newName, isEditing: false} : task));
    };

    // Отмена редактирования задачи
    const cancelEdit = (id) => {
        setTasks(prev => prev.map(task => task.id === id ? {...task, isEditing: false} : task));
    };


    


  return (
        <section className={`section-box ${storageKey}`}>

            {/* Секция с задачами */}
            <SectionTasksHeader sectionClass={storageKey} title={title} />


            {/* Форма задач */}
            <TasksForm 
                sectionClass={storageKey} 
                placeholder={placeholder} 
                message={message} 
                addTask={addTask}
            />

            {/* Фильтр задач */}
            <TasksFilters onFiltered={setFilter} filter={filter}/>


            {/* Список задач */}
            <TasksList 
                sectionClass={storageKey} 
                tasks={filteredTasks} 
                deleteTask={deleteTask} 
                toggleTask={toggleTask}
                startEdit={startEdit}
                saveEdit={saveEdit}
                cancelEdit={cancelEdit}
            />
        </section>
  );
};

export default SectionTasks;
