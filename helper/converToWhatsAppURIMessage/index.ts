const convertToWhatsAppURIMessage = (
  phoneNumber: string | number,
  message: string
) => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export default convertToWhatsAppURIMessage;
