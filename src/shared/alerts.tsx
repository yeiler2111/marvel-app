import "sweetalert2";
import Swal, { SweetAlertIcon } from "sweetalert2";

export const alertModal = (
  title: string,
  text: string,
  icon: string,
  txtButton: string
) => {
  const iconType: SweetAlertIcon = icon as SweetAlertIcon;

  Swal.fire({
    title: title,
    text: text,
    icon: iconType,
    confirmButtonText: txtButton,
  });
};
