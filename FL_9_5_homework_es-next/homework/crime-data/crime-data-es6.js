const victimDataSource = name => {
  const victimsByName = {
    'John': {
      name: 'John',
      surname: 'Doe',
      age: '99',
      jobTitle: 'Victim'
    },
    'Jennifer': {
      name: 'Jennifer',
      surname: 'Nicker',
      age: '21',
      jobTitle: 'Artist'
    }
  };

  return new Promise((resolve, reject) => {
    crimeDataSource(victimsByName[name].surname)
      .then(pro => {
        let vict = victimsByName[name];
        console.log(`
        ${vict.name} ${vict.surname} (${vict.jobTitle}, ${vict.age}) suffered from ${pro.title} in ${pro.place}.
        `)
      });
    setTimeout(() => {
      if (victimsByName.hasOwnProperty(name)) {
        resolve(victimsByName[name]);
      } else {
        reject('unknown victim');
      }
    }, 1000);
  });
}

const crimeDataSource = surname => {
  return new Promise((resolve, reject) => {
    const crimeBySurname = {
      'Doe': {
        title: 'dank memes',
        place: '9gag'
      },
      'Nicker': {
        title: 'robbery',
        place: 'NYC'
      }
    };

    setTimeout(() => {
      if (crimeBySurname.hasOwnProperty(surname)) {
        resolve(crimeBySurname[surname]);
      } else {
        reject('unknown surname');
      }
    }, 500);
  });
}

const loadVictimData = name => {
  try {
    return victimDataSource(name);
  } catch (e) {
    console.log(e);
  }
}