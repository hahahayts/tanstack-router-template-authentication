import { Button } from "../ui/button";

export const Social = () => {
  return (
    <>
      <Button variant={"outline"} className="w-full">
        <span className="sr-only">Sign in with Google</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.35 11.1H12v2h5.36c-.23 1.2-1.2 3.6-3.36 3.6-2.04 0-3.72-1.68-3.72-3.72s1.68-3.72 3.72-3.72c1.08 0 2 .36 2.76 1l2.64-2.64C17.64 5.36 15.48 4 12 4c-4.8 0-8.64 3.84-8.64 8.64S7.2 21.28 12 21.28c6 0 9-4.32 9-9s-3-9-9-9c-5.04 0-9 4-9 9s4 9 9 9c4.32 0 7.68-3.36 7.68-7.68z" />
        </svg>
        Sign in with Google
      </Button>

      <Button variant={"outline"} className="w-full">
        <span className="sr-only">Sign in with GitHub</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.47 0-.23-.01-.85-.01-1.67-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 012.5-.34 9.5 9.5 0 012.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.17.57.68.47A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
        </svg>
        Sign in with GitHub
      </Button>
    </>
  );
};
