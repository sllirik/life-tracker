import { useEffect, useState, useRef } from "react";

const TaskItem = ({sectionClass, task, onDelete, onToggle, onStartEdit, onSaveEdit, onCancelEdit}) => {
    const[value, setValue] = useState(task.name);
    const inputRef = useRef(null);
    
    useEffect(()=> {
        setValue(task.name);
    }, [task.name]);
    

    useEffect(() => {
    if (task.isEditing && inputRef.current) {
        inputRef.current.select();
    }
    }, [task.isEditing]);


    const sectionClassItem = sectionClass.slice(0, -1);
    const checkboxId = `${sectionClass}-task-${task.id}`;
    let stateMessage = task.completed ? 'Выполнено' : 'В процессе';

  return (
    <li className={`section-box__item ${sectionClass}__item`}>
            {/* Строка чекбокс с текстом */}
        <div className="section-box__item-text">
            {task.isEditing ? (
                <input
                className="section-box__item-edit-input"
                value={value}                
                ref={inputRef}
                autoFocus
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSaveEdit(task.id, value);
                  if (e.key === 'Escape') onCancelEdit(task.id);
                }}
              />
            ) : (
                <>
                    <input 
                        className={`section-box__item-checkbox ${sectionClass}__input`} 
                        id={checkboxId}
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <label className={`section-box__item-label ${sectionClass}__label`} htmlFor={checkboxId}>{task.name}</label>
                </>
            )}
            
        </div>

        {/* Статус выполнения, кнопки редактирования/удаления */}
        <div className="section-box__item-actions">
            <div className={`section-box__item-state ${task.completed ? 'section-box__item-state--completed' : ''} ${sectionClass}__state`}>{stateMessage}</div>
            {task.isEditing ? (
                
                <div className={`section-box__item-edit-buttons ${sectionClassItem}__edit-buttons`}>
                    <button className={`section-box__item-btn ${sectionClassItem}__edit-save`} onClick={() => onSaveEdit(task.id, value)} title="Применить">
                        <i className="ri-check-line"></i>
                    </button>
                    <button className={`section-box__item-btn ${sectionClassItem}__edit-cancel`} onClick={() => onCancelEdit(task.id)} title="Отмена">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
            ) : (
                <div className={`section-box__item-buttons ${sectionClass}__buttons`}>
                    <button 
                        className={`section-box__item-btn ${sectionClass}__edit`}
                        title="Редактировать цель"
                        onClick={() => onStartEdit(task.id)}
                    >
                        <i className="ri-pencil-line"></i>
                    </button>
                    <button 
                        className={`section-box__item-btn ${sectionClass}__delete`} 
                        title="Удалить цель" 
                        onClick={() => onDelete(task.id)}
                    >
                        <i className="ri-delete-bin-5-line"></i>
                    </button>
                </div>
            )}
            

            
        </div>
    </li>
  )
}

export default TaskItem