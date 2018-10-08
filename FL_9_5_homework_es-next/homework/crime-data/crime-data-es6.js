function victimDataSource(name) {
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

function crimeDataSource(surname) {
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

function loadVictimData(name) {
  try {
    return victimDataSource(name);
  } catch (e) {
    console.log(e);
  }
}

/**
 * Output: John Doe(Victim, 99) suffered from dank memes in 9 gag.
 */
loadVictimData('John');
/**
 * Output: Jennifer Nicker(Artist, 21) suffered from robbery in NYC.
 */
loadVictimData('Jennifer');
/**
 * Output: Unhandled Promise rejection: unknown victim
 * or familiar error msg
 */
loadVictimData('Jss');