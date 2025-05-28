const {City} = require('../models/index')


class CityRepository{

    // Create a City
    async createCity({name}){
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
              throw {error};
        }
    }

    // Delete a City
      async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

      async updateCity(cityId,data) {
        try {
         const city =  await City.findBypk(cityId);
         city.name = data.name
         await city.save();
         return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
      async getCity(cityId) {
        try {
         const city =  await City.findBypk(cityId);
         return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }



}

module.exports = CityRepository;


