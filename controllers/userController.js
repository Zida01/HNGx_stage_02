const User = require('../models/userModel')

/**
 * CREATE USER 
 */
exports.createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            status: 'success',
            message: 'user created successfully'
        })

    } catch (error) {
        return res.status(400).json({
            status: ' error occured',
            message: error.message
        })


    }


}

/**
 * FIND ALL USER 
 */
exports.readUser = async (req, res, next) => {

    try {
        const readUser = await User.find()
        res.status(200).json({
            status: 'success',
            userData: readUser
        })

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }


}




/**
 * FIND ALL USER BY NAME
 */

exports.readUserByName = async (req, res, next) => {

    try {
        const readUser = await User.findOne({ name: req.params.id })
        res.status(200).json({
            status: 'success',
            userData: readUser
        })

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }


}

exports.updateUser = async (req, res, next) => {


    try {

        const update = req.body;
        const readUser = await User.findOneAndUpdate({ name: req.params.id },
            {
                name: req.body.name,
                age: req.body.age
            },
            { new: true })
        res.status(200).json({
            status: 'success',
            userData: readUser
        })

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }


}


exports.deleteUser = async (req, res, next) => {
    try {
        const name = req.params.id;
        const userExits = await User.findOne({ name: req.params.id })
        if (userExits) {

            const readUser = await User.findOneAndDelete({ name: req.params.id })
            res.status(200).json({
                status: 'success',
                message: `user ${name} deleted successfully`
                // 'delete user successfully'
            })
        }
        return res.json({
            message: "User does not exit "
        })

    } catch (error) {
        return res.status(404).json({
            status: ' error occured',
            message: error.message
        })

    }

}