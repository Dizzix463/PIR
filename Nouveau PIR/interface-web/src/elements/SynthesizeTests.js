import "../CSS/MainPage.css";
import "../components/ReturnButton.js";
import ReturnButton from "../components/ReturnButton.js";
import ButtonList from "../components/ButtonList";
import { useNavigate } from "react-router-dom";

export default function SynthesizeTests() {
  let navigate = useNavigate();
  return (
    <>
        <p className="txt-271 flex-hcenter">Synthesize Tests</p>
        {ReturnButton()}
        <div>
          <ButtonList navigate={navigate} />
        </div>
      </div>
    </>
  );
}
