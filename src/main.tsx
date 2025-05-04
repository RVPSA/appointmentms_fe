import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/index.tsx";
import i18next from "i18next";
import signIn from "./utilities/en/signIn.json";
import status from "./utilities/en/Status.json";
import appointmentBooking from "./utilities/en/Page/AppointmentBooking.json";
import { I18nextProvider } from "react-i18next";

// <> Language translation feature
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      signIn: signIn,
      status: status,
      appointmentBooking: appointmentBooking,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </StrictMode>
  </Provider>
);
