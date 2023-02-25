const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};


const persons = person.result;

const numberOfPeople = persons.length;
document.getElementById('number-of-person').innerText = `Found ${numberOfPeople} Persons!`

const loadData = () => {
  const personContainer = document.getElementById('person-container');
  persons.forEach(person => {

    const { name, age, address } = person;
    console.log(person);
    const div = document.createElement('div');
    div.classList.add('col-sm-6');
    div.innerHTML = `
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <div class="card-header">
                        Person Name: ${name.common}
                    </div>
                    <div class="card-body">
                        <p class="card-text">Age: ${age}</p>
                        <p class="card-text">Address: ${address.street}</p>
                    </div>
                </div>
    
    `;
    personContainer.appendChild(div);
  });
}

loadData();



