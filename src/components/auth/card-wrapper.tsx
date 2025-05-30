import type { CardWrapperProps } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";
import { Social } from "./social";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-1/3 shadow-md space-y-7">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="flex  flex-col gap-y-2">
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
