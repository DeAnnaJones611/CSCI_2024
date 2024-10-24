
//This is the vacation class that is used to make the vacation data 
class Vacation {
  constructor(id, vacationId, name, avgCost, foundedYear, rating, desciption,  imageUrl) {
    this.id = id;
    this.vacationId = vacationId;
    this.name = name;
    this.avgCost = avgCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.desciption = desciption
    this.imageUrl = imageUrl;
  }

  //This is the string used to send the data
  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Cost: ${this.avgCost}, Rating: ${this.rating}, desciption: ${this.desciption}`;
  }
}

export default Vacation;
