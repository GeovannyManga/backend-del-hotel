const Carrito = require("../src/models/Carrito");

async function addCarrito(req, res) {
  try {
    const { user, rooms, transport } = req.body;

    const carrito = Carrito({
      user,
      rooms,
      transport,
    });
    const carritoStored = await carrito.save();
    res.status(201).send({ carritoStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
    addCarrito
  };
  
