const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      success: true,
      data: city,
      message: "Succesfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

// DELETE. -> /city/:id

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      success: true,
      data: response,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

const get = async (req,res)=>{

 try {
      const response = await cityService.getCity(req.parmas.id)
      return res.status(200).json({
        success: true,
         data: response,
         message: "Successfully fetched the city",
         err: {},
      })
 } catch (error) {
     console.log(error);
     return res.status(200).json({
        success: false,
         message: "Not able to get the city",
         err: {},
      })
 }
}


const update = async(req,res)=>{

   try {
     const response = await cityService.updateCity(req.params.id , req.body)
     res.status(500).json({
         sucess: true,
         data: response,
         message: "city updated Successfully",
         err: {}
     })
   } catch (error) {
     console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
   }
}


module.exports= {
create,
destroy,
get,
update
}