const checkError = (error) => {
  if (error.response) {
    if (error.response.data.data) {
      return toastr.error(error.response.data.data.message);
    }
    return toastr.error(error.response.data.message);
  }
  return toastr.error(error.message);
};

export default checkError;
