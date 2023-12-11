import React, { useState } from "react";
import Input from "../../common/Input";

interface HandleChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

const OrderForm = ({
  data,
}: {
  data: {
    panels: {
      name: string;
      label: string;
      placeholder: string;
      orderQuantity: number;
    }[];
  };
}) => {
  const [formData, setFormData] = useState(data);

  const handleChange: HandleChange = (e) => {
    const { name, max, value } = e.target;

    const updatedData = formData.panels.map((panel) => {
      const toNumberValue = Number(value.replace(/\D/, ""));

      if (max) {
        // D will match non-digits and wipe them out preventing NaN
        const toNumberMax = Number(max);

        if (toNumberValue > toNumberMax) {
          console.log("100 is the most panels you may order");
          return panel;
        }
      }

      if (panel.name === name) {
        return {
          ...panel,
          orderQuantity: toNumberValue,
        };
      } else {
        return panel;
      }
    });

    setFormData({ panels: updatedData });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // const values = [...panelValues]
    // values[index].value = e.target.value
    // setPanelValues(values)
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.panels.map((panel, index) => {
        const { name, label, placeholder, orderQuantity } = panel;

        return (
          <Input
            name={name}
            label={label}
            placeholder={placeholder}
            handleChange={handleChange}
            value={orderQuantity || ""}
            pattern="[0-9]*"
            min={0}
            max={100}
            key={name + "_" + index} // id is a string in this case
          />
        );
      })}
      <br />
      <button type="submit">Order</button>
    </form>
  );
};

export default OrderForm;
