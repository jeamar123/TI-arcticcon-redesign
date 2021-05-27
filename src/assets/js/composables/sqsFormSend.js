import { ref } from "vue";
import { useStore } from "vuex";
import { transformForm } from "@/assets/js/utils";
import { validateForm } from "@/assets/js/validation";

export default function useSqsFormSend() {
  const isFormSent = ref(false);
  const hasError = ref(false);

  const store = useStore();

  const sendForm = (formObj, formType) => {
    const isValid = validateForm(formObj);
    if (!isValid) return;

    const formData = transformForm(formObj);

    store
      .dispatch("POST", {
        formRoute: true,
        route: `form/${formType}`,
        data: formData,
      })
      .then(() => {
        isFormSent.value = true;
      })
      .catch(() => {
        hasError.value = true;
      });
  };

  return {
    isFormSent,
    hasError,
    sendForm,
  };
}
