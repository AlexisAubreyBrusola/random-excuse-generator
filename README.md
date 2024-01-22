# Random Excuse Generator
*This app was made when I was learning React*

This React app showcases fetching data from an API and employs the **useState** and **useEffect** hooks along with **Axios**. The useState hook manages state variables, while the **useEffect** hook is utilized to reset the **excuseDate** state to **null**. The empty dependency array ([]) ensures that this effect executes only once after the initial render.

## In depth explanation with the help of ChatGPT:

1. **State Management:**
   Three state variables are declared using the useState hook: category to store the selected category, excuseData to store the API response data, and error to handle errors during API requests.

2. **Event Handling:**
   - The **handleDropdownChange** function updates the category state when the dropdown selection changes.
   - The **generateExcuse** function calls the **fetchData** function to fetch new excuse data based on the selected category and logs the generated excuse to the console.
3. **API Data Fetching:**
   - The **fetchData** function uses Axios to make an HTTP GET request to the excuse API (**https://excuser-three.vercel.app/v1/excuse/${category}/**). Upon receiving the response, it updates the **excuseData** state with the API response data. If an error occurs during the request, it updates the error state.
4. **useEffect for Initial Reset:**
   - The **useEffect** hook resets the **excuseData** state to null when the component mounts. This ensures that previous excuse data is cleared when the user interacts with the app.
