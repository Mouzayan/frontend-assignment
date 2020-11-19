const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
  const getDCHeroes = superHeroes => {
    const result = superHeroes
      .filter(hero => hero.publisher === "DC Comics")
      .map(hero => hero.superhero);
    return result;
  };

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (superHeroes) => {
    for (let i = 0; i < superHeroes.length; i++){
     superHeroes[i].characters = superHeroes[i].characters.split(', ')
    }
    return superHeroes;
  };
console.log(convertCharactersToArray(superHeroes));

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
  
  const groupByPublisher = (superHeroes) => {
    return superHeroes.reduce(function (a, e) {
      let estKey = (e['publisher']);
      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
      return a;
    }, {});
  }
  
/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (superHeroes) => {
    const result = superHeroes
      .filter(
        hero => hero.publisher === "DC Comics" && hero.characters.includes(",")
      )
      .map(hero => hero.superhero);
    return result;
  };
  console.log(getDCHeroesWithMoreThanOneCharacter(superHeroes));
 
module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
