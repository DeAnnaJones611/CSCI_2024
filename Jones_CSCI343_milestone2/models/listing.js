class Listing {

  //The structure of all the listings 
  //All the parts that are passed
    constructor(
      id,
      name,
      cards,

    ) {
      this.id = id;
      this.name = name;
      this.cards = cards;

    }
  
    toString() {
      return `${this.name} - Headline: $${this.cards} `;
    }
  }
  
  export default Listing;
  
  