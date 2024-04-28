function RadioCard() {
  return (
    <div className="mt-2">
      <ul className="grid w-full gap-6 grid-cols-2">
        <li>
          <input
            id="radio_input1"
            name="radio_card"
            className="hidden peer"
            type="radio"
          />
          <label
            htmlFor="radio_input1"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:bg-gray-100"
          >
            <div className="block font-semibold text-lg">مشتری</div>
            <svg fill="currentColor" viewBox="0 0 16 16" width="3em">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </label>
        </li>
        <li>
          <input
            id="radio_input"
            name="radio_card"
            className="hidden peer"
            type="radio"
          />
          <label
            htmlFor="radio_input"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:bg-gray-100"
          >
            <div className="block font-semibold text-lg">طرف قرارداد</div>
            <svg viewBox="0 0 640 512" fill="currentColor" width="4em">
              <path d="M506.1 127.1c-17.97-20.17-61.46-61.65-122.7-71.1-22.5-3.354-45.39 3.606-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86c-79.7 12.31-129.8 79.34-131.9 82.24-7.844 10.69-5.531 25.72 5.125 33.57a23.858 23.858 0 0014.19 4.657c7.406 0 14.69-3.375 19.38-9.782.406-.563 40.19-53.91 100.5-63.23 7.457-.961 14.98.67 21.56 4.483L227.2 168.2c-12.4 12.3-20.1 27.9-20.1 46.3 0 17.5 6.812 33.94 19.16 46.29 13.24 12.41 29.64 18.31 47.14 18.31s33.94-6.813 46.31-19.19l11.35-11.35 124.2 100.9c2.312 1.875 2.656 5.251.5 7.97l-27.69 35.75c-1.844 2.25-5.25 2.594-7.156 1.063l-22.22-18.69-26.19 27.75c-2.344 2.875-5.344 3.563-6.906 3.719-1.656.156-4.562.125-6.812-1.719l-32.41-27.66L310.7 392.3l-2.812 2.938c-5.844 7.157-14.09 11.66-23.28 12.6-9.469.813-18.25-1.75-24.5-6.782L170.3 319.8H96V128.3H0v255.6l64 .04c11.74 0 21.57-6.706 27.14-16.14h60.64l77.06 69.66C243.7 449.6 261.9 456 280.8 456c2.875 0 5.781-.125 8.656-.438 13.62-1.406 26.41-6.063 37.47-13.5l.906.813c12.03 9.876 27.28 14.41 42.69 12.78 13.19-1.375 25.28-7.032 33.91-15.35 21.09 8.188 46.09 2.344 61.25-16.47l27.69-35.75c18.47-22.82 14.97-56.48-7.844-75.01l-120.3-97.76 8.381-8.382c9.375-9.376 9.375-24.57 0-33.94-9.375-9.376-24.56-9.376-33.94 0L285.8 226.8c-6.6 6.7-18.1 6.7-24.7 0-3.312-3.282-5.125-7.657-5.125-12.31 0-4.688 1.812-9.064 5.281-12.53l85.91-87.64c7.812-7.845 18.53-11.75 28.94-10.03 59.75 9.22 100.2 62.73 100.6 63.29 3.088 4.155 7.264 6.946 11.84 8.376H544v175.1c0 17.67 14.33 32.05 31.1 32.05L640 384V128.1l-133.9-1zM48 352c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.18 16 16.08c0 8.7-7.25 15.9-16 15.9zm544 0c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.117 16 15.99c0 8.79-7.2 15.99-16 15.99z" />
            </svg>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default RadioCard;
