const SectionTasksHeader = ({sectionClass, title}) => {
	return (
		<header className={`section-box__header ${sectionClass}__header`}>
			<div className={`section-box__title ${sectionClass}__title`}>{title}</div>
		</header>
	)
}

export default SectionTasksHeader