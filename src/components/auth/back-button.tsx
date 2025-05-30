import { Link } from "@tanstack/react-router";
import type { ButtonProps } from "../../types";
import { Button } from "../ui/button";

export const BackButton = ({ href, label }: ButtonProps) => {
  return (
    <div>
      <Button className="inline-block mx-auto" variant={"link"}>
        <Link to={href}>{label}</Link>
      </Button>
    </div>
  );
};
