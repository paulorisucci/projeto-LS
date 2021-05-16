
  function load(newcountries) {
    localStorage.setItem('countries-app:countries', JSON.stringify(newcountries));
  }
  
 /* function create(country) {

    const countries = readAll();

    const newcountries = [...countries, country];

    load(newcountries);

    return country;
}*/
  function readAll() {
    return JSON.parse(localStorage.getItem('countries-app:countries'));
  }
  
  function read(id) {
    const countries = readAll();
  
    const country = countries.find((country) => country.id === id);
  
    return country;
  }
  
  function update(id, country) {
    const countries = readAll();
  
    const index = countries.findIndex((country) => country.id === id);
  
    if (index >= 0) {
      countries[index] = { id, ...country };
    }
  
    load(countries);
  
    return country;
  }
  
  function destroy(id) {
    const countries = readAll();
  
    const index = countries.findIndex((country) => country.id === id);
  
    if (index >= 0) {
      countries.splice(index, 1);
    }
  
    load(countries);
  }
  
  export default { load, readAll, read, update, destroy};