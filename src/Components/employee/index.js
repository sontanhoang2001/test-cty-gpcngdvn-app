import { useState } from "react";
import Popup from "reactjs-popup";

function AddEmployee() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    location: "",
    address: "",
    phone: "",
  });

  const [errorFullName, setErrorFullName] = useState(false);
  const [errorLocation, setErrorLocation] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [employee, setEmployee] = useState([]);

  // START FUNCTION CHECK VALID
  const onValidAnphabe = (val) => {
    const usernameRegex = /^([\w]{3,})+\s+([\w\s]{3,})$/i;
    return usernameRegex.test(val);
  };

  const onValidEmpty = (val) => {
    const valueRegex = /^\s*[0-9a-zA-Z][0-9a-zA-Z '-]*$/;
    return valueRegex.test(val);
  };

  function onValidtelephone(val) {
    var isphone =
      /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    return isphone.test(val);
  }
  // END FUNCTION CHECK VALID

  //  START HANDLE INPUT ON CHANGE
  const handleFullNameInputChange = (event) => {
    event.persist();

    const fullNameValue = event.target.value;

    if (fullNameValue == "" || fullNameValue.length > 30) {
      setErrorFullName(true);
    } else {
      if (onValidAnphabe(fullNameValue)) {
        setErrorFullName(false);
      } else {
        setErrorFullName(true);
      }
    }

    setValues((values) => ({
      ...values,
      fullName: fullNameValue,
    }));
  };

  const handleLocationInputChange = (event) => {
    event.persist();
    const localtionValue = event.target.value;
    if (localtionValue == "" || localtionValue.length > 30) {
      setErrorLocation(true);
    } else {
      if (onValidEmpty(localtionValue)) {
        setErrorLocation(false);
      } else {
        setErrorLocation(true);
      }
    }

    setValues((values) => ({
      ...values,
      location: localtionValue,
    }));
  };

  const handleAddressInputChange = (event) => {
    event.persist();

    const addressValue = event.target.value;

    if (addressValue == "" || addressValue.length > 60) {
      setErrorAddress(true);
    } else {
      if (onValidEmpty(addressValue)) {
        setErrorAddress(false);
      } else {
        setErrorAddress(true);
      }
    }

    setValues((values) => ({
      ...values,
      address: event.target.value,
    }));
  };

  const handlePhoneInputChange = (event) => {
    event.persist();
    const phoneValue = event.target.value;

    if (phoneValue == "" || !onValidtelephone(phoneValue)) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }

    setValues((values) => ({
      ...values,
      phone: event.target.value,
    }));
  };
  //  END HANDLE INPUT ON CHANGE

  // handle Reset form
  const resetFrom = () => {
    setValues({
      fullName: "",
      location: "",
      address: "",
      phone: "",
    });

    setErrorFullName(false);
    setErrorLocation(false);
    setErrorAddress(false);
    setErrorPhone(false);
    setSubmitStatus(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (
      errorFullName == false &&
      errorLocation == false &&
      errorAddress == false &&
      errorPhone == false &&
      values.fullName != "" &&
      values.location != "" &&
      values.address != "" &&
      values.phone != ""
    ) {
      setSubmitStatus(false);
      setEmployee((prevArray) => [...prevArray, values]);
      resetFrom();

      setOpen(false);
    } else {
      setSubmitStatus(true);
    }
  };

  return (
    <>
      <section className="w-full h-screen container mx-auto">
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="w-[50vh] flex justify-center items-center flex-wrap g-6 p-16 bg-slate-100 shadow-2xl">
            <div className="mb-12 md:mb-0">
              <form className="register-form">
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg font-medium mb-0 mr-4">
                    Form add new employee
                  </p>
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="FullName..."
                    name="fullName"
                    value={values.fullName}
                    onChange={handleFullNameInputChange}
                  />
                </div>
                {errorFullName && (
                  <div
                    className="mt-5 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
                    role="alert"
                  >
                    Fullname cannot be empty, Fullname must be smaller 30
                    character. plase try again!
                  </div>
                )}

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Location..."
                    name="location"
                    value={values.location}
                    onChange={handleLocationInputChange}
                  />
                </div>
                {errorLocation && (
                  <div
                    className="mt-5 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
                    role="alert"
                  >
                    Localtion cannot be empty, Localtion must be smaller 30
                    character. plase try again!{" "}
                  </div>
                )}

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Address..."
                    name="address"
                    value={values.address}
                    onChange={handleAddressInputChange}
                  />
                </div>
                {errorAddress && (
                  <div
                    className="mt-5 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
                    role="alert"
                  >
                    Localtion cannot be empty, Localtion must be smaller 60
                    character. plase try again!
                  </div>
                )}

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Phone..."
                    name="phone"
                    value={values.phone}
                    onChange={handlePhoneInputChange}
                  />
                  {errorPhone && (
                    <div
                      className="mt-5 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
                      role="alert"
                    >
                      Incorrect phone number. plase try again!
                    </div>
                  )}
                </div>

                {submitStatus && (
                  <div
                    className="mt-5 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
                    role="alert"
                  >
                    Add new fail. please try again!
                  </div>
                )}

                <div className="text-center lg:text-left">
                  <button
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleSubmit}
                  >
                    Add new
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      // reset state error
                      resetFrom();
                      setOpen((o) => !o);
                    }}
                    className="ml-2 inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Popup>

        <div className="flex justify-between">
          <p className="text-lg font-semibold mb-0 mr-4">List Employee</p>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex px-4 py-2 bg-blue-500 text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <svg
              className="group-hover:text-blue-500 mb-1 text-slate-400"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>{" "}
            Add new
          </button>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        FullName
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        localtion
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Phone
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isSubmit &&
                      employee.map((emp, index) => (
                        <>
                          <tr className="border-b" key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {emp.fullName}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {emp.location}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {emp.address}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {emp.phone}
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddEmployee;
