import "./App.css";
import FormBuilder from "./components/FormBuilder";
import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <FormProvider>
      <h1>Adaca Form Builder</h1>
      <FormBuilder />
    </FormProvider>
  );
}

export default App;
