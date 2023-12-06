interface GetPanelPackCount {
  (p: number): number;
}

interface GetComboBoxCount {
  (
    g: number,
    k: number,
  ): {
    combo_boxes: number;
    glucose_boxes: number;
    ketone_boxes: number;
  };
}

interface PanelRequest extends GetComboBoxCount {}

const MAX_PANEL_PACK_COUNT: number = 50;
const getPanelPackCount: GetPanelPackCount = (panel) =>
  Math.floor(panel / MAX_PANEL_PACK_COUNT);

const getComboBoxCount: GetComboBoxCount = (
  glucosePanelPackCount,
  ketonePanelPackCount,
) => {
  let comboPackCount = 0;

  while (glucosePanelPackCount > 1 && ketonePanelPackCount > 1) {
    comboPackCount = comboPackCount + 1;
    glucosePanelPackCount = glucosePanelPackCount - 2;
    ketonePanelPackCount = ketonePanelPackCount - 2;
  }

  return {
    combo_boxes: comboPackCount,
    glucose_boxes: glucosePanelPackCount,
    ketone_boxes: ketonePanelPackCount,
  };
};

export const panelRequest: PanelRequest = (glucosePanel, ketonePanel) => {
  const glucosePanelPackCount = getPanelPackCount(glucosePanel);
  const ketonePanelPackCount = getPanelPackCount(ketonePanel);

  return getComboBoxCount(glucosePanelPackCount, ketonePanelPackCount);
};
