const { Router } = require('express');

//Controllers
const {
    getUserById,
    getUserWithCurse,
    createNewUser,
    updateUser,
} = require('../controllers/users.controllers');

const router = Router();

/****************routes for users by id**********************************/
router.get("/users/:id", getUserById);

router.get("/users/:id", getUserWithCurse);

router.put("/users/:id", updateUser);
/****************routes for users by id**********************************/
router.post("/users", createNewUser);

module.exports = router;