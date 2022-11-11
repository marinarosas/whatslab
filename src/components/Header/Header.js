import videoCam from "../../assets/videocam.svg"
import phoneCall from "../../assets/phonecall.svg"
import moreOptions from "../../assets/moreoptions.svg"
import { HeaderContainer, Status, Select} from "./Header.styled";

export function Header(props) {

//desestruturar props - vc não precisa colocar props na frente da variavel

const {currSender, senders, onChangeSender} = props

    return (
      <HeaderContainer>
        <div className="sender-profile">

          <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="Profile Photo"/> 
          {/* o picsum deixa vc coloca uma seed dele em ${} (como está acima)*/}
         
          <div>
            <Select value={currSender} onChange={onChangeSender}>
              {senders.map((sender)=> (
                <option key={sender} value={sender}>{sender}</option>
              ))}
            </Select>
            <Status>Online</Status>
          </div>

        </div>

        <div className="action-menu">
          <button>
            <img src={videoCam} alt="Video cam icon"/>
          </button>
          <button>
            <img src={phoneCall} alt="Phone call icon"/>
          </button>
          <button>
            <img src={moreOptions} alt="More options icon"/>
          </button>
        </div>

      </HeaderContainer>
    );
  }
  

  