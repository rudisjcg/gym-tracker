"use client";

import { Input, SubmitButton } from "./components";
import { createContext, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

type FormValues = Record<string, string>;

interface FormContextType {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

interface FormProps {
  title?: string;
  description?: string;
  linkTo?: string; 
  onSubmit: (values: FormValues) => void;
  children: React.ReactNode;
  typeForm: string;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export function Form({ title, children, onSubmit, description, linkTo, typeForm }: FormProps) {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      <form className={typeForm === "register" ? "register_form" : "login_form"} onSubmit={handleSubmit}>
       
        {children}
        <div className="w-full text-center">


        {
          typeForm === "resetPassword" ? (
            <span>
              Type your new password
            </span>
          ) : (
            <></>
          )
        }
        
        </div>
      </form>
    </FormContext.Provider>
  );
}

Form.Input = Input;
Form.SubmitButton = SubmitButton;
