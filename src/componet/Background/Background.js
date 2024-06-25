import { useTranslation } from "react-i18next"
import "./background.css"

const Background = (props) => {
  const {t} = useTranslation()
  return (
    <section className="background" >
      <div className="container">
        <div className="background-content" >
          <h2 style={props.font && {fontSize:"44px",lineHeight:1.7, width:"700px"}}>{t(props.title)}</h2>
          <p>{t(props.parg)}</p>
          <img src={props.img} alt="props.title" />
        </div>
      </div>
    </section>
  )
}

export default Background