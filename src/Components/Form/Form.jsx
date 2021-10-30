import React, { useState } from "react";
import * as S from "./styled";
import "antd/dist/antd.css";
import { message } from "antd";

function Form() {
  const [value, setValue] = useState();
  const [result, setResult] = useState();

  const handleChange = (e) => setValue(e.target.value);

  const Converter = () => {
    if (value !== undefined && value !== "") {
      const arr = [];
      const obj = JSON.parse(value);
      arr.push(obj);
      const items = arr;
      const replacer = (key, val) => (val === null ? "" : val);
      const header = Object.keys(items[0]);
      let csv = items.map((row) =>
        header
          .map((fieldName) => JSON.stringify(row[fieldName], replacer))
          .join(",")
      );
      csv.unshift(header.join(","));
      csv = csv.join("\r\n");

      setResult(csv);
    } else {
      return message.error("Preencha o campo Json");
    }
  };

  const ClearJson = () => setValue("");
  const ClearCsv = () => setResult("");

  return (
    <S.Layout>
      <S.Header />
      <S.FormLayout>
        <S.FormGroup>
          <S.Label htmlFor="label">Json</S.Label>
          <S.Input
            id="label"
            type="text"
            onChange={handleChange}
            value={value}
          />
          <S.Message>Cole nesse campo seu JSON </S.Message>
          <S.ClearButton onClick={ClearJson}>Limpar Json</S.ClearButton>
        </S.FormGroup>
        <S.ContainerCvs>
          <S.Name>CSV</S.Name>
          <S.BoxResult>{result}</S.BoxResult>
          <S.MessageCvs>CVS convertido</S.MessageCvs>
          <S.ClearButton onClick={ClearCsv}>Limpar Csv</S.ClearButton>
        </S.ContainerCvs>
      </S.FormLayout>
      <S.ButtonConverter onClick={Converter}>Converter</S.ButtonConverter>
    </S.Layout>
  );
}

export default Form;
