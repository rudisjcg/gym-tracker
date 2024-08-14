"use client";

import { useContext } from "react";
import { FormContext } from "..";
import styles from "./styles.module.scss";

interface InputProps {
  type?: "text" | "password" | "email";
  name: string;
  label?: string;
  placeholder?: string;
  styleEdit?: string;
}

export function Input({ label, name, placeholder, type, styleEdit }: InputProps) {
  const { formValues, setFormValues } = useContext(FormContext)!;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={`${styleEdit == "" ? styles.inputContainer : styleEdit}`}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formValues[name] || ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
