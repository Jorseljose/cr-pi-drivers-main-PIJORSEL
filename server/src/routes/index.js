const { Router } = require("express");
const express = require("express");
const axios = require("axios");
const Drivers = require("../models/Driver");
const Teams = require("../models/Teams");

const router = Router();
// Ruta GET / drivers
router.get("/", async (req, res) => {
  try {
    const drivers = await Drivers.findAll({
      include: Teams,
    });
    // Agregar imagen por defecto a los conductores que no tienen
    drivers.forEach((driver) => {
      if (!driver.imagen) {
        driver.imagen = "URL_IMAGEN_POR_DEFECTO";
      }
    });

    res.json(drivers);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Hubo un error al obtener los conductores." });
  }
});

// Ruta GET /teams
router.get("/teams", async (req, res) => {
  try {
    // Realiza una solicitud a la API de equipos para obtener los equipos.
    const response = await axios.get("URL_API_EQUIPOS");
    const teams = response.data;

    // Luego, puedes guardar los equipos en la base de datos.
    await teams.bulkCreate(teams);

    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al obtener los equipos." });
  }
});

module.exports = router;
