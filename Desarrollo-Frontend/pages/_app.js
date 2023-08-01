import "./style.css";
import React from "react";
import { AppWrapper } from '../context/state'; // import based on where you put it
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
