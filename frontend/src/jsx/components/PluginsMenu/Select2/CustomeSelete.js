import React from "react";

import Select from "react-select";


const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry" },
   { value: "vanilla", label: "Vanilla" },
];

export default function customGroup() {
   return (
      <div style={{ minHeight: "100px" }}>
         <Select defaultValue={options[1]} options={options} />
      </div>
   );
}
