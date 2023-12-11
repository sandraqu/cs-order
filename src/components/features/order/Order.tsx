import PanelRequestForm from "../order/PanelRequestForm";
import { panelRequest } from "./helpers";
// import PanelRequestForm from "./PanelRequestForm";

const GLUCOSE_PANEL_LABEL_TEXT: string = "Need Glucose panels?";
const KETONE_PANEL_LABEL_TEXT: string = "Need Ketone panels?";
const PANEL_PLACEHOLDER_TEXT: string = "Add up to 100";
const PANEL_DATA = {
  panels: [
    {
      name: "glucose",
      label: GLUCOSE_PANEL_LABEL_TEXT,
      placeholder: PANEL_PLACEHOLDER_TEXT,
      orderQuantity: 0,
    },
    {
      name: "ketone",
      label: KETONE_PANEL_LABEL_TEXT,
      placeholder: PANEL_PLACEHOLDER_TEXT,
      orderQuantity: 0,
    },
  ],
};

const res = panelRequest(200, 150);
/* eslint-disable */

export default function Order() {
  return (
    <div className="order">
      <h2>Request</h2>
      <PanelRequestForm data={PANEL_DATA} />
      <h2>Shipping</h2>
      <ul>
        <li>Combo: {res.combo_boxes}</li>
        <li>Glucose: {res.glucose_boxes}</li>
        <li>Ketone: {res.ketone_boxes}</li>
      </ul>
    </div>
  );
}
