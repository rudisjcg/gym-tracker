
import { Button } from "@/components/ui/button";
import styles from "./styles.module.scss";
import { ReloadIcon } from "@radix-ui/react-icons"


interface SubmitButtonProps {
  buttonText: string;
  isLoading?: boolean;
  styleEdit?: string;
}

export function SubmitButton({ buttonText, isLoading, styleEdit }: SubmitButtonProps) {
  return (
    <Button className={styleEdit == "" ? styles.submitButton : styleEdit} type="submit" disabled={isLoading}>
      {isLoading ? <>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait...
      </> : buttonText}
    </Button>
  );
}
