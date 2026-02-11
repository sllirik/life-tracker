import {useState} from 'react';

const SectionTasksForm = ({sectionClass, placeholder, message, addTask}) => {
	const [value, setValue] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		// Проверка на пустой ввод
		if(!value.trim()) return;

		// Добавить задачу
		addTask(value.trim());

		// Очистка формы
		setValue('');
	}



  return (
    <form className={`section-box__form ${sectionClass}__form`} onSubmit={submitHandler}>
        <input 
			className={`section-box__form-input ${sectionClass}__form-input`} 
			type="text" 
			placeholder={placeholder} 
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
        <div className="row">
            <div className={`section-box__form-message ${sectionClass}__form-message`}>{message}</div>
            <button className="section-box__form-btn btn" type='submit'>+ Добавить</button>
        </div>
    </form>
  )
}

export default SectionTasksForm