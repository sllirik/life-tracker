import {useState} from 'react'


const Focus = ({title}) => {
    const QUOTES = [
      {
          text: 'Мы не поднимаемся до уровня своих ожиданий, мы падаем до уровня своей подготовки',
          author: 'Древнегреческий поэт Архилох'
      },
      {
          text: 'Плохие привычки формируются очень быстро, но жить с ними трудно. Хорошие привычки сформировать трудно, но жить с ними легко',
          author: 'Брайан Трейси'
      },
      {
          text: 'Дисциплина — это не ограничение свободы. Это отсечение всего лишнего',
          author: 'Брюс Ли'
      }
    ]

    const [quote, setQuote] = useState(QUOTES[0])


    const updateQuote = () => {
        setQuote(prev => {
            let next;
            do {
                next = QUOTES[Math.floor(Math.random() * QUOTES.length)];
            } while (prev.text === next.text);
            return next;
        });
    }

  return (
    <section className="section-box focus">
        <header className="section-box__header focus__header">
            <div className="section-box__title focus__title">{title}</div>                    
        </header>
        <div className="focus__quote">
            <blockquote className="focus__quote-text"><q>{quote.text}</q>.</blockquote>  
            <div className="focus__quote-author">— {quote.author}</div>
        </div>
        <button className="focus__btn btn btn--fill" onClick={updateQuote}>Обновить цитату</button>
    </section>
  )
}

export default Focus