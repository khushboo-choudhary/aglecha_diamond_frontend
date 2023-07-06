const express = require("express");
const Todos = require("../models/ProductsModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Todos.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

// find all   http://localhost:2345/product

router.get("", async (req, res) => {
  try {
    const data = await Todos.find().lean().exec();
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

// find by id  http://localhost:2345/product/id/6280f7c90
router.get("/id/:id", async (req, res) => {
  try {
    const data = await Todos.findById(req.params.id).lean().exec();
    // console.log("description", data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});
//http://localhost:2345/product/search
// Backend API endpoint for searching products
// router.get("/search", async (req, res) => {
//   try {
//     console.log("req.query", req.query);

//     let filteredProducts = await Todos.find({
//       tag: { $regex: req.query.searchTerm, $options: "i" },
//       // { description: { $regex: req.query, $options: "i" } },
//     })
//       .lean()
//       .exec();

//     // const search = await Todos.find().filter(filteredProducts).lean().exec();
//     console.log("[===================", filteredProducts);
//     // console.log("================", search);
//     return res.send(filteredProducts);
//   } catch (error) {
//     return res.send(error);
//   }
// });

// Backend API endpoint for searching products
// router.get("/search", async (req, res) => {
//   try {
//     console.log("----", req.query);
//     const { categorySearchTerm, descriptionSearchTerm } = req.query;

//     const pipeline = [];
//     if (categorySearchTerm) {
//       pipeline.push({
//         $match: {
//           tag: { $regex: categorySearchTerm, $options: "i" },
//         },
//       });
//     }
//     console.log("checking the tag itema", categorySearchTerm);
//     if (descriptionSearchTerm) {
//       pipeline.push({
//         $match: {
//           description: { $regex: descriptionSearchTerm, $options: "i" },
//         },
//       });
//     }
//     console.log("checking the tag itema", descriptionSearchTerm);
//     pipeline.push({ $sort: { _id: 1 } }); // Add sorting if needed

//     const searchResults = await Todos.aggregate(pipeline).exec();
//     return res.json(searchResults);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// added filter of category discount rating sorting http://localhost:2345/product/earings?discount=60&rating=3.7
router.get("/:id", async (req, res) => {
  try {
    var mysort = { "price.sp": req.query.sorting || "" };
    const rating = req.query.rating || 0;
    const discount = req.query.discount || 0;

    const user = await Todos.find().sort(mysort).lean().exec();

    const filterCtegory = user.filter((e) => e.tag === req.params.id);

    const filterRating = filterCtegory.filter(
      (e) => e.customer_rating >= rating
    );

    const filterDiscount = filterRating.filter(
      (e) => e.price.discount >= discount
    );

    return res.send(filterDiscount);
  } catch (error) {
    ``;
    return res.send(error);
  }
});

module.exports = router;

// http://localhost:2345/product/earings  category sorting
// http://localhost:2345/product   all products

// http://localhost:2345/product/earings?rating=4  rating filter

// http://localhost:2345/product/earings?rating=4&discount=11  discount
// https://diamond-khushboo.herokuapp.com/
//https://diamond-server-backend.herokuapp.com/
