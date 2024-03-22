import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { SessionProvider } from "next-auth/react"

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}> 
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default App;
